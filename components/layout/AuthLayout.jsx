import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import Footer from "../common/Footer";
import styled, { css } from "styled-components";

const Content = Layout.Content;

const ContentWrapper = styled(Content)`
    /* background: #fff; */
    /* width: 400px; */
    margin: 0 auto;
    margin-top: 65px;
    ${(props) =>
        props.type === "register"
            ? css`
                  width: 600px;
              `
            : css`
                  width: 400px;
              `}/* @media (max-width: 1368px) {
        & {
            width: 100%;
        }
    } */
`;

const AuthLayout = ({ children, type }) => {
    return (
        <Layout>
            <ContentWrapper type={type}>{children}</ContentWrapper>
            <Footer />
        </Layout>
    );
};

AuthLayout.propTypes = {
    // children: PropTypes.node.isRequired,
};

export default AuthLayout;
