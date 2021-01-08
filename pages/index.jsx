import React, { useState } from "react";
import { Layout, Row, Col, Divider } from "antd";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import MyProfile from "../components/home/MyProfile";
import ContentTemplate from "../components/home/ContentTemplate";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/common/contents/List";

const Content = Layout.Content;

const ContentWrapper = styled(Content)`
    /* background: #fff; */
    width: 1300px;
    margin: 0 auto;
    margin-top: 65px;
    border: 1px solid blueviolet;
    @media (max-width: 1368px) {
        & {
            width: 100%;
        }
    }
`;

const ListWrapper = styled.div`
    padding: 20px;
`;

const index = () => {
    const { me } = useSelector((state) => state.user);
    const { studyPosts, projectPosts, communityPosts } = useSelector(
        (state) => state.post,
    );

    return (
        <Layout>
            <Header />
            <ContentWrapper>
                <Row>
                    {me ? (
                        <Col
                            xs={24}
                            sm={8}
                            md={8}
                            style={{ border: "1px solid black" }}
                        >
                            <Row>
                                <Col
                                    xs={24}
                                    sm={24}
                                    md={24}
                                    style={{ border: "1px solid black" }}
                                >
                                    <MyProfile me={me} />
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                    xs={24}
                                    sm={24}
                                    md={24}
                                    style={{ border: "1px solid black" }}
                                >
                                    <ContentTemplate />
                                </Col>
                            </Row>
                        </Col>
                    ) : (
                        <Col
                            xs={24}
                            sm={8}
                            md={8}
                            style={{ border: "1px solid black" }}
                        >
                            <ContentTemplate />
                        </Col>
                    )}

                    <Col
                        xs={24}
                        sm={16}
                        md={16}
                        style={{ border: "1px solid black" }}
                    >
                        <Row>
                            <Col
                                xs={24}
                                sm={24}
                                md={24}
                                style={{ border: "1px solid black" }}
                            >
                                <Divider orientation="left">스터디</Divider>
                                <ListWrapper>
                                    <List data={studyPosts} type="study"></List>
                                </ListWrapper>
                            </Col>
                        </Row>
                        <Row>
                            <Col
                                xs={24}
                                sm={24}
                                md={24}
                                style={{ border: "1px solid black" }}
                            >
                                <Divider orientation="left">프로젝트</Divider>
                                <ListWrapper>
                                    <List
                                        data={projectPosts}
                                        type="project"
                                    ></List>
                                </ListWrapper>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ContentWrapper>
            <Footer />
        </Layout>
    );
};

export default index;
