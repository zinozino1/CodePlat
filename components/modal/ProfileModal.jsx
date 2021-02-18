import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { Rate, Button, Tag } from "antd";
import { useSelector } from "react-redux";
import firebase from "../../firebase";

const ProfileWrapper = styled.div`
  margin: 0;
  border: 1px solid #ddd;
  padding: 5px;
  .btn-wrapper {
    padding: 5px;
    text-align: center;
  }
`;

const RowWrapper = styled.div`
  padding: 5px;

  .tag-partial {
    width: 55px;
    text-align: center;
  }
`;

const ProfileModal = ({ writer }) => {
  const { me } = useSelector((state) => state.user);
  // console.log(me.id);
  // console.log(writer.id);

  const [chatRoomsRef, setChatRoomsRef] = useState(
    firebase.database().ref("chatRooms"),
  );

  const [chatRooms, setChatRooms] = useState([]);

  const addChatRoomListener = () => {
    let chatRoomsArray = [];

    chatRoomsRef.on("child_added", (DataSnapShot) => {
      chatRoomsArray.push(DataSnapShot.val());
      // charRooms
      //console.log(chatRoomsArray);
      setChatRooms(chatRoomsArray);
    });
  };

  const onCreateChatRoom = useCallback(async () => {
    let user = firebase.auth().currentUser;
    if (user) {
      const key = chatRoomsRef.push().key;
      const newChatRoom = {
        id: key,
        users: [
          { clientId: me._id, nickname: me.nickname },
          { clientId: writer._id, nickname: writer.nickname },
        ],
      };
      //console.log(chatRooms);
      let chatRoomExist = false;
      chatRooms.forEach((v, i) => {
        let cnt = 0;
        v.users.forEach((s, j) => {
          //console.log(s.clientId);
          if (
            s.clientId === newChatRoom.users[0].clientId ||
            s.clientId === newChatRoom.users[1].clientId
          ) {
            cnt++;
          }
        });
        if (cnt === 2) {
          chatRoomExist = true;
        }
      });
      // let cnt = 0;
      //console.log("cnt", cnt);
      if (chatRooms.length === 0) {
        alert("로딩중.. 잠시만 기다려주세요.");
        return;
      }
      if (chatRoomExist) {
        // 이미 채팅방이 있다면
        alert("이미 채팅방이 있ㅅ브니다");
      } else {
        // 없다면 새로 생성
        try {
          await chatRoomsRef.child(key).update(newChatRoom);
          alert("채팅방 생성완료");

          //setChatRoomsRef(null);
        } catch (error) {
          alert("failed.");
        }
      }
      chatRoomExist = false;
    }
  }, [chatRoomsRef, chatRooms]);

  useEffect(() => {
    addChatRoomListener();
    // return () => {
    //   chatRoomsRef.off();
    // };
  }, []);

  // useEffect(() => {
  //   console.log(chatRooms);
  // }, [chatRooms]);

  return (
    <ProfileWrapper>
      <RowWrapper>
        <span>
          <Tag className="tag-partial" color="#ccc">
            관심기술
          </Tag>
        </span>
        {writer.techStack.map((v, i) => {
          if (i < 3) {
            return (
              <Tag color="blue" key={v}>
                {v}
              </Tag>
            );
          }
        })}
      </RowWrapper>
      <RowWrapper>
        <span>
          <Tag className="tag-partial" color="#ccc">
            가입일
          </Tag>
        </span>
        <span>{`${new Date(writer.createdAt).getFullYear()}.${
          new Date(writer.createdAt).getMonth() + 1
        }.${new Date(writer.createdAt).getDate()}`}</span>
      </RowWrapper>
      <RowWrapper>
        <span>
          <Tag className="tag-partial" color="#ccc">
            Github
          </Tag>
        </span>
        {me && me.secretGithub ? (
          <span style={{ color: "#999" }}>비공개</span>
        ) : (
          <span>{writer.githubUrl}</span>
        )}
      </RowWrapper>
      {/* <RowWrapper>
        <span>
          <Tag className="tag-partial" color="#ccc">
            평점
          </Tag>
        </span>
        <span>
          <Rate allowHalf disabled defaultValue={(writer.rating = 0)} />
        </span>
      </RowWrapper> */}
      <RowWrapper className="btn-wrapper">
        {me && me._id !== writer._id && (
          <Button
            type="primary"
            className="note-btn"
            onClick={onCreateChatRoom}
          >
            쪽지 보내기
          </Button>
        )}
      </RowWrapper>
    </ProfileWrapper>
  );
};

export default ProfileModal;
