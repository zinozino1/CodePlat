import React, { useState, useCallback, useEffect } from "react";
import { Card, Form, Input, Button, Upload, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import shortid from "shortid";
import { SERVER_URL } from "../../lib/constant/constant";
import { UploadOutlined } from "@ant-design/icons";

const EditProfileFormWrapper = styled(Form)`
  @media (max-width: 900px) {
    width: 100%;
    .profile-card {
      margin: 0 auto;
    }
  }
`;

const RegisterInputItemWrapper = styled(Form.Item)`
  .ant-form-item-label {
    text-align: left;
  }
  .email-code {
    width: 200px;
  }
  .ant-form-item-control {
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EditProfileForm = ({
  onChangeProfileImage,
  onDeleteProfileImage,
  onChangeNickname,
  onChangeGithubId,
  onToggleGitSecret,
  gitSecret,
}) => {
  const { me } = useSelector((state) => state.user);
  if (!me) return null;
  return (
    <EditProfileFormWrapper>
      <div className="site-card-border-less-wrapper">
        <Card
          title="프로필 수정"
          bordered={true}
          style={{ width: 300 }}
          className="profile-card"
        >
          {/* <RegisterInputItemWrapper
            name="nickname"
            label="닉네임"
            hasFeedback
            //   onChange={onChangePassword}
          >
            <Input placeholder="닉네임" value={me && me.nickname} />
          </RegisterInputItemWrapper> */}

          <div>
            <span>닉네임</span>
            <Input
              placeholder="닉네임"
              onChange={onChangeNickname}
              defaultValue={me && me.nickname}
            />
          </div>

          <div>
            <span>깃허브</span>
            <Input
              placeholder="깃허브"
              onChange={onChangeGithubId}
              defaultValue={me && me.githubUrl}
            />
            <Checkbox
              defaultChecked={me && me.secretGithub}
              onClick={onToggleGitSecret}
            >
              비공개
            </Checkbox>
          </div>
          {/* <RegisterInputItemWrapper
            name="github"
            label="Github"
            hasFeedback
            //   onChange={onChangePassword}
          >
            <div>
              <Input placeholder="깃허브" value={me && me.githubId} />
              <Checkbox>비공개</Checkbox>
            </div>
          </RegisterInputItemWrapper> */}
          <div>
            <span>프로필 사진 변경</span>
            <Upload
              name="logo"
              listType="picture"
              beforeUpload={onChangeProfileImage}
              maxCount={1}
              defaultFileList={[
                {
                  uid: shortid.generate(),
                  url: `${SERVER_URL}/${me.avatarUrl}`,
                  thumbUrl: `${SERVER_URL}/${me.avatarUrl}`,
                  name: me.avatarUrl,
                  status: "done",
                },
              ]}
              onRemove={onDeleteProfileImage}
            >
              {/* // defaultFileList> */}
              <Button icon={<UploadOutlined />}>이미지 변경</Button>
            </Upload>
          </div>

          <Button block>비밀번호 변경</Button>
        </Card>
      </div>
    </EditProfileFormWrapper>
  );
};

export default EditProfileForm;
