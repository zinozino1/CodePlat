import React, { useEffect } from "react";
import styled from "styled-components";
import firebase from "../../firebase";

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

const ChatBody = () => {
  const users = firebase.database().ref("users");

  useEffect(() => {
    //console.log(users.ref);
  }, [users]);

  return (
    <ChatBodyWrapper>
      <div className="stranger">
        <span className="stranger-content">안녕하세요</span>
      </div>
      <div className="me">
        <span className="me-content">반갑습니다</span>
      </div>
      <div className="stranger">
        <span className="stranger-content">안녕하세요</span>
      </div>
      <div className="me">
        <span className="me-content">반갑습니다</span>
      </div>
      <div className="stranger">
        <span className="stranger-content">안녕하세요</span>
      </div>
      <div className="me">
        <span className="me-content">반갑습니다ㅋㅋㅋㅋㅋㅋㅋㅋ</span>
      </div>
      <div className="stranger">
        <span className="stranger-content">안녕하세요</span>
      </div>
      <div className="me">
        <span className="me-content">반갑습니다</span>
      </div>
      <div className="stranger">
        <span className="stranger-content">안녕하세요111111111</span>
      </div>
      <div className="me">
        <span className="me-content">반갑습니다</span>
      </div>
      <div className="stranger">
        <span className="stranger-content">안녕하세요</span>
      </div>
      <div className="me">
        <span className="me-content">반갑습니다</span>
      </div>
      <div className="stranger">
        <span className="stranger-content">안녕하세요</span>
      </div>
      <div className="me">
        <span className="me-content">반갑습니다</span>
      </div>
      <div className="stranger">
        <span className="stranger-content">안녕하세요</span>
      </div>
      <div className="me">
        <span className="me-content">반갑습니다</span>
      </div>
      <div className="stranger">
        <span className="stranger-content">안녕하세요</span>
      </div>
      <div className="me">
        <span className="me-content">반갑습니다</span>
      </div>
      <div className="stranger">
        <span className="stranger-content">안녕하세요</span>
      </div>
      <div className="me">
        <span className="me-content">반갑습니다</span>
      </div>
      <div className="stranger">
        <span className="stranger-content">안녕하세요</span>
      </div>
      <div className="me">
        <span className="me-content">반갑습니다</span>
      </div>
      <div className="stranger">
        <span className="stranger-content">안녕하세요</span>
      </div>
      <div className="me">
        <span className="me-content">반갑습니다</span>
      </div>
    </ChatBodyWrapper>
  );
};

export default ChatBody;
