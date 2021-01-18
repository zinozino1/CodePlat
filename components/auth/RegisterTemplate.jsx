import React from "react";
import RegisterInputForm from "./RegisterInputForm";
import styled from "styled-components";

const RegisterTemplateWrapper = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 40px;
  margin-top: 40px;
  margin-bottom: 180px;
`;

const RegisterTemplate = () => {
  return (
    <RegisterTemplateWrapper>
      <RegisterInputForm />
    </RegisterTemplateWrapper>
  );
};

export default RegisterTemplate;
