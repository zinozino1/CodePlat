import React from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import LoginTemplate from "../../components/auth/LoginTemplate";

const login = () => {
    return (
        <AuthLayout type="login">
            <LoginTemplate />
        </AuthLayout>
    );
};

export default login;
