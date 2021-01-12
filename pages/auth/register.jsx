import React from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import RegisterTemplate from "../../components/auth/RegisterTemplate";

const register = () => {
    return (
        <AuthLayout type="register">
            <RegisterTemplate />
        </AuthLayout>
    );
};

export default register;
