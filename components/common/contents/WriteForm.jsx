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
import Router, { withRouter } from "next/router";
import axios from "axios";
import { editPost } from "../../../lib/api/post";

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
  <Select.Option key="자유">자유</Select.Option>,
  <Select.Option key="QnA">QnA</Select.Option>,
];
Locations.forEach((v, i) => {
  LocationSelectChildren.push(
    <Select.Option key={v.key}>{v.value}</Select.Option>,
  );
});
for (let i = 0; i < 10; i++) {
  PeopleSelectChildren.push(<Select.Option key={i + 1}>{i + 1}</Select.Option>);
}

const WriteForm = ({ contentType, router, isEdit }) => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);
  const { skill } = useSelector((state) => state.skill);
  const { me } = useSelector((state) => state.user);

  // 공통 state
  const [title, onChangeTitle] = isEdit ? useInput(post.title) : useInput("");
  const [description, onChangeDescription] = isEdit
    ? useInput(post.content)
    : useInput("");

  // 스터디, 프로젝트 state
  const [peopleNumber, setPeopleNumber] = isEdit
    ? useState(post.recruitment)
    : useState(1);
  const [location, setLocation] = isEdit
    ? useState(post.location)
    : useState("전체");

  const onChangePeopleNumber = useCallback((value) => {
    setPeopleNumber(value);
  }, []);
  const onChangeLocation = useCallback((value) => {
    setLocation(value);
  }, []);

  const onStudyAndProjectSubmit = useCallback(() => {
    if (!me) {
      alert("로그인이 필요한 서비스입니다.");
      return;
    }
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
    if (description.length < 5) {
      alert("내용을 5글자 이상 써주세요.");
      return;
    }

    dispatch(
      writePostRequestAction({
        type: router.route.split("/")[2],
        writer: me._id,
        title,
        content: description,
        recruitment: peopleNumber,
        location,
        techStack: skill,
        field: router.route.split("/")[2],
      }),
    );
  }, [skill, title, description, peopleNumber, location, me, router]);

  const onStudyAndProjectEdit = useCallback(() => {
    if (!me) {
      alert("로그인이 필요한 서비스입니다.");
      return;
    }
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
    if (description.length < 5) {
      alert("내용을 5글자 이상 써주세요.");
      return;
    }
    let editConfirm = confirm("수정하시겠습니까?");
    if (editConfirm) {
      axios
        .put(`api/post/update`, {
          id: post._id,
          title,
          content: description,
          recruitment: peopleNumber,
          location,
          techStack: skill,
        })
        .then(() => {
          //alert("수정성공");
          Router.push(
            `http://localhost:3000/articles/${post.type}/${post._id}`,
          );
        })
        .catch((error) => {
          alert("수정실패");
        });
    } else {
      return;
    }

    // await axios
    //   .put(editPost, {
    //     id: post._id,
    //     title,
    //     content: description,
    //     recruitment: peopleNumber,
    //     location,
    //     techStack: skill,
    //   })
    //   .then((res) => {
    //     console.log("수정성공");
    //     Router.push(`http://localhost:3000/articles/${post.type}/${post._id}`);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert("수정실패");
    //   });
  }, [skill, title, description, peopleNumber, location, post]);

  // 포럼 state
  const [filter, setFilter] = isEdit ? useState(post.field) : useState("자유");

  const [tags, setTags] = isEdit ? useState(post.tag) : useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState("");

  const onChangeFilter = useCallback((value) => {
    setFilter(value);
  }, []);

  const onForumSubmit = useCallback(() => {
    if (!me) {
      alert("로그인이 필요한 서비스입니다.");
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
    if (description.length < 5) {
      alert("내용을 5글자 이상 써주세요.");
      return;
    }
    dispatch(
      writePostRequestAction({
        type: router.route.split("/")[2],
        writer: me._id,
        title,
        content: description,
        tag: tags,
        field: filter,
      }),
    );
  }, [title, description, tags, router, me, filter]);

  const onForumEdit = useCallback(() => {
    if (!me) {
      alert("로그인이 필요한 서비스입니다.");
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
    if (description.length < 5) {
      alert("내용을 5글자 이상 써주세요.");
      return;
    }
    let editConfirm = confirm("수정하시겠습니까?");
    if (editConfirm) {
      axios
        .put(`api/post/update`, {
          id: post._id,
          title,
          content: description,
          tag: tags,
          field: filter,
        })
        .then(() => {
          //alert("수정성공");
          Router.push(
            `http://localhost:3000/articles/${post.type}/${post._id}`,
          );
        })
        .catch((error) => {
          alert("수정실패");
        });
    } else {
      return;
    }
  }, [title, description, tags, post, filter]);

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
            <SkillFilterForm
              type="write"
              isEdit={isEdit}
              values={isEdit && post.techStack}
            />
          </FormItemWrapper>
          <FormItemWrapper style={{ display: "flex" }}>
            <Label style={{ lineHeight: "32px" }}>모집인원</Label>
            <Select
              defaultValue={isEdit ? post.recruitment : "1"}
              bordered={false}
              style={{ color: "#999" }}
              onChange={onChangePeopleNumber}
            >
              {PeopleSelectChildren}
            </Select>
            <Label style={{ lineHeight: "32px" }}>지역</Label>
            <Select
              defaultValue={isEdit ? post.location : "전체"}
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
              defaultValue={isEdit ? post.title : ""}
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
              defaultValue={isEdit ? post.content : ""}
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
              onClick={isEdit ? onStudyAndProjectEdit : onStudyAndProjectSubmit}
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
              defaultValue={isEdit ? post.field : filter}
              bordered={false}
              style={{ color: "#999" }}
              onChange={onChangeFilter}
              // value={isEdit?:}
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
              defaultValue={isEdit ? post.title : ""}
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
              defaultValue={isEdit ? post.content : ""}
            />
          </FormItemWrapper>
          <div style={{ textAlign: "center", margin: "50px 0" }}>
            <Button
              style={{ width: "100px" }}
              onClick={isEdit ? onForumEdit : onForumSubmit}
            >
              {isEdit ? "수정" : "등록"}
            </Button>
          </div>
        </WriteFormWrapper>
      )}
    </>
  );
};

export default withRouter(WriteForm);
