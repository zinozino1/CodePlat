import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import firebase from "../../firebase";

const ChatFormWrapper = styled.div`
  margin: 30px;
  display: flex;
`;

const InputWrapper = styled.div`
  /* border: 1px solid black; */
  flex: 7;
`;

const ButtonWrapper = styled.div`
  /* border: 1px solid black; */
  flex: 1;
`;

const ChatForm = ({ chatRoomKey }) => {
  const { me } = useSelector((state) => state.user);
  const { currentChatRoom } = useSelector((state) => state.chat);
  const [content, setContent] = useState("");

  const [messagesRef, setMessagesRef] = useState(
    firebase.database().ref("messages"),
  );
  // const messagesRef = firebase.database().ref("messages");

  const createMessage = () => {
    const message = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        clientId: currentChatRoom.users.filter((v, i) => {
          //console.log(v);
          if (v.clientId === me._id) {
            return v;
          }
        })[0].clientId,
        name: me.nickname,
      },
      content,
    };
    //console.log(message.user.clientId);
    return message;
  };

  const onChangeContent = useCallback((e) => {
    //console.log(e.target.value);
    setContent(e.target.value);
  }, []);

  const onSubmit = useCallback(async () => {
    if (content === "") {
      alert("메시지를 입력해주세요.");
      return;
    }
    try {
      // 여기서 작업하면 댐 상대방이 마이페이지 밖에 있는 것을 판단해야함
      // user -> isInMypage : boolean
      // 채팅방의 상대방이 마이페이지 바깥에 있다면 상대방 firebase의 lastknown업데이트 하면 댐
      await messagesRef.child(currentChatRoom.id).push().set(createMessage());
      setContent("");
      let opponentNickname = null;
      await firebase
        .database()
        .ref(`chatRooms`)
        .child(currentChatRoom.id)
        .once("value", function (data) {
          data.val().users.forEach((v, i) => {
            if (v.nickname !== me.nickname) {
              opponentNickname = v.nickname;
            }
          });
          // console.log(data.val());
        });
      //console.log("상대방 닉네임은 ", opponentNickname);
      let opponentUid = null;

      await firebase
        .database()
        .ref(`users`)
        .orderByChild("nickname")
        .equalTo(opponentNickname)
        .once("value", function (data) {
          //console.log("상대방의 정보는", data.val());
          opponentUid = Object.keys(data.val())[0];
        });
      //console.log("상대방 uid는", opponentUid);

      let opponentInfo = null;
      await firebase
        .database()
        .ref("users")
        .child(opponentUid)
        .once("value", function (data) {
          opponentInfo = data.val();
        });
      //console.log("상대방 정보는 ", opponentInfo);

      let isExistOpponentLeave = null;
      await firebase
        .database()
        .ref("chatRooms")
        .child(currentChatRoom.id)
        .once("value", function (data) {
          // console.log(data.val());
          if (data.val()[opponentNickname]) {
            isExistOpponentLeave = data.val()[opponentNickname];
          }
        });
      //console.log("상대방 나간 흔적이 있니?", isExistOpponentLeave);

      // 상대방이 마이페이지에 없을 때
      if (!opponentInfo.isInMypage) {
        // 상대방이 읽지않은채로 마이페이지 벗어난 경우
        if (isExistOpponentLeave) {
          await firebase
            .database()
            .ref("chatRooms")
            .child(currentChatRoom.id)
            .child(opponentNickname)
            .update({
              ...isExistOpponentLeave,
              count: isExistOpponentLeave.count + 1,
              total: isExistOpponentLeave.total + 1,
              lastKnownTotal: isExistOpponentLeave.lastKnownTotal,
            });
        } else {
          // 상대방이 모두 읽은채로 마이페이지 벗어난 경우 = 초기상태 정의
          await firebase
            .database()
            .ref("chatRooms")
            .child(currentChatRoom.id)
            .child(opponentNickname)
            .update({
              chatRoomId: currentChatRoom.id,
              user: opponentNickname,
              total: 1,
              lastKnownTotal: 0,
              count: 1,
            });
        }
      }
    } catch (error) {
      console.log(error);
      alert("오류 발생");
      setContent("");
    }
  }, [content, messagesRef, chatRoomKey]);

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  useEffect(() => {
    return () => messagesRef.off();
  }, []);

  return (
    <ChatFormWrapper>
      <InputWrapper>
        <Input
          onChange={onChangeContent}
          value={content}
          onKeyPress={handleEnterPress}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button style={{ width: "100%" }} onClick={onSubmit}>
          {/* <UpCircleOutlined /> */}
          전송
        </Button>
      </ButtonWrapper>
    </ChatFormWrapper>
  );
};

export default ChatForm;
