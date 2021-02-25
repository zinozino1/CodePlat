import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import { Button } from "antd";
import Link from "next/link";
import { SERVER_URL } from "../../../lib/constant/constant";

const SocialLoginWrapper = styled.div`
  display: flex;
  margin-bottom: 3px;
  font-weight: 300;
  .login-google {
    background: #dd4b39;
    flex: 1;
  }
  .login-naver {
    background: #00c300;
    margin-left: 3px;
    flex: 1;
  }
  .login-github {
    background: #333;
  }
  .login-kakao {
    background: #fee500;
    margin-left: 3px;
    color: black;
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
  // const onClickSocialLogin = useCallback(() => {
  //   console.log("fuck");
  // }, []);
  return (
    <>
      <SocialLoginWrapper>
        <div className="login-google">
          <Link href={`${SERVER_URL}/api/google`}>
            <a>
              <SocialLoginButton

              // onClick={onClickSocialLogin}
              >
                Google
              </SocialLoginButton>
            </a>
          </Link>
        </div>
        <div className="login-naver">
          <Link href={`${SERVER_URL}/api/naver`}>
            <a>
              <SocialLoginButton>Naver</SocialLoginButton>
            </a>
          </Link>
        </div>
      </SocialLoginWrapper>
      <SocialLoginWrapper>
        <Link href={`${SERVER_URL}/api/github`}>
          <a>
            <SocialLoginButton className="login-github">
              Github
            </SocialLoginButton>
          </a>
        </Link>

        <Link href={`${SERVER_URL}/api/kakao`}>
          <a>
            <SocialLoginButton className="login-kakao">Kakao</SocialLoginButton>
          </a>
        </Link>
      </SocialLoginWrapper>
    </>
  );
};

export default SocialTemplate;
