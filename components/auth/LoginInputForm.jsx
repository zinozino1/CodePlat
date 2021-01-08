import React, { useCallback, useEffect } from "react";
import { Form, Input, Button, Checkbox, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../../reducers/user";
import Router from "next/router";

const SocialLoginWrapper = styled.div`
    display: flex;
    margin-bottom: 3px;
    font-weight: 300;
    .login-google {
        background: #dd4b39;
    }
    .login-naver {
        background: #00c300;
        margin-left: 3px;
    }
    .login-github {
        background: #333;
    }
    .login-facebook {
        background: #3b5999;
        margin-left: 3px;
    }
`;

const SocialLoginButton = styled(Button)`
    flex: 1;
    color: #fff;
    font-size: 12px;
    &:hover {
        color: #fff;
    }
`;

const LoginInputForm = () => {
    const dispatch = useDispatch();
    const { loginLoading, me, loginError } = useSelector((state) => state.user);
    const onLogin = useCallback(() => {
        dispatch(loginRequestAction());
    }, []);

    useEffect(() => {
        if (loginError) {
        }
        if (me) {
            Router.push("/");
        }
    }, [me]);

    return (
        <>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                //onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "이메일을 입력해주세요.",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Email"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "비밀번호를 입력해주세요.",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item style={{ textAlign: "center" }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        style={{ width: "100%" }}
                        onClick={onLogin}
                        loading={loginLoading}
                    >
                        로그인
                    </Button>
                </Form.Item>
                <Divider style={{ fontSize: "12px", color: "#888" }}>
                    소셜 로그인
                </Divider>
                <SocialLoginWrapper>
                    <SocialLoginButton
                        className="login-google"
                        style={{ flex: "1" }}
                    >
                        Google
                    </SocialLoginButton>
                    <SocialLoginButton
                        className="login-naver"
                        style={{ flex: "1", marginLeft: "3px" }}
                    >
                        Naver
                    </SocialLoginButton>
                </SocialLoginWrapper>
                <SocialLoginWrapper>
                    <SocialLoginButton
                        className="login-github"
                        style={{ flex: "1" }}
                    >
                        Github
                    </SocialLoginButton>
                    <SocialLoginButton
                        className="login-facebook"
                        style={{ flex: "1", marginLeft: "3px" }}
                    >
                        Facebook
                    </SocialLoginButton>
                </SocialLoginWrapper>
                <Form.Item style={{ textAlign: "center" }}>
                    계정이 없으신가요?{" "}
                    <Link href="/auth/register">
                        <a style={{ textDecoration: "underline" }}>회원가입</a>
                    </Link>
                </Form.Item>
                <Form.Item style={{ textAlign: "center" }}>
                    <Link href="/">
                        <a style={{ color: "#888" }}>홈으로가기</a>
                    </Link>
                </Form.Item>
            </Form>
        </>
    );
};

export default LoginInputForm;
