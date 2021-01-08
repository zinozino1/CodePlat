import React from "react";
import styled from "styled-components";
import LoginInputForm from "./LoginInputForm";

const LoginTemplateWrapper = styled.div`
    margin: 200px 0;
`;

const LoginTemplate = () => {
    return (
        <LoginTemplateWrapper>
            <LoginInputForm />
        </LoginTemplateWrapper>
    );
};

export default LoginTemplate;
