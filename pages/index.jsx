import React from "react";
import { Layout, Row, Col } from "antd";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import AppLayout from "../components/layout/AppLayout";

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
    return (
        <Layout>
            <Header />
            <ContentWrapper>
                <Row>
                    <Col
                        xs={24}
                        sm={6}
                        md={6}
                        style={{ border: "1px solid black" }}
                    >
                        left banner
                    </Col>
                    <Col
                        xs={24}
                        sm={18}
                        md={18}
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
