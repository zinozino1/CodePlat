import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import styled from "styled-components";

const AntFooter = Layout.Footer;

const FooterWrapper = styled(AntFooter)`
    background: #222;
    color: #fff;
`;

const Footer = () => {
    return (
        <FooterWrapper style={{ textAlign: "center" }}>
            ©2021 All right reserved.
        </FooterWrapper>
    );
};

export default Footer;
