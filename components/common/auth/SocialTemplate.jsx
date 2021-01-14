import React from "react";
import styled, { css } from "styled-components";
import { Button } from "antd";

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

const SocialTemplate = () => {
    return (
        <>
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
        </>
    );
};

export default SocialTemplate;
