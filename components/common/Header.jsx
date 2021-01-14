import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Layout, Menu, Button, Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { withRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { loginRequestAction, logoutRequestAction } from "../../reducers/user";

const AntHeader = Layout.Header;
const { SubMenu } = Menu;

const HeaderWrapper = styled(AntHeader)`
    position: fixed;
    z-index: 1;
    padding-left: 80px;
    padding-right: 50px;
    width: 100%;
    background: #16172b;
    @media (max-width: 768px) {
        & {
            padding-left: 0px;
            padding-right: 0px;
            position: absolute;
            left: 0px;
        }
    }
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
    @media (max-width: 768px) {
        a {
            order: 2;
            position: absolute;
            left: 0px;
            margin: 0 0px;
        }
    }
`;

const LogoWrapper = styled.div`
    //background: #222;
    float: left;
    cursor: pointer;
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    width: 100px;
    @media (max-width: 768px) {
        & {
        }
    }
`;

//메뉴 글자 키우기(0)
const MenuWrapper = styled(Menu)`
    background: #16172b;
    font-size: 18px;
    // background: #fafafa;

    margin: 0 auto;
    height: 64px;
    @media (max-width: 768px) {
        & {
            order: 3;
            position: absolute;
            right: 0px;
            margin: 0 0px;
        }
    }
    .ant-menu-submenu-title > span {
        color: white;
    }
    .ant-menu-item > a {
        color: white;
        font-weight: bold;
    }
    .ant-menu-item-selected a {
        color: #1890ff;
    }
`;

//메뉴 아이템 공백 넓히기(0)
const PartialStyle = {
    margin: "0 40px",
};

const MenuItemWrapper = styled(Menu.Item)`
    margin-left: 20%;
    @media (max-width: 768px) {
        & {
            margin-right: 0px;
        }
    }
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

const Header = ({ router }) => {
    const dispatch = useDispatch();
    const { me, logoutLoading } = useSelector((state) => state.user);

    const [currentMenu, setCurrentMenu] = useState(null);

    const onLogout = useCallback(() => {
        dispatch(logoutRequestAction());
    }, []);

    useEffect(() => {
        setCurrentMenu(router.route);
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
                    <MenuItemWrapper
                        style={PartialStyle}
                        key="/articles/study"
                        className="menu-study"
                    >
                        <Link href="/articles/study">
                            <a>스터디</a>
                        </Link>
                    </MenuItemWrapper>

                    <MenuItemWrapper
                        style={PartialStyle}
                        key="/articles/project"
                        className="menu-project"
                    >
                        <Link href="/articles/project">
                            <a>프로젝트</a>
                        </Link>
                    </MenuItemWrapper>

                    <MenuItemWrapper
                        style={PartialStyle}
                        key="/articles/forum"
                        className="menu-forum"
                    >
                        <Link href="/articles/forum">
                            <a>포럼</a>
                        </Link>
                    </MenuItemWrapper>
                </MenuWrapper>
                {me && (
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
                                <Button className="btn-mypage">
                                    마이페이지
                                </Button>
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
        </HeaderWrapper>
    );
};

export default withRouter(Header);
