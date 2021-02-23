import React, { Component } from "react";
import { Divider, Row, Col, Button, Form, Menu, Badge } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  CalendarOutlined,
  LinkOutlined,
  UserOutlined,
} from "@ant-design/icons";
import MypageLayout from "../components/layout/MypageLayout";
import EditProfileForm from "../components/mypage/EditProfileForm";
import MyActivityTemplate from "../components/mypage/MyActivityTemplate";
import SkillFilterForm from "../components/common/contents/SkillFilterForm";
import styled from "styled-components";
import Head from "next/head";
import EditProfile from "../components/mypage/EditProfile";
import ChatContainer from "../components/chat/ChatContainer";
import wrapper from "../store/configureStore";
import {
  setUserRequestAction,
  setCurrentOpponentRequestAction,
} from "../reducers/user";
import { END } from "redux-saga";
import client from "../lib/api/client";
import firebase from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import shortid from "shortid";
import {
  setCurrentChatRoomAction,
  initializeChatRoomAction,
} from "../reducers/chat";
import { connect } from "react-redux";

const { SubMenu } = Menu;

const MenuWrapper = styled.div`
  display: flex;
  .menu-bar {
    flex: 1;
    /* border: 1px solid red; */
    width: 200px;
    height: 90vh;
    /* .ant-badge {
      padding: 3px;
    } */
  }
  .menu-content {
    flex: 4;
    /* border: 1px solid black; */
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .menu-bar {
      height: 100%;
      width: 100%;
    }
    .menu-content {
      margin-bottom: 3rem;
    }
  }
`;

class mypage extends Component {
  constructor(props, context) {
    super(props, context);

    this.componentCleanup = this.componentCleanup.bind(this);
  }
  state = {
    chatRoomsRef: firebase.database().ref("chatRooms"),
    messagesRef: firebase.database().ref("messages"),
    // show: false,
    // name: "",
    // description: "",
    chatRooms: [],
    // activeChatRoomId: "",
    firstLoad: true,

    notifications: [],
    currentMenu: "profile",
    chatRoomKey: "",
  };

  onChangeCurrentMenu = (e) => {
    if (e.key === "profile" || e.key == "activity") {
      this.props.dispatch(setCurrentChatRoomAction(null));
    }
    //console.log(e.key);
    this.setState({ currentMenu: e.key });
  };

  setChatRoomKey = (id) => {
    this.setState({ chatRoomKey: id });
  };

  onSetCurrentChatRoom = (chatRoom) => {
    // if (
    //   this.state.currentMenu !== "profile" &&
    //   this.state.currentMenu !== "activity"
    // ) {
    this.props.dispatch(setCurrentChatRoomAction(chatRoom));
    //}
    this.clearNotifications(chatRoom.id);
  };

  addChatRoomListener = () => {
    let chatRoomsArray = [];

    this.state.chatRoomsRef.on("child_added", (DataSnapshot) => {
      //console.log(DataSnapshot.val());
      chatRoomsArray.push(DataSnapshot.val());
      this.setState({ chatRooms: chatRoomsArray });
      this.addNotificationListener(DataSnapshot.key, DataSnapshot.val());
    });
  };

  addNotificationListener = (chatRoomId, chatRoomInfo) => {
    this.state.messagesRef.child(chatRoomId).on("value", (DataSnapshot) => {
      // if (this.props.chatRoom) {
      //console.log(DataSnapshot.val());
      this.handleNotifications(
        chatRoomId,
        this.props.chatRoom ? this.props.chatRoom.id : "", // 현재 채팅룸 아이디
        this.state.notifications,
        DataSnapshot,
        chatRoomInfo,
      );
      //}
    });
  };

