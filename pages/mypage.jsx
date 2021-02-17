import React, {
  useCallback,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import { Divider, Row, Col, Button, Form, Menu } from "antd";
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
import { setUserRequestAction } from "../reducers/user";
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
    border: 1px solid red;
    width: 200px;
    height: 90vh;
  }
  .menu-content {
    flex: 4;
    border: 1px solid black;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .menu-bar {
      height: 100%;
      width: 100%;
    }
  }
`;

const mypage = () => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [currentMenu, setCurrentMenu] = useState("profile");
  const onChangeCurrentMenu = useCallback((e) => {
    setCurrentMenu(e.key);
  }, []);

  const [chatRoomsRef, setChatRoomsRef] = useState(
    firebase.database().ref("chatRooms"),
  );

  const [chatRooms, setChatRooms] = useState([]);
  //const [myChatRooms, setMyChatRooms] = useState([]);

  const [chatRoomKey, setChatRoomKey] = useState("");

  const onSetCurrentChatRoom = useCallback((data) => {
    //console.log(data);
    dispatch(setCurrentChatRoomAction(data));
  }, []);

  const addChatRoomListener = () => {
    let chatRoomsArray = [];

    chatRoomsRef.on("child_added", (DataSnapShot) => {
      //console.log("snapshot:", DataSnapShot.val());

      chatRoomsArray.push(DataSnapShot.val());
      // charRooms
      //console.log(chatRoomsArray);
      // 새로운 배열을 넣을 때에는 스프레드연산자 꼭 사용
      setChatRooms([...chatRoomsArray]);
    });
  };

  // const loadChatRooms = useCallback(() => {
  //   setMyChatRooms(chatRooms);
  // }, [chatRooms]);

  // useLayoutEffect(() => {
  //   addChatRoomListener();
  //   return () => {
  //     initializeChatRoomAction();
  //   };
  // }, []);

  useEffect(() => {
    addChatRoomListener();
    return () => {
      initializeChatRoomAction();
    };
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setMyChatRooms([...chatRooms]);
  //   }, 700);
  // }, [chatRooms]);

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
              style={{ height: "100%", border: "1px solid black" }}
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
                          {
                            v.users.filter((s, j) => {
                              if (s.nickname !== me.nickname) {
                                return s;
                              }
                            })[0].nickname
                          }
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
                  if (s.clientId === me._id) flag = true;
                });
                if (flag) {
                  return (
                    <Menu.Item
                      style={{ marginLeft: "20px" }}
                      key={shortid.generate()}
                      onClick={() => {
                        console.log(v);
                      }}
                    >
                      {
                        v.users.filter((s, j) => {
                          if (s.nickname !== me.nickname) {
                            return s;
                          }
                        })[0].nickname
                      }
                    </Menu.Item>
                  );
                }
                flag = false;
              })} */}
            </Menu>
          </div>
          <div className="menu-content">
            {currentMenu === "profile" && <EditProfile />}
            {currentMenu === "activity" && <MyActivityTemplate />}
            {currentMenu !== "profile" && currentMenu !== "activity" && (
              <ChatContainer chatRoomKey={chatRoomKey} />
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
