import React, { useState, useEffect, useRef, useCallback } from "react";
import styled, { css } from "styled-components";
import firebase from "../../firebase";
import { useSelector } from "react-redux";
import moment from "moment";

const ChatContainer = styled.div`
  height: 60vh;
  margin: 30px;
  overflow: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 5px;
  padding-top: 20px;
  background: #eee;
`;

const ChatBodyWrapper = styled.div`
  /* height: 60vh;
  margin: 30px;
  overflow: auto; */

  .stranger {
    /* border: 1px solid black; */
    padding: 5px;
  }
  .me {
    /* border: 1px solid black; */
    text-align: right;
    padding: 5px;
  }
  .me-content,
  .stranger-content {
    /* border: 1px solid black; */
    padding: 3px 10px;
    border-radius: 4px;
  }
`;

const MessageWrapper = styled.div`
  /* border: 1px solid black; */
  padding: 5px;

  .message-timestamp {
    font-size: 10px;
    color: #999;
    margin: 0 5px;
  }
  ${(props) =>
    props.type === "me"
      ? css`
          text-align: right;
          .message-content {
            ${(props) =>
              props.wordbreak === "true" &&
              css`
                display: inline-block;
                width: 200px;
                word-wrap: break-word;
              `}

            text-align: left;

            padding: 5px;
            /* border: 1px solid black; */
            border-radius: 4px;
            background: #fee500;
          }
        `
      : css`
          .message-content {
            ${(props) =>
              props.wordbreak === "true" &&
              css`
                display: inline-block;
                width: 200px;
                word-wrap: break-word;
              `}

            text-align: left;
            padding: 5px;
            /* border: 1px solid black; */
            border-radius: 4px;
            background: #fff;
            color: #111;
          }
        `}
`;

const ChatBody = ({ chatRoomKey }) => {
  //console.log(chatRoomKey);
  const { me } = useSelector((state) => state.user);
  const { currentChatRoom } = useSelector((state) => state.chat);
  //console.log(currentChatRoom);

  const scrollRef = useRef();

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

  const scrollToBottom = useCallback(() => {
    scrollRef.current.scrollIntoView({
      // behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [messages]);

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
    scrollToBottom();
  }, [messages]);

  useEffect(() => {}, [messages]);

  return (
    <ChatContainer
    // style={{
    //   height: "60vh",
    //   margin: "30px",
    //   overflow: "auto",
    //   border: "1px solid black",
    //   padding: "20px 5px",
    // }}
    >
      <ChatBodyWrapper ref={scrollRef}>
        {messages.length > 0 &&
          messages.map((v, i) => {
            if (v.user.clientId === me._id) {
              return (
                <MessageWrapper
                  type="me"
                  key={v.timestamp}
                  wordbreak={v.content.length > 10 ? "true" : "false"}
                >
                  <span className="message-timestamp">
                    {moment(v.timestamp).format("MM/DD HH:mm")}
                  </span>
                  <span className="message-content">{v.content}</span>
                </MessageWrapper>
              );
            } else {
              return (
                <MessageWrapper
                  key={v.timestamp}
                  type="opponent"
                  wordbreak={v.content.length > 10 ? "true" : "false"}
                >
                  <span className="message-content">{v.content}</span>
                  <span className="message-timestamp">
                    {moment(v.timestamp).format("MM/DD HH:mm")}
                  </span>
                </MessageWrapper>
              );
            }
          })}
      </ChatBodyWrapper>
    </ChatContainer>
  );
};

export default ChatBody;
