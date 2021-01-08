import React from "react";
import styled from "styled-components";
import LoginInputForm from "./LoginInputForm";

const LoginTemplateWrapper = styled.div`
    background: #fff;
    border-radius: 5px;
    padding: 40px;
    margin: 140px 0;
`;

const LoginTemplate = () => {
    return (
        <LoginTemplateWrapper>
            <LoginInputForm />
        </LoginTemplateWrapper>
    );
};

export default LoginTemplate;