  handleNotifications = async (
    chatRoomId,
    currentChatRoomId,
    notifications,
    DataSnapshot,
    chatRoomInfo,
  ) => {
    let lastTotal = 0;

    let index = notifications.findIndex(
      (notification) => notification.id === chatRoomId,
    );

    if (index === -1) {
      // 초기 렌더링
      // 여기서 디비 로직?
      let firebaseSnapshot = null;
      await firebase
        .database()
        .ref(`/chatRooms/${chatRoomId}/${this.props.me.nickname}`)
        .once("value")
        .then((snapshot) => {
          //console.log(snapshot.val());
          firebaseSnapshot = snapshot.val();
        });
      //let firebaseData = this.state.chatRoomsRef.child(this.props.me.nickname);
      if (firebaseSnapshot) {
        //console.log("있음");
        notifications.push({
          id: chatRoomId,
          total: firebaseSnapshot.total,
          lastKnownTotal: firebaseSnapshot.lastKnownTotal,
          count: firebaseSnapshot.count,
        });
      } else {
        //console.log("없음");
        notifications.push({
          id: chatRoomId,
          total: DataSnapshot.numChildren(),
          lastKnownTotal: DataSnapshot.numChildren(),
          count: 0,
        });
      }

      //console.log(chatRoomInfo);
    } else {
      // 업데이트
      if (chatRoomId !== currentChatRoomId) {
        lastTotal = notifications[index].lastKnownTotal;

        if (DataSnapshot.numChildren() - lastTotal > 0) {
          notifications[index].count = DataSnapshot.numChildren() - lastTotal;
        }
      } else {
        notifications[index].lastKnownTotal = DataSnapshot.numChildren();
      }

      notifications[index].total = DataSnapshot.numChildren();
    }
    //console.log(notifications);
    this.setState({ notifications });
  };

  clearNotifications = async (currentChatRoomId) => {
    // console.log("실행.");
    // console.log("chat room id", currentChatRoomId);
    let index = this.state.notifications.findIndex(
      (notification) => notification.id === currentChatRoomId,
    );

    if (index !== -1) {
      let updatedNotifications = [...this.state.notifications];
      updatedNotifications[index].lastKnownTotal = this.state.notifications[
        index
      ].total;
      updatedNotifications[index].count = 0;
      this.setState({ notifications: updatedNotifications });
      await this.state.chatRoomsRef
        .child(currentChatRoomId)
        .child(this.props.me.nickname)
        .remove();
    }
  };

  getNotificationCount = (chatRoom) => {
    let count = 0;

    this.state.notifications.forEach((notification) => {
      if (notification.id === chatRoom.id) {
        count = notification.count;
      }
    });

    if (count > 0) return count;
  };

  setFirstChatRoom = () => {
    const firstChatRoom = this.state.chatRooms[0];
    if (this.state.firstLoad && this.state.chatRooms.length > 0) {
      this.props.dispatch(setCurrentChatRoomAction(firstChatRoom));
      //this.setState({ activeChatRoomId: firstChatRoom.id })
    }
    this.setState({ firstLoad: false });
  };

  componentCleanup = () => {
    // 새로고침시에도 파이어베이스에 저장
    let lastKnown = [];
    this.state.notifications.forEach((notification, i) => {
      if (notification.total !== notification.lastKnownTotal) {
        lastKnown.push({
          chatRoomId: notification.id,
          user: this.props.me.nickname,
          total: notification.total,
          lastKnownTotal: notification.lastKnownTotal,
          count: notification.count,
        });
      }
    });
    if (lastKnown) {
      lastKnown.forEach(async (v, i) => {
        //const key = this.state.chatRoomsRef.child(v.chatRoomId).push().key;
        await this.state.chatRoomsRef
          .child(v.chatRoomId)
          .child(this.props.me.nickname)
          .update({ ...v });
      });
    }
    // return "FUck";
    // // alert("F");
  };

  componentDidMount() {
    window.addEventListener("beforeunload", this.componentCleanup);
    //console.log(this.state.me);
    //console.log(this.props.chatRoom);
    //console.log(this.state.notifications);
    this.addChatRoomListener();
  }

  componentWillUnmount() {
    // 다른 페이지로 갈 경우 파이어베이스에 읽지않은 메시지 저장
    //this.componentCleanup();
    window.removeEventListener("beforeunload", this.componentCleanup);
    //console.log(this.state.notifications, "저장해버리겠습니다~");
    let lastKnown = [];
    this.state.notifications.forEach((notification, i) => {
      if (notification.total !== notification.lastKnownTotal) {
        lastKnown.push({
          chatRoomId: notification.id,
          user: this.props.me.nickname,
          total: notification.total,
          lastKnownTotal: notification.lastKnownTotal,
          count: notification.count,
        });
      }
    });
    if (lastKnown) {
      lastKnown.forEach(async (v, i) => {
        //const key = this.state.chatRoomsRef.child(v.chatRoomId).push().key;
        await this.state.chatRoomsRef
          .child(v.chatRoomId)
          .child(this.props.me.nickname)
          .update({ ...v });
      });
    }
    //console.log("lastknwon", lastKnown);
    this.state.chatRoomsRef.off();

    this.state.chatRooms.forEach((chatRoom) => {
      this.state.messagesRef.child(chatRoom.id).off();
    });
  }

