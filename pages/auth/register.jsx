import React from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import RegisterTemplate from "../../components/auth/RegisterTemplate";
import Head from "next/head";

const register = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>회원가입</title>
      </Head>
      <AuthLayout type="register">
        <RegisterTemplate />
      </AuthLayout>
    </>
  );
};

export default register;
