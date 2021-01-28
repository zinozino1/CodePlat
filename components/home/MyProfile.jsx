import React, { useCallback } from "react";
import { Card, Avatar, Button, Image } from "antd";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../../reducers/user";
import { SERVER_URL } from "../../lib/constant/constant";

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

  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <CardWrapper>
      <Card>
        <Card.Meta
          title={me.nickname}
          avatar={
            <Avatar
              src={
                me.avatarUrl && <img src={`${SERVER_URL}/${me.avatarUrl}`} />
              }
            ></Avatar>
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
          >
            로그아웃
          </Button>
        </ButtonsWrapper>
      </Card>
    </CardWrapper>
  );
};

export default MyProfile;
