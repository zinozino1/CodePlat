import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Form from "antd/lib/form/Form";
import SkillFilterForm from "./SkillFilterForm";
import { Select, Input, Upload, Button, Tag, Tooltip } from "antd";
import { UploadOutlined, SlidersFilled } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Locations } from "../../../lib/constant/constant";
import useInput from "../../../hooks/useInput";
import TagBox from "./TagBox";
import { writePostRequestAction } from "../../../reducers/post";
import { withRouter } from "next/router";

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
const ForumSelectChildren = [
  <Select.Option key="free">자유</Select.Option>,
  <Select.Option key="qna">QnA</Select.Option>,
];
Locations.forEach((v, i) => {
  LocationSelectChildren.push(
    <Select.Option key={v.key}>{v.value}</Select.Option>,
  );
});
for (let i = 0; i < 10; i++) {
  PeopleSelectChildren.push(<Select.Option key={i + 1}>{i + 1}</Select.Option>);
}

const WriteForm = ({ contentType, router }) => {
  const dispatch = useDispatch();
  const { skill } = useSelector((state) => state.skill);

  // 공통
  const [title, onChangeTitle] = useInput("");
  const [description, onChangeDescription] = useInput("");

  // 스터디, 프로젝트
  const [peopleNumber, setPeopleNumber] = useState(1);
  const [location, setLocation] = useState("서울");

  const onChangePeopleNumber = useCallback((value) => {
    setPeopleNumber(value);
  }, []);
  const onChangeLocation = useCallback((value) => {
    setLocation(value);
  }, []);

  const onStudyAndProjectSubmit = useCallback(() => {
    if (skill.length === 0) {
      alert("활용기술을 하나 이상 선택해주세요.");
      return;
    }
    if (title === "") {
      alert("제목을 채워주세요.");
      return;
    }
    if (description === "") {
      alert("내용을 채워주세요.");
      return;
    }

    dispatch(
      writePostRequestAction({
        type: router.route.split("/")[2],
        title,
        description,
        peopleNumber,
        location,
        skill,
      }),
    );
  }, [skill, title, description, peopleNumber, location]);

  // 포럼
  const [filter, setFilter] = useState("자유");
  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState("");

  const onChangeFilter = useCallback((value) => {
    setFilter(value);
  }, []);

  const onForumSubmit = useCallback(() => {
    if (title === "") {
      alert("제목을 채워주세요.");
      return;
    }
    if (description === "") {
      alert("내용을 채워주세요.");
      return;
    }
    dispatch(
      writePostRequestAction({
        type: router.route.split("/")[2],
        title,
        description,
        filter,
        tags,
      }),
    );
  }, [title, description, filter, tags]);

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
            <Select
              defaultValue="1"
              bordered={false}
              style={{ color: "#999" }}
              onChange={onChangePeopleNumber}
            >
              {PeopleSelectChildren}
            </Select>
            <Label style={{ lineHeight: "32px" }}>지역</Label>
            <Select
              defaultValue="서울"
              bordered={false}
              style={{ color: "#999" }}
              onChange={onChangeLocation}
            >
              {LocationSelectChildren}
            </Select>
          </FormItemWrapper>
          <FormItemWrapper>
            <div style={{ marginBottom: "7px" }}>
              <Label>제목</Label>
            </div>
            <Input.TextArea
              placeholder="제목을 입력해주세요."
              onChange={onChangeTitle}
            />
          </FormItemWrapper>
          <FormItemWrapper>
            <div style={{ marginBottom: "7px" }}>
              <Label>내용</Label>
            </div>
            <Input.TextArea
              rows={6}
              placeholder="내용을 입력해주세요."
              onChange={onChangeDescription}
            />
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
            <Button
              style={{ width: "100px" }}
              onClick={onStudyAndProjectSubmit}
            >
              등록
            </Button>
          </div>
        </WriteFormWrapper>
      ) : (
        <WriteFormWrapper>
          <TitleWrapper>글쓰기</TitleWrapper>
          <FormItemWrapper>
            <Label style={{ lineHeight: "32px" }}>분류</Label>
            <Select
              defaultValue={filter}
              bordered={false}
              style={{ color: "#999" }}
              onChange={onChangeFilter}
            >
              {ForumSelectChildren}
            </Select>
          </FormItemWrapper>
          <FormItemWrapper>
            <div style={{ marginBottom: "7px" }}>
              <Label>제목</Label>
            </div>
            <Input.TextArea
              placeholder="제목을 입력해주세요."
              onChange={onChangeTitle}
            />
          </FormItemWrapper>
          <FormItemWrapper>
            <div style={{ marginBottom: "7px" }}>
              <Label>태그</Label>
            </div>
            <TagBox
              tags={tags}
              setTags={setTags}
              inputVisible={inputVisible}
              setInputVisible={setInputVisible}
              inputValue={inputValue}
              setInputValue={setInputValue}
              editInputIndex={editInputIndex}
              setEditInputIndex={setEditInputIndex}
              editInputValue={editInputValue}
              setEditInputValue={setEditInputValue}
            />
          </FormItemWrapper>
          <FormItemWrapper>
            <div style={{ marginBottom: "7px" }}>
              <Label>내용</Label>
            </div>
            <Input.TextArea
              rows={6}
              placeholder="내용을 입력해주세요."
              onChange={onChangeDescription}
            />
          </FormItemWrapper>
          <div style={{ textAlign: "center", margin: "50px 0" }}>
            <Button style={{ width: "100px" }} onClick={onForumSubmit}>
              등록
            </Button>
          </div>
        </WriteFormWrapper>
      )}
    </>
  );
};

export default withRouter(WriteForm);
