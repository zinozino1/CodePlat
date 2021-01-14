import React from "react";
import RegisterInputForm from "./RegisterInputForm";
import styled from "styled-components";

const RegisterTemplateWrapper = styled.div`
    background: #fff;
    border-radius: 5px;
    padding: 40px;
    margin: 100px 0;
`;

const RegisterTemplate = () => {
    return (
        <RegisterTemplateWrapper>
            <RegisterInputForm />
        </RegisterTemplateWrapper>
    );
};

export default RegisterTemplate;
