import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import firebase from "../../firebase";
import { useSelector } from "react-redux";

const ChatBodyWrapper = styled.div`
  height: 60vh;
  margin: 30px;
  overflow: auto;
  .stranger {
    border: 1px solid black;
    padding: 5px;
  }
  .me {
    border: 1px solid black;
    text-align: right;
    padding: 5px;
  }
  .me-content,
  .stranger-content {
    border: 1px solid black;
    padding: 3px 10px;
    border-radius: 4px;
  }
`;

const MessageWrapper = styled.div`
  /* border: 1px solid black; */
  padding: 5px;
  ${(props) =>
    props.type === "me"
      ? css`
          text-align: right;
          span {
            padding: 5px;
            border: 1px solid black;
            border-radius: 4px;
            background: #fee500;
          }
        `
      : css`
          span {
            padding: 5px;
            border: 1px solid black;
            border-radius: 4px;
            background: #222;
            color: #fff;
          }
        `}
`;

const ChatBody = ({ chatRoomKey }) => {
  //console.log(chatRoomKey);
  const { me } = useSelector((state) => state.user);
  const { currentChatRoom } = useSelector((state) => state.chat);
  //console.log(currentChatRoom);

  const [messages, setMessages] = useState([]);

  const messagesRef = firebase.database().ref("messages");

  const addMessagesListener = () => {
    let messagesArray = [];
    messagesRef.child(currentChatRoom.id).on("child_added", (DataSnapShot) => {
      //console.log("snapshot:", DataSnapShot.val());
      messagesArray.push(DataSnapShot.val());
      setMessages([...messagesArray]);
    });
  };

  useEffect(() => {
    //console.log("새로운 거 시작");
    addMessagesListener();
    return () => {
      //console.log("unmount.");
      setMessages([]);
      messagesRef.off();
    };
  }, [chatRoomKey]);

  useEffect(() => {
    //console.log(messages);
  }, [messages]);

  return (
    <ChatBodyWrapper>
      {messages.length > 0 &&
        messages.map((v, i) => {
          if (v.user.clientId === me._id) {
            return (
              <MessageWrapper type="me" key={v.timestamp}>
                <span>{v.content}</span>
              </MessageWrapper>
            );
          } else {
            return (
              <MessageWrapper key={v.timestamp} type="opponent">
                <span>{v.content}</span>
              </MessageWrapper>
            );
          }
        })}
    </ChatBodyWrapper>
  );
};

export default ChatBody;
