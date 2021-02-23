import React, { Component } from "react";
import styled, { css } from "styled-components";
import firebase from "../../firebase";
import moment from "moment";
import { connect } from "react-redux";

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

export class ChatBody extends Component {
  messagesEnd = React.createRef();

  state = {
    messages: [],
    messagesRef: firebase.database().ref("messages"),
  };

  componentDidMount() {
    //console.log(this.state.messagesRef);
    const { chatRoom } = this.props;
    const { me } = this.props;

    if (chatRoom) {
      this.addMessagesListeners(chatRoom.id);
    }
  }

  componentDidUpdate() {
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView({ block: "end", inline: "nearest" });
    }
  }

  componentWillUnmount() {
    this.state.messagesRef.off();
    this.messagesEnd = null;
  }

  addMessagesListeners = (chatRoomId) => {
    let messagesArray = [];
    this.setState({ messages: [] });
    this.state.messagesRef
      .child(chatRoomId)
      .on("child_added", (DataSnapshot) => {
        // console.log(DataSnapshot.ref_.parent.key);
        // if (DataSnapshot.ref_.parent.key === chatRoomId) {
        //   messagesArray.push(DataSnapshot.val());

        //   this.setState({
        //     messages: messagesArray,
        //   });
        // }
        messagesArray.push(DataSnapshot.val());

        this.setState({
          messages: messagesArray,
        });
      });
  };

  scrollToBottom = () => {
    this.scrollRef.current.scrollIntoView({
      block: "end",
      inline: "nearest",
    });
  };

  renderMessages = (messages) =>
    messages.length > 0 &&
    messages.map((v, i) => {
      const { me } = this.props;
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
    });
  render() {
    const { messages } = this.state;
    return (
      <ChatContainer>
        {this.renderMessages(messages)}
        <div ref={(node) => (this.messagesEnd = node)} />
      </ChatContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    me: state.user.me,
    chatRoom: state.chat.currentChatRoom,
  };
};

export default connect(mapStateToProps)(ChatBody);