  render() {
    //if (!this.state.me) return null;
    const { chatRooms } = this.state;
    const { me } = this.props;
    return (
      <>
        <Head>
          <meta charSet="utf-8"></meta>
          <title>마이페이지</title>
        </Head>

        <MypageLayout>
          <MenuWrapper>
            <div className="menu-bar">
              <Menu
                mode="inline"
                style={{ height: "100%" }}
                defaultSelectedKeys={["profile"]}
                //defaultOpenKeys={["sub1"]}
                onClick={this.onChangeCurrentMenu}
              >
                <Menu.Item key="profile" icon={<UserOutlined />}>
                  프로필 수정
                </Menu.Item>
                <Menu.Item key="activity" icon={<AppstoreOutlined />}>
                  내 활동
                </Menu.Item>
                {/* <Menu.Item key="note" icon={<MailOutlined />}>
            채팅
          </Menu.Item> */}
                <SubMenu
                  key="note"
                  icon={<MailOutlined />}
                  title="쪽지함"
                  onClick={this.onChangeCurrentMenu}
                  //onTitleClick={loadChatRooms}
                >
                  <>
                    {chatRooms.map((v, i) => {
                      let flag = false;
                      v.users.forEach((s, j) => {
                        if (me && s.clientId === me._id) flag = true;
                      });
                      if (flag) {
                        return (
                          <Menu.Item
                            key={
                              v.users.filter((s, j) => {
                                if (me && s.nickname !== me.nickname) {
                                  return s;
                                }
                              })[0].nickname
                            }
                            onClick={(e) => {
                              //this.onChangeCurrentMenu(e);
                              this.setChatRoomKey(v.id);
                              this.onSetCurrentChatRoom(v);
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <span style={{}}>
                                {
                                  v.users.filter((s, j) => {
                                    if (me && s.nickname !== me.nickname) {
                                      return s;
                                    }
                                  })[0].nickname
                                }
                              </span>
                              <span>
                                <Badge
                                  //count={1}
                                  count={this.getNotificationCount(v)}
                                  style={{
                                    borderRadius: "3px",
                                    fontSize: "9px",
                                    padding: "0 2px",
                                    height: "13px",
                                    minWidth: "13px",
                                    lineHeight: "13px",
                                  }}
                                />
                              </span>
                            </div>
                          </Menu.Item>
                        );
                      }
                      flag = false;
                    })}
                  </>
                </SubMenu>
                {/* {chatRooms.map((v, i) => {
                  let flag = false;
                  v.users.forEach((s, j) => {
                    if (me && s.clientId === me._id) flag = true;
                  });
                  if (flag) {
                    return (
                      <Menu.Item
                        key={
                          v.users.filter((s, j) => {
                            if (me && s.nickname !== me.nickname) {
                              return s;
                            }
                          })[0].nickname
                        }
                        onClick={() => {
                          this.setChatRoomKey(v.id);
                          this.onSetCurrentChatRoom(v);
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <span style={{}}>
                            {
                              v.users.filter((s, j) => {
                                if (me && s.nickname !== me.nickname) {
                                  return s;
                                }
                              })[0].nickname
                            }
                          </span>
                          <span>
                            <Badge
                              //count={1}
                              count={this.getNotificationCount(v)}
                              style={{
                                borderRadius: "3px",
                                fontSize: "9px",
                                padding: "0 2px",
                                height: "13px",
                                minWidth: "13px",
                                lineHeight: "13px",
                              }}
                            />
                          </span>
                        </div>
                      </Menu.Item>
                    );
                  }
                  flag = false;
                })} */}
              </Menu>
            </div>
            <div className="menu-content">
              {this.state.currentMenu === "profile" && <EditProfile />}
              {this.state.currentMenu === "activity" && <MyActivityTemplate />}
              {this.state.currentMenu !== "profile" &&
                this.state.currentMenu !== "activity" && (
                  <ChatContainer chatRoomKey={this.state.chatRoomKey} />
                )}

              {/* <div style={{ border: "0.2px solid white", margin: "10px" }}></div>
        <MyActivityTemplate></MyActivityTemplate> */}
            </div>
          </MenuWrapper>
        </MypageLayout>
      </>
    );
  }
}

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    //console.log(context);

    const cookie = context.req ? context.req.headers.cookie : "";
    client.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      //console.log("fuckcookie", cookie);
      client.defaults.withCredentials = true;
      client.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch(setUserRequestAction());
    //context.store.dispatch(mainLoadPostsReqeustAction());
    //context.store.dispatch(END);
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

const mapStateToProps = (state) => {
  return {
    me: state.user.me,
    chatRoom: state.chat.currentChatRoom,
  };
};

export default connect(mapStateToProps)(mypage);
// import React, { Component } from "react";
// import { Divider, Row, Col, Button, Form, Menu, Badge } from "antd";
// import {
//   AppstoreOutlined,
//   MailOutlined,
//   SettingOutlined,
//   CalendarOutlined,
//   LinkOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import MypageLayout from "../components/layout/MypageLayout";
// import EditProfileForm from "../components/mypage/EditProfileForm";
// import MyActivityTemplate from "../components/mypage/MyActivityTemplate";
// import SkillFilterForm from "../components/common/contents/SkillFilterForm";
// import styled from "styled-components";
// import Head from "next/head";
// import EditProfile from "../components/mypage/EditProfile";
// import ChatContainer from "../components/chat/ChatContainer";
// import wrapper from "../store/configureStore";
// import {
//   setUserRequestAction,
//   setCurrentOpponentRequestAction,
// } from "../reducers/user";
// import { END } from "redux-saga";
// import client from "../lib/api/client";
// import firebase from "../firebase";
// import { useSelector, useDispatch } from "react-redux";
// import shortid from "shortid";
// import {
//   setCurrentChatRoomAction,
//   initializeChatRoomAction,
// } from "../reducers/chat";
// import { connect } from "react-redux";

// const { SubMenu } = Menu;

// const MenuWrapper = styled.div`
//   display: flex;
//   .menu-bar {
//     flex: 1;
//     /* border: 1px solid red; */
//     width: 200px;
//     height: 90vh;
//     /* .ant-badge {
//       padding: 3px;
//     } */
//   }
//   .menu-content {
//     flex: 4;
//     /* border: 1px solid black; */
//   }
//   @media (max-width: 768px) {
//     flex-direction: column;
//     .menu-bar {
//       height: 100%;
//       width: 100%;
//     }
//     .menu-content {
//       margin-bottom: 3rem;
//     }
//   }
// `;

// class mypage extends Component {
//   state = {
//     chatRoomsRef: firebase.database().ref("chatRooms"),
//     messagesRef: firebase.database().ref("messages"),
//     // show: false,
//     // name: "",
//     // description: "",
//     chatRooms: [],
//     // activeChatRoomId: "",
//     firstLoad: true,

//     notifications: [],
//     currentMenu: "profile",
//     chatRoomKey: "",
//   };

//   onChangeCurrentMenu = (e) => {
//     this.setState({ currentMenu: e.key });
//   };

//   setChatRoomKey = (id) => {
//     this.setState({ chatRoomKey: id });
//   };

//   onSetCurrentChatRoom = (chatRoom) => {
//     this.props.dispatch(setCurrentChatRoomAction(chatRoom));
//     this.clearNotifications(chatRoom.id);
//   };

//   addChatRoomListener = () => {
//     let chatRoomsArray = [];

//     this.state.chatRoomsRef.on("child_added", (DataSnapshot) => {
//       //console.log(DataSnapshot.val());
//       chatRoomsArray.push(DataSnapshot.val());
//       this.setState({ chatRooms: chatRoomsArray }, () =>
//         this.setFirstChatRoom(),
//       );
//       this.addNotificationListener(DataSnapshot.key);
//     });
//   };

//   addNotificationListener = (chatRoomId) => {
//     this.state.messagesRef.child(chatRoomId).on("value", (DataSnapshot) => {
//       if (this.props.chatRoom) {
//         this.handleNotifications(
//           chatRoomId,
//           this.props.chatRoom.id, // 현재 채팅룸 아이디
//           this.state.notifications,
//           DataSnapshot,
//         );
//       }
//     });
//   };

//   clearNotifications = (currentChatRoomId) => {
//     // console.log("실행.");
//     // console.log("chat room id", currentChatRoomId);
//     let index = this.state.notifications.findIndex(
//       (notification) => notification.id === currentChatRoomId,
//     );

//     if (index !== -1) {
//       let updatedNotifications = [...this.state.notifications];
//       updatedNotifications[index].lastKnownTotal = this.state.notifications[
//         index
//       ].total;
//       updatedNotifications[index].count = 0;
//       this.setState({ notifications: updatedNotifications });
//     }
//   };

//   handleNotifications = (
//     chatRoomId,
//     currentChatRoomId,
//     notifications,
//     DataSnapshot,
//   ) => {
//     let lastTotal = 0;

//     let index = notifications.findIndex(
//       (notification) => notification.id === chatRoomId,
//     );

//     if (index === -1) {
//       notifications.push({
//         id: chatRoomId,
//         total: DataSnapshot.numChildren(),
//         lastKnownTotal: DataSnapshot.numChildren(),
//         count: 0,
//       });
//     } else {
//       if (chatRoomId !== currentChatRoomId) {
//         lastTotal = notifications[index].lastKnownTotal;

//         if (DataSnapshot.numChildren() - lastTotal > 0) {
//           notifications[index].count = DataSnapshot.numChildren() - lastTotal;
//         }
//       }

//       notifications[index].total = DataSnapshot.numChildren();
//     }
//     this.setState({ notifications });
//   };

//   getNotificationCount = (chatRoom) => {
//     let count = 0;

//     this.state.notifications.forEach((notification) => {
//       if (notification.id === chatRoom.id) {
//         count = notification.count;
//       }
//     });

//     if (count > 0) return count;
//   };

//   setFirstChatRoom = () => {
//     const firstChatRoom = this.state.chatRooms[0];
//     if (this.state.firstLoad && this.state.chatRooms.length > 0) {
//       this.props.dispatch(setCurrentChatRoomAction(firstChatRoom));
//       //this.setState({ activeChatRoomId: firstChatRoom.id })
//     }
//     this.setState({ firstLoad: false });
//   };

//   componentDidMount() {
//     //console.log(this.state.me);
//     //console.log(this.props.chatRoom);
//     this.addChatRoomListener();
//   }

//   componentWillUnmount() {
//     this.state.chatRoomsRef.off();

//     this.state.chatRooms.forEach((chatRoom) => {
//       this.state.messagesRef.child(chatRoom.id).off();
//     });
//   }

//   render() {
//     //if (!this.state.me) return null;
//     const { chatRooms } = this.state;
//     const { me } = this.props;
//     return (
//       <>
//         <Head>
//           <meta charSet="utf-8"></meta>
//           <title>마이페이지</title>
//         </Head>

//         <MypageLayout>
//           <MenuWrapper>
//             <div className="menu-bar">
//               <Menu
//                 mode="inline"
//                 style={{ height: "100%" }}
//                 defaultSelectedKeys={["profile"]}
//                 //defaultOpenKeys={["sub1"]}
//                 onClick={this.onChangeCurrentMenu}
//               >
//                 <Menu.Item key="profile" icon={<UserOutlined />}>
//                   프로필 수정
//                 </Menu.Item>
//                 <Menu.Item key="activity" icon={<AppstoreOutlined />}>
//                   내 활동
//                 </Menu.Item>
//                 {/* <Menu.Item key="note" icon={<MailOutlined />}>
//             채팅
//           </Menu.Item> */}
//                 <SubMenu
//                   key="note"
//                   icon={<MailOutlined />}
//                   title="쪽지함"
//                   //onTitleClick={loadChatRooms}
//                 >
//                   <>
//                     {chatRooms.map((v, i) => {
//                       let flag = false;
//                       v.users.forEach((s, j) => {
//                         if (me && s.clientId === me._id) flag = true;
//                       });
//                       if (flag) {
//                         return (
//                           <Menu.Item
//                             key={
//                               v.users.filter((s, j) => {
//                                 if (me && s.nickname !== me.nickname) {
//                                   return s;
//                                 }
//                               })[0].nickname
//                             }
//                             onClick={() => {
//                               this.setChatRoomKey(v.id);
//                               this.onSetCurrentChatRoom(v);
//                             }}
//                           >
//                             <div
//                               style={{
//                                 display: "flex",
//                                 justifyContent: "space-between",
//                               }}
//                             >
//                               <span style={{}}>
//                                 {
//                                   v.users.filter((s, j) => {
//                                     if (me && s.nickname !== me.nickname) {
//                                       return s;
//                                     }
//                                   })[0].nickname
//                                 }
//                               </span>
//                               <span>
//                                 <Badge
//                                   //count={1}
//                                   count={this.getNotificationCount(v)}
//                                   style={{
//                                     borderRadius: "3px",
//                                     fontSize: "9px",
//                                     padding: "0 2px",
//                                     height: "13px",
//                                     minWidth: "13px",
//                                     lineHeight: "13px",
//                                   }}
//                                 />
//                               </span>
//                             </div>
//                           </Menu.Item>
//                         );
//                       }
//                       flag = false;
//                     })}
//                   </>
//                 </SubMenu>
//                 {chatRooms.map((v, i) => {
//                   let flag = false;
//                   v.users.forEach((s, j) => {
//                     if (me && s.clientId === me._id) flag = true;
//                   });
//                   if (flag) {
//                     return (
//                       <Menu.Item
//                         key={
//                           v.users.filter((s, j) => {
//                             if (me && s.nickname !== me.nickname) {
//                               return s;
//                             }
//                           })[0].nickname
//                         }
//                         onClick={() => {
//                           this.setChatRoomKey(v.id);
//                           this.onSetCurrentChatRoom(v);
//                         }}
//                       >
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                           }}
//                         >
//                           <span style={{}}>
//                             {
//                               v.users.filter((s, j) => {
//                                 if (me && s.nickname !== me.nickname) {
//                                   return s;
//                                 }
//                               })[0].nickname
//                             }
//                           </span>
//                           <span>
//                             <Badge
//                               //count={1}
//                               count={this.getNotificationCount(v)}
//                               style={{
//                                 borderRadius: "3px",
//                                 fontSize: "9px",
//                                 padding: "0 2px",
//                                 height: "13px",
//                                 minWidth: "13px",
//                                 lineHeight: "13px",
//                               }}
//                             />
//                           </span>
//                         </div>
//                       </Menu.Item>
//                     );
//                   }
//                   flag = false;
//                 })}
//               </Menu>
//             </div>
//             <div className="menu-content">
//               {this.state.currentMenu === "profile" && <EditProfile />}
//               {this.state.currentMenu === "activity" && <MyActivityTemplate />}
//               {this.state.currentMenu !== "profile" &&
//                 this.state.currentMenu !== "activity" && (
//                   <ChatContainer chatRoomKey={this.state.chatRoomKey} />
//                 )}

//               {/* <div style={{ border: "0.2px solid white", margin: "10px" }}></div>
//         <MyActivityTemplate></MyActivityTemplate> */}
//             </div>
//           </MenuWrapper>
//         </MypageLayout>
//       </>
//     );
//   }
// }

// export const getServerSideProps = wrapper.getServerSideProps(
//   async (context) => {
//     //console.log(context);

//     const cookie = context.req ? context.req.headers.cookie : "";
//     client.defaults.headers.Cookie = "";
//     if (context.req && cookie) {
//       //console.log("fuckcookie", cookie);
//       client.defaults.withCredentials = true;
//       client.defaults.headers.Cookie = cookie;
//     }
//     context.store.dispatch(setUserRequestAction());
//     //context.store.dispatch(mainLoadPostsReqeustAction());
//     //context.store.dispatch(END);
//     context.store.dispatch(END);
//     await context.store.sagaTask.toPromise();
//   },
// );

// const mapStateToProps = (state) => {
//   return {
//     me: state.user.me,
//     chatRoom: state.chat.currentChatRoom,
//   };
// };

// export default connect(mapStateToProps)(mypage);
