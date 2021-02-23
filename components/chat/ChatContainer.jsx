import React from "react";
import ChatBody from "./ChatBody";
import ChatForm from "./ChatForm";
import shortid from "shortid";

const ChatContainer = ({ chatRoomKey }) => {
  return (
    <div>
      <ChatBody key={shortid.generate()} chatRoomKey={chatRoomKey} />
      <ChatForm />
    </div>
  );
};

export default ChatContainer;
