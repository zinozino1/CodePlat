import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import EditProfileForm from "./EditProfileForm";
import SkillFilterForm from "../common/contents/SkillFilterForm";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { SERVER_URL } from "../../lib/constant/constant";
import shortid from "shortid";
import useToggle from "../../hooks/useToggle";
import { message } from "antd";
//import { profileEdit } from "../../lib/api/post";

import axios from "axios";
import FormData from "form-data";

const ProfileReviseFormWrapper = styled.div`
  display: flex;
  padding: 2rem 0;
  .edit-profile-form {
    flex: 1;
    border: 1px solid black;
    padding: 20px;
  }
  .skill-filter-form {
    flex: 2;
    border: 1px solid black;
    padding: 20px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const EditProfile = () => {
  const { me } = useSelector((state) => state.user);
  const { skill } = useSelector((state) => state.skill);
  const [nickname, setNickname] = useState("");
  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
  }, []);

  const [githubId, setGithubId] = useState("");
  const onChangeGithubId = useCallback((e) => {
    setGithubId(e.target.value);
  }, []);
  const [gitSecret, setGitSecret] = useState(false);
  const onToggleGitSecret = useCallback(() => {
    setGitSecret(!gitSecret);
  }, [gitSecret]);

  const [profileImage, setProfileImage] = useState(null);

  const onChangeProfileImage = useCallback((e) => {
    setProfileImage(e);
  }, []);

  const onDeleteProfileImage = useCallback((e) => {
    setProfileImage(null);
  }, []);

  const [loading, setLoading] = useState(false);

  const submitDoneMessage = () => {
    message.success({
      content: "저장 완료!",
      className: "custom-class",
      style: {
        marginTop: "5vh",
      },
    });
  };

  const onSubmit = useCallback(() => {
    // axios
    setLoading(true);
    const config = {
      headers: {
        Accept: "application/json",
        enctype: "multipart/form-data",
      },
    };
    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("githubUrl", githubId);
    formData.append("techStack", JSON.stringify(skill));
    formData.append("secretGithub", gitSecret);
    formData.append("avatar", profileImage);

    console.log({ skill, nickname, githubId, gitSecret, profileImage });
    axios
      .patch(`/api/users`, formData, config)
      .then((res) => {
        console.log(res.data.user);
        submitDoneMessage();
      })
      .catch((err) => {
        console.log(err);
      });

    setLoading(false);
  }, [skill, nickname, githubId, gitSecret, profileImage]);

  useEffect(() => {
    setProfileImage({
      uid: shortid.generate(),
      url: `${SERVER_URL}/${me.avatarUrl}`,
      thumbUrl: `${SERVER_URL}/${me.avatarUrl}`,
      status: "done",
    });
    setNickname(me.nickname);
    setGithubId(me.githubId);
  }, [me]);

  // useEffect(() => {
  //   console.log(profileImage);
  // }, [profileImage]);

  useEffect(() => {
    if (me) {
      setGitSecret(me.secretGithub);
      setGithubId(me.githubUrl);
    }
  }, [me]);

  if (!me) return null;

  return (
    <>
      <ProfileReviseFormWrapper>
        <div className="edit-profile-form">
          <EditProfileForm
            onChangeProfileImage={onChangeProfileImage}
            onDeleteProfileImage={onDeleteProfileImage}
            onChangeNickname={onChangeNickname}
            onChangeGithubId={onChangeGithubId}
            onToggleGitSecret={onToggleGitSecret}
            gitSecret={gitSecret}
          />
        </div>
        <div className="skill-filter-form">
          <SkillFilterForm type="mypage" values={me.techStack} isEdit={true} />
        </div>
      </ProfileReviseFormWrapper>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Button type="primary" onClick={onSubmit} loading={loading}>
          저장하기
        </Button>
      </div>
    </>
  );
};

export default EditProfile;
