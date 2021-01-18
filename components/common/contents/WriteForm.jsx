import React, { useState } from "react";
import styled from "styled-components";
import Form from "antd/lib/form/Form";
import SkillFilterForm from "./SkillFilterForm";
import { Select, Input, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Locations } from "../../../lib/constant/constant";
import useInput from "../../../hooks/useInput";

const WriteFormWrapper = styled.div`
  margin: 40px 0;
  background: #fff;
  padding: 40px;
`;

const TitleWrapper = styled.h3`
  margin-bottom: 30px;
`;

const FormItemWrapper = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.span`
  font-weight: 500;
`;

const LocationSelectChildren = [];
const PeopleSelectChildren = [];
Locations.forEach((v, i) => {
  LocationSelectChildren.push(
    <Select.Option key={v.key}>{v.value}</Select.Option>,
  );
});
for (let i = 0; i < 10; i++) {
  PeopleSelectChildren.push(<Select.Option key={i + 1}>{i + 1}</Select.Option>);
}

const WriteForm = ({ contentType }) => {
  const skills = useSelector((state) => state.skill);

  const [peopleNumber, setPeopleNumber] = useState(1);
  const [location, setLocation] = useState("서울");
  const [title, onChangeTitle] = useInput("");
  const [description, onChangeDescription] = useInput("");

  return (
    <>
      {contentType == "study" || contentType == "project" ? (
        <WriteFormWrapper>
          {contentType === "study" ? (
            <TitleWrapper>스터디 모집</TitleWrapper>
          ) : (
            <TitleWrapper>프로젝트 모집</TitleWrapper>
          )}
          <FormItemWrapper>
            <div style={{ marginBottom: "7px" }}>
              <Label>활용기술</Label>
            </div>

            <SkillFilterForm type="write" />
          </FormItemWrapper>
          <FormItemWrapper style={{ display: "flex" }}>
            <Label style={{ lineHeight: "32px" }}>모집인원</Label>
            <Select defaultValue="1" bordered={false} style={{ color: "#999" }}>
              {PeopleSelectChildren}
            </Select>
            <Label style={{ lineHeight: "32px" }}>지역</Label>
            <Select
              defaultValue="서울"
              bordered={false}
              style={{ color: "#999" }}
            >
              {LocationSelectChildren}
            </Select>
          </FormItemWrapper>
          <FormItemWrapper>
            <div style={{ marginBottom: "7px" }}>
              <Label>제목</Label>
            </div>
            <Input.TextArea placeholder="제목을 입력해주세요." />
          </FormItemWrapper>
          <FormItemWrapper>
            <div style={{ marginBottom: "7px" }}>
              <Label>내용</Label>
            </div>
            <Input.TextArea rows={6} placeholder="내용을 입력해주세요." />
          </FormItemWrapper>
          <FormItemWrapper>
            <div style={{ marginBottom: "7px" }}>
              <Label>첨부파일</Label>
            </div>
            <Upload name="logo" listType="picture">
              <Button icon={<UploadOutlined />}>파일 업로드</Button>
            </Upload>
          </FormItemWrapper>
          <div style={{ textAlign: "center", margin: "50px 0" }}>
            <Button style={{ width: "100px" }}>등록</Button>
          </div>
        </WriteFormWrapper>
      ) : (
        <div>forum write</div>
      )}
    </>
  );
};

export default WriteForm;
