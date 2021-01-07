import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import Footer from "../common/Footer";
import styled from "styled-components";

const Content = Layout.Content;

const ContentWrapper = styled(Content)`
    background: #fff;
    padding: 0 50px;
    margin-top: 65px;
`;

const AuthLayout = ({ children }) => {
    return (
        <Layout>
            <Header />
            <ContentWrapper>{children}</ContentWrapper>
            <Footer />
        </Layout>
    );
};

AuthLayout.propTypes = {
    // children: PropTypes.node.isRequired,
};

export default AuthLayout;
