import React, { useState } from "react";
import Link from "next/link";
import { Layout, Menu, Button, Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";
import styled from "styled-components";

const AntHeader = Layout.Header;
const { SubMenu } = Menu;

const HeaderWrapper = styled(AntHeader)`
    position: fixed;
    z-index: 1;
    width: 100%;
    background: #fff;
`;

const InnerHeader = styled.div`
    width: 1300px;
    margin: 0 auto;
    display: flex;
    @media (max-width: 1368px) {
        & {
            width: 100%;
        }
    }
`;

const LogoWrapper = styled.div`
    background: #222;
    float: left;
    cursor: pointer;
    color: #fff;
    text-align: center;
    width: 80px;
`;

const MenuWrapper = styled(Menu)`
    margin: 0 auto;
    @media (max-width: 768px) {
        & {
            order: 2;
        }
    }
`;

const MenuItemWrapper = styled(Menu.Item)`
    margin: 0 10px;
`;

const ButtonGroup = styled.div`
    @media (max-width: 768px) {
        .btn-login {
        }
        .btn-register {
            display: none;
        }
    }
    .btn-login {
    }
    .btn-register {
        margin-left: 10px;
    }
    .btn-logout {
        margin-left: 10px;
    }
`;

const BadgeWrapper = styled.div`
    margin-right: 60px;
`;

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [currentMenu, setCurrentMenu] = useState(null);

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    const onClickMenu = (e) => {
        console.log(e.key);
        setCurrentMenu(e.key);
    };

    return (
        <HeaderWrapper>
            <InnerHeader>
                <Link href="/">
                    <a>
                        <LogoWrapper>Logo</LogoWrapper>
                    </a>
                </Link>

                <MenuWrapper
                    mode="horizontal"
                    onClick={onClickMenu}
                    selectedKeys={[currentMenu]}
                >
                    <MenuItemWrapper key="1" className="menu-study">
                        <Link href="/articles/study">
                            <a>스터디</a>
                        </Link>
                    </MenuItemWrapper>

                    <MenuItemWrapper key="2" className="menu-project">
                        <Link href="/articles/project">
                            <a>프로젝트</a>
                        </Link>
                    </MenuItemWrapper>

                    <MenuItemWrapper key="3" className="menu-community">
                        <Link href="/articles/community">
                            <a>커뮤니티</a>
                        </Link>
                    </MenuItemWrapper>
                </MenuWrapper>
                {isLoggedIn && (
                    <BadgeWrapper>
                        <Badge count={99} overflowCount={10} offset={[20, 0]}>
                            <Link href="#">
                                <a className="head-example">
                                    <BellOutlined />
                                </a>
                            </Link>
                        </Badge>
                    </BadgeWrapper>
                )}

                {!isLoggedIn ? (
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
                                <Button className="btn-mypage">
                                    마이페이지
                                </Button>
                            </a>
                        </Link>
                        <Button
                            className="btn-logout"
                            type="primary"
                            onClick={onClickLogout}
                        >
                            로그아웃
                        </Button>
                    </ButtonGroup>
                )}
            </InnerHeader>
        </HeaderWrapper>
    );
};

export default Header;
