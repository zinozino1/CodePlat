import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Layout, Menu, Button, Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { withRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { loginRequestAction, logoutRequestAction } from "../../reducers/user";
import firebase from "../../firebase";

const AntHeader = Layout.Header;

const HeaderWrapper = styled(AntHeader)`
  position: fixed;
  z-index: 10;
  width: 100%;
  background: #16172b;
`;

const InnerHeader = styled.div`
  width: 1300px;
  margin: 0 auto;
  display: flex;
  .ant-menu-horizontal {
    border: none;
  }
  @media (max-width: 1368px) {
    width: 100%;
  }
  @media (max-width: 950px) {
    justify-content: space-between;
  }
`;

const LogoWrapper = styled.div`
  float: left;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  width: 100px;
`;

const MenuWrapper = styled(Menu)`
  background: #16172b;
  font-size: 18px;
  margin: 0 auto;
  height: 64px;

  .ant-menu-item-active {
    a:hover {
      color: #188fffad;
    }
    border-bottom: 2px solid transparent !important;
  }

  .ant-menu-submenu-title > span {
    color: white;
  }
  .ant-menu-item {
    a {
      color: white;
      font-weight: bold;
      margin: 0 40px;
    }
  }
  .ant-menu-item-selected {
    border-bottom: 2px solid transparent !important;
    a {
      color: #1890ff;
    }
  }
  @media (max-width: 950px) {
    display: none;
  }
`;

const MenuItemWrapper = styled(Menu.Item)``;

const ButtonGroup = styled.div`
  .btn-register {
    margin-left: 10px;
  }
  .btn-logout {
    margin-left: 10px;
  }
  @media (max-width: 768px) {
    .btn-logout {
      display: none;
    }
  }
`;

const BadgeWrapper = styled.div`
  margin-right: 60px;
`;

const MobileMenuWrapper = styled(Menu)`
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  width: 100%;
  margin: 0;
  background: #16172bcc;
  z-index: 10;
  display: flex;
  justify-content: center;
  .ant-menu-item-active {
    a:hover {
      color: #188fffad;
    }
  }
  .ant-menu-item {
    a {
      color: white;
      font-weight: bold;
    }
  }
  .ant-menu-item-selected {
    a {
      color: #1890ff;
    }
  }
  @media (min-width: 950px) {
    display: none;
  }
`;

const Header = ({ router }) => {
  const dispatch = useDispatch();
  const { me, logoutLoading } = useSelector((state) => state.user);

  const [currentMenu, setCurrentMenu] = useState(null);

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

  useEffect(() => {
    const route = router.route.split("/");

    setCurrentMenu(`/${route[1]}/${route[2]}`);
  }, [router]);

  return (
    <HeaderWrapper>
      <InnerHeader>
        <Link href="/">
          <a>
            <LogoWrapper>Logo</LogoWrapper>
          </a>
        </Link>

        <MenuWrapper mode="horizontal" selectedKeys={[currentMenu]}>
          <MenuItemWrapper key="/articles/study" className="menu-study">
            <Link href="/articles/study">
              <a>스터디</a>
            </Link>
          </MenuItemWrapper>

          <MenuItemWrapper key="/articles/project" className="menu-project">
            <Link href="/articles/project">
              <a>프로젝트</a>
            </Link>
          </MenuItemWrapper>

          <MenuItemWrapper key="/articles/forum" className="menu-forum">
            <Link href="/articles/forum">
              <a>포럼</a>
            </Link>
          </MenuItemWrapper>
        </MenuWrapper>
        {me && (
          <BadgeWrapper>
            <Badge count={99} overflowCount={10} offset={[20, 0]}>
              <Link href="/mypage">
                <a className="head-example">
                  <BellOutlined />
                </a>
              </Link>
            </Badge>
          </BadgeWrapper>
        )}

        {!me ? (
          <ButtonGroup>
            <Link href="/auth/login">
              <a>
                <Button className="btn-login">로그인</Button>
              </a>
            </Link>
            <Link href="/auth/register">
              <a>
                <Button className="btn-register" type="primary">
                  회원가입
                </Button>
              </a>
            </Link>
          </ButtonGroup>
        ) : (
          <ButtonGroup>
            <Link href="/mypage">
              <a>
                <Button className="btn-mypage">마이페이지</Button>
              </a>
            </Link>
            <Button
              className="btn-logout"
              type="primary"
              onClick={onLogout}
              loading={logoutLoading}
            >
              로그아웃
            </Button>
          </ButtonGroup>
        )}
      </InnerHeader>
      <MobileMenuWrapper selectedKeys={[currentMenu]}>
        <MenuItemWrapper key="/articles/study" className="menu-study">
          <Link href="/articles/study">
            <a>스터디</a>
          </Link>
        </MenuItemWrapper>

        <MenuItemWrapper key="/articles/project" className="menu-project">
          <Link href="/articles/project">
            <a>프로젝트</a>
          </Link>
        </MenuItemWrapper>

        <MenuItemWrapper key="/articles/forum" className="menu-forum">
          <Link href="/articles/forum">
            <a>포럼</a>
          </Link>
        </MenuItemWrapper>
      </MobileMenuWrapper>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
