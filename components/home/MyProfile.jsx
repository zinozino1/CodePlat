import React from "react";
import { Card, Avatar, Button } from "antd";
import styled from "styled-components";
import Link from "next/link";

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

const MyProfile = ({ onLogout }) => {
    return (
        <CardWrapper>
            <Card
            // actions={[
            //     <div key="twit">
            //         트윗
            //         <br /> ㅁㄴㅇㄹ
            //     </div>,
            //     <div key="followings">
            //         팔로잉
            //         <br /> ㅁㄴㅇㄹ
            //     </div>,
            //     <div key="followers">
            //         팔로워
            //         <br /> ㅁㄴㅇㄹ
            //     </div>,
            // ]}
            >
                <Card.Meta
                    title={"nickname"}
                    avatar={<Avatar>{"s"}</Avatar>}
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
                    >
                        로그아웃
                    </Button>
                </ButtonsWrapper>
            </Card>
        </CardWrapper>
    );
};

export default MyProfile;
