import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import Footer from "../common/Footer";
import styled, { css } from "styled-components";

const Content = Layout.Content;

const ContentWrapper = styled(Content)`
  margin: 0 auto;
  margin-top: 65px;
  ${(props) =>
    props.type === "register"
      ? css`
          width: 600px;
          @media (max-width: 768px) {
            width: 80%;
          }
        `
      : css`
          width: 400px;
        `}
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
