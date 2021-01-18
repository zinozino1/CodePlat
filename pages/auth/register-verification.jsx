import React from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import EmailNotification from "../../components/auth/EmailNotification";
import RegisterTemplate from "../../components/auth/RegisterTemplate";

const registerVerification = () => {
  return (
    <AuthLayout type="register">
      <RegisterTemplate />
    </AuthLayout>
  );
};

export default registerVerification;
