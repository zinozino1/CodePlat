import React, { useCallback } from "react";
import { Card, Avatar, Button, Image, Popover } from "antd";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../../reducers/user";
import { SERVER_URL } from "../../lib/constant/constant";
import ProfileModal from "../modal/ProfileModal";
import { UserOutlined } from "@ant-design/icons";
import firebase from "../../firebase";

const CardWrapper = styled.div`
  padding: 20px;
`;

const ButtonsWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
  .logout {
    margin-left: 10px;
  }
`;

const MyProfile = ({ me }) => {
  const dispatch = useDispatch();

  const { logoutLoading } = useSelector((state) => state.user);

  const onLogout = useCallback(async () => {
    let user = firebase.auth().currentUser;
    if (user) {
      await firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("firebase logout 성공");
        });
      let firebaseMe = null;
      await firebase
        .database()
        .ref("users")
        .child(user.uid)
        .once("value", function (data) {
          firebaseMe = data.val();
        });
      await firebase
        .database()
        .ref("users")
        .child(user.uid)
        .update({ ...firebaseMe, isInMypage: false });
    }
    dispatch(logoutRequestAction());
  }, []);

  return (
    <CardWrapper>
      <Card>
        <Card.Meta
          title={me.nickname}
          avatar={
            <Popover
              content={
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <ProfileModal writer={me}></ProfileModal>
                </div>
              }
            >
              <Avatar
                style={{ cursor: "pointer" }}
                size={32}
                src={
                  me.avatarUrl !== "" &&
                  me.avatarUrl && (
                    <Image
                      width={32}
                      height={32}
                      src={`${SERVER_URL}/${me.avatarUrl}`}
                    />
                  )
                }
                icon={<UserOutlined />}
              ></Avatar>
            </Popover>
          }
        ></Card.Meta>
        <ButtonsWrapper>
          <Link href="/mypage">
            <a>
              <Button className="mypage">마이페이지</Button>
            </a>
          </Link>

          <Button
            type="primary"
            className="logout"
            onClick={onLogout}
            loading={logoutLoading}
            // style={{ back: "#16172a" }}
          >
            로그아웃
          </Button>
        </ButtonsWrapper>
      </Card>
    </CardWrapper>
  );
};

export default MyProfile;
