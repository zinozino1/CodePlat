import React from "react";
import ChatBody from "./ChatBody";
import ChatForm from "./ChatForm";

const ChatContainer = ({ chatRoomKey }) => {
  return (
    <div>
      <ChatBody chatRoomKey={chatRoomKey} key={chatRoomKey} />
      <ChatForm chatRoomKey={chatRoomKey} />
    </div>
  );
};

export default ChatContainer;
