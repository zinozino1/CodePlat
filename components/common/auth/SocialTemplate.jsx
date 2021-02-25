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
    flex: 1;
  }
  .login-naver {
    margin-left: 3px;
    flex: 1;
  }
  .login-github {
    flex: 1;
  }
  .login-kakao {
    margin-left: 3px;

    flex: 1;
  }
`;

const SocialLoginButton = styled(Button)`
  /* flex: 1; */
  width: 100%;
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
                style={{ background: "#dd4b39" }}
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
              <SocialLoginButton style={{ background: "#00c300" }}>
                Naver
              </SocialLoginButton>
            </a>
          </Link>
        </div>
      </SocialLoginWrapper>
      <SocialLoginWrapper>
        <div className="login-github">
          <Link href={`${SERVER_URL}/api/github`}>
            <a>
              <SocialLoginButton style={{ background: "#333" }}>
                Github
              </SocialLoginButton>
            </a>
          </Link>
        </div>
        <div className="login-kakao">
          <Link href={`${SERVER_URL}/api/kakao`}>
            <a>
              <SocialLoginButton
                style={{ background: "#fee500", color: "black" }}
              >
                Kakao
              </SocialLoginButton>
            </a>
          </Link>
        </div>
      </SocialLoginWrapper>
    </>
  );
};

export default SocialTemplate;
