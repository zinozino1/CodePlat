import React, { useState } from "react";
import { Layout, Row, Col } from "antd";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import AppLayout from "../components/layout/AppLayout";
import MyProfile from "../components/home/MyProfile";
import ContentTemplate from "../components/home/ContentTemplate";
import { useDispatch, useSelector } from "react-redux";

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

const index = () => {
    const { me } = useSelector((state) => state.user);

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
                                study
                            </Col>
                        </Row>
                        <Row>
                            <Col
                                xs={24}
                                sm={24}
                                md={24}
                                style={{ border: "1px solid black" }}
                            >
                                project
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
