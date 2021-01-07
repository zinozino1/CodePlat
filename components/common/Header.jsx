import React from "react";
import Link from "next/link";
import { Layout, Menu, Button, Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";
import styled from "styled-components";

const AntHeader = Layout.Header;
const { SubMenu } = Menu;

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
`;

const BadgeWrapper = styled.div`
    margin-right: 60px;
`;

const Header = () => {
    return (
        <AntHeader
            style={{
                position: "fixed",
                zIndex: 1,
                width: "100%",
                display: "flex",
                background: "#fff",
            }}
        >
            <LogoWrapper>Logo</LogoWrapper>
            <MenuWrapper mode="horizontal">
                <MenuItemWrapper key="1" className="menu-study">
                    스터디
                </MenuItemWrapper>
                <MenuItemWrapper key="2" className="menu-project">
                    프로젝트
                </MenuItemWrapper>
                <MenuItemWrapper key="3" className="menu-community">
                    커뮤니티
                </MenuItemWrapper>
            </MenuWrapper>
            <BadgeWrapper>
                <Badge count={99} overflowCount={10} offset={[20, 0]}>
                    <Link href="#">
                        <a className="head-example">
                            <BellOutlined />
                        </a>
                    </Link>
                </Badge>
            </BadgeWrapper>
            <ButtonGroup>
                <Button className="btn-login">로그인</Button>
                <Button className="btn-register" type="primary">
                    회원가입
                </Button>
            </ButtonGroup>
        </AntHeader>
    );
};

export default Header;
