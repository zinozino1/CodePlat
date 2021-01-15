import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import styled from "styled-components";

const Content = Layout.Content;

const ContentWrapper = styled(Content)`
    width: 900px;
    margin: 0 auto;
    margin-top: 65px;
    @media (max-width: 1368px) {
        & {
            width: 100%;
        }
    }
    @media (max-width: 950px) {
        margin-top: 120px;
    }
`;

const PostViewerLayout = ({ children, contentType }) => {
    return (
        <Layout>
            <Header />
            <ContentWrapper>{children}</ContentWrapper>
        </Layout>
    );
};

export default PostViewerLayout;
