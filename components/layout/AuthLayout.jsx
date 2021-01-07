import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import Footer from "../common/Footer";
import styled from "styled-components";

const Content = Layout.Content;

const ContentWrapper = styled(Content)`
    /* background: #fff; */
    width: 1300px;
    margin: 0 auto;
    margin-top: 65px;
    @media (max-width: 1368px) {
        & {
            width: 100%;
        }
    }
`;

const AuthLayout = ({ children }) => {
    return (
        <Layout>
            <ContentWrapper>{children}</ContentWrapper>
            <Footer />
        </Layout>
    );
};

AuthLayout.propTypes = {
    // children: PropTypes.node.isRequired,
};

export default AuthLayout;
