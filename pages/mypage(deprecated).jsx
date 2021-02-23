import React, {
  useCallback,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
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

const mypage = () => {
  const { me } = useSelector((state) => state.user);
  const { currentChatRoom } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const [currentMenu, setCurrentMenu] = useState("profile");
  const onChangeCurrentMenu = useCallback((e) => {
    setCurrentMenu(e.key);
  }, []);

  const [chatRoomsRef, setChatRoomsRef] = useState(
    firebase.database().ref("chatRooms"),
  );
  // const chatRoomsRef = firebase.database().ref("chatRooms");

  const [chatRooms, setChatRooms] = useState([]);
  //const [myChatRooms, setMyChatRooms] = useState([]);

  const [chatRoomKey, setChatRoomKey] = useState("");

  const onSetCurrentChatRoom = useCallback((chatRoom) => {
    //console.log(data);
    dispatch(setCurrentChatRoomAction(chatRoom));
    //dispatch(setCurrentOpponentRequestAction(chatRoom));
  }, []);

  // 알림

  const notifications = [];
  const [messagesRef, setMessagesRef] = useState(
    firebase.database().ref("messages"),
  );

  const handleNotification = (
    chatRoomId,
    //currentChatRoomId,
    //notifications,
    DataSnapShot,
  ) => {
    // 방 하나 하나에 맞는 알림 정보 넣어주기
    let lastTotal = 0;
    // 이미 notification state 안에 알림 정보가 들어있는 채팅방과 그렇지 않은 채팅방을 나눠주기
    let index = notifications.findIndex(
      (notification) => notification.id === chatRoomId,
    );

    // 해당 채팅방의 알림정보가 없을 떄 == 새로운 채팅방일 또는 첫렌더링일 경우
    if (index === -1) {
      console.log("첫시도 혹은새로운 채팅방");
      notifications.push({
        id: chatRoomId, // 채팅방 아이디
        total: DataSnapShot.numChildren(), // 해당 채팅방 전체 메시지 개수
        lastKnownTotal: DataSnapShot.numChildren(), // 이전에 확인한 전체 메시지 개수
        count: 0, // 알림으로 사용될 숫자
      });
      // notifications.concat({
      //   id: chatRoomId, // 채팅방 아이디
      //   total: DataSnapShot.numChildren(), // 해당 채팅방 전체 메시지 개수
      //   lastKnownTotal: DataSnapShot.numChildren(), // 이전에 확인한 전체 메시지 개수
      //   count: 0, // 알림으로 사용될 숫자
      // }),
    }
    // 이미 있을 때
    else {
      console.log("이미 있음");
      if (chatRoomId !== currentChatRoom.id) {
        lastTotal = notifications[index].lastKnownTotal;

        if (DataSnapShot.numChildren() - lastTotal > 0) {
          // setNotifications(
          //   notifications.map((v, i) => {
          //     if (i === index) {
          //       return { ...v, count: DataSnapShot.numChildren() - lastTotal };
          //     } else {
          //       return { ...v };
          //     }
          //   }),
          // );
          notifications[index].count = DataSnapShot.numChildren() - lastTotal;
        }
      }
      // setNotifications(
      //   notifications.map((v, i) => {
      //     if (i === index) {
      //       return { ...v, total: DataSnapShot.numChildren() };
      //     } else {
      //       return { ...v };
      //     }
      //   }),
      // );
      notifications[index].total = DataSnapShot.numChildren();
    }
    //setNotifications([...notifications]);
    console.log(notifications);
  };

  const addNotificationListener = (chatRoomId) => {
    messagesRef.child(chatRoomId).on("value", (DataSnapShot) => {
      // console.log("채팅방 id", chatRoomId);
      console.log("채팅방 메시지 목록", DataSnapShot.val());
      console.log("현재 채팅방", currentChatRoom);
      // if (currentChatRoom) {
      //   // redux 현재 chat room
      //   console.log(DataSnapShot.val());
      handleNotification(
        chatRoomId, // chatroomref id
        //currentChatRoom.id, // 현재 채팅방 id
        //notifications, // 알림 정보 배열
        DataSnapShot, // 채팅방마다 들어있는 메시지들
      );
      //}
    });
  };

  const getNotificationCount = (chatRoom) => {
    let count = 0;

    notifications.forEach((v, i) => {
      if (v.id === chatRoom.id) {
        count = v.count;
      }
    });

    if (count > 0) return count;
  };

  // const setFirstChatRoom = (initialChatRooms) => {
  //   // const firstChatRoom = initialChatRooms;
  //   // console.log(firstChatRoom);

  //   if (initialChatRooms.length > 0) {
  //     dispatch(setCurrentChatRoomAction(initialChatRooms[0]));
  //   }
  // };

  const addChatRoomListener = () => {
    let chatRoomsArray = [];

    chatRoomsRef.on("child_added", (DataSnapShot) => {
      chatRoomsArray.push(DataSnapShot.val());
      console.log(DataSnapShot);

      setChatRooms([...chatRoomsArray]);
      // setFirstChatRoom([...chatRoomsArray]);
      //addNotificationListener(DataSnapShot.key);
    });
  };

  useEffect(() => {
    //chatRoomsRef.off()?
    addChatRoomListener();
    return () => {
      initializeChatRoomAction();
      chatRoomsRef.off();

      // messagesRef.off();
    };
  }, []);

  // useEffect(() => {
  //   console.log(notifications);
  // }, [notifications]);

  if (!me) return null;

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
              onClick={onChangeCurrentMenu}
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
                //onTitleClick={loadChatRooms}
              >
                <>
                  {chatRooms.map((v, i) => {
                    let flag = false;
                    v.users.forEach((s, j) => {
                      if (s.clientId === me._id) flag = true;
                    });
                    if (flag) {
                      return (
                        <Menu.Item
                          key={
                            v.users.filter((s, j) => {
                              if (s.nickname !== me.nickname) {
                                return s;
                              }
                            })[0].nickname
                          }
                          onClick={() => {
                            setChatRoomKey(v.id);
                            onSetCurrentChatRoom(v);
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
                                  if (s.nickname !== me.nickname) {
                                    return s;
                                  }
                                })[0].nickname
                              }
                            </span>
                            <span>
                              <Badge
                                //count={1}
                                count={getNotificationCount(v)}
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
            </Menu>
          </div>
          <div className="menu-content">
            {currentMenu === "profile" && <EditProfile />}
            {currentMenu === "activity" && <MyActivityTemplate />}
            {currentMenu !== "profile" && currentMenu !== "activity" && (
              <ChatContainer chatRoomKey={chatRoomKey} messages />
            )}

            {/* <div style={{ border: "0.2px solid white", margin: "10px" }}></div>
            <MyActivityTemplate></MyActivityTemplate> */}
          </div>
        </MenuWrapper>
      </MypageLayout>
    </>
  );
};

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

export default mypage;
