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
      await messagesRef.child(currentChatRoom.id).push().set(createMessage());
      setContent("");
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
