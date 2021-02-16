import React from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";

const ChatFormWrapper = styled.div`
  margin: 30px;
  display: flex;
`;

const InputWrapper = styled.div`
  border: 1px solid black;
  flex: 7;
`;

const ButtonWrapper = styled.div`
  border: 1px solid black;
  flex: 1;
`;

const ChatForm = () => {
  return (
    <ChatFormWrapper>
      <InputWrapper>
        <Input />
      </InputWrapper>
      <ButtonWrapper>
        <Button style={{ width: "100%" }}>
          {/* <UpCircleOutlined /> */}
          전송
        </Button>
      </ButtonWrapper>
    </ChatFormWrapper>
  );
};

export default ChatForm;
