import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

import SkillFilterForm from "./SkillFilterForm";
import { Select, Input, Upload, Button, Tag, Tooltip, Form } from "antd";
import {
  UploadOutlined,
  SlidersFilled,
  DeleteOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Locations, SERVER_URL } from "../../../lib/constant/constant";
import useInput from "../../../hooks/useInput";
import TagBox from "./TagBox";
import { writePostRequestAction } from "../../../reducers/post";
import Router, { withRouter } from "next/router";
import axios from "axios";
import { editPost } from "../../../lib/api/post";
import Editor from "./Editor";
import FormData from "form-data";
// import ImgCrop from "antd-img-crop";

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

const EditFileList = styled.div`
  margin: 8px 0;
  border: 1px solid #ccc;
  padding: 8px;
`;

// const files = new FormData();

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
  const [title, setTitle] = isEdit ? useState(post.title) : useState("");
  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const [description, setDescription] = isEdit
    ? useState(post.content)
    : useState("");

  const onChangeDescription = useCallback((e) => {
    // setDescription(e.replace(/(<([^>]+)>)/gi, ""));
    setDescription(e);
  }, []);

  const [fileList, setFileList] = isEdit
    ? useState(post.fileUrl)
    : useState([]);

  const [fileNames, setFileNames] = isEdit
    ? useState(post.fileName)
    : useState([]);

  const mergeFiles = () => {
    let mergedFiles = [];
    for (let i = 0; i < fileList.length; i++) {
      let newFile = {};
      newFile.url = `${SERVER_URL}/${fileList[i]}`;
      newFile.thumbUrl = `${SERVER_URL}/${fileList[i]}`;
      newFile.name = fileNames[i];
      newFile.uid = i;
      newFile.status = "done";
      mergedFiles.push(newFile);
    }
    return mergedFiles;
  };

  const [mergedFiles, setMergedFiles] = useState(mergeFiles());

  const onChangeFileList = useCallback(
    (e) => {
      //console.log(e);
      //setFileList(fileList.concat(e));
      // console.log(file);

      setMergedFiles(mergedFiles.concat(e));
    },
    [mergedFiles],
  );

  const onRemoveFile = useCallback(
    (e) => {
      setMergedFiles(
        mergedFiles.filter((v, i) => {
          if (v.uid !== e.uid) {
            return { ...v };
          }
        }),
      );
    },
    [mergedFiles],
  );

  // const onPreview = async (file) => {
  //   let src = file.url;
  //   if (!src) {
  //     src = await new Promise((resolve) => {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file.originFileObj);
  //       reader.onload = () => resolve(reader.result);
  //     });
  //   }
  //   const image = new Image();
  //   image.src = src;
  //   const imgWindow = window.open(src);
  //   imgWindow.document.write(image.outerHTML);
  // };

  // const onSubmit

  // const onChangeFile = useCallback((e) => {
  //   console.log(e.fileList[0].originFileObj);
  // }, []);

  // const normFile = (e) => {
  //   //console.log(e.fileList[0].originFileObj);
  //   if (e.file.status === "done") {
  //     files.append("file", e.fileList[0].originFileObj);

  //     // console.log(e.fileList[0].originFileObj);
  //     // setImageFile(formData);
  //     // console.log("done");
  //   } else if (e.file.status === "removed") {
  //     files.delete("file");
  //     // console.log("removed");
  //   }

  //   // let fileList = e.fileList;
  //   // fileList = fileList.slice(-1);

  //   // if (Array.isArray(e)) {
  //   //   return e;
  //   // }
  //   // return e && fileList;
  // };

  // const [forumTitle, setForumTitle] = useState("");
  // const onChangeForumTitle = useCallback((e) => {
  //   setForumTitle(e.target.value);
  // }, []);
  // const [forumDescription, setForumDescription] = useState("");
  // const onChangeForumDescription = useCallback((e) => {
  //   setForumDescription(e);
  // }, []);

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
    const formData = new FormData();
    mergedFiles.forEach((file) => formData.append("files", file));
    //console.log(fileList);
    //formData.append()
    // formData.append("")
    // 여기부터 작업하면 댐
    formData.append("type", contentType);
    formData.append("writer", me._id);
    formData.append("title", title);
    formData.append("content", description);
    formData.append("techStack", JSON.stringify(skill));
    formData.append("field", filter);
    formData.append("recruitment", peopleNumber);
    formData.append("location", location);

    dispatch(
      writePostRequestAction(
        formData,
        // type: router.route.split("/")[2],
        // writer: me._id,
        // title,
        // content: description,
        // recruitment: peopleNumber,
        // location,
        // techStack: skill,
        // field: router.route.split("/")[2],
      ),
    );
  }, [
    skill,
    title,
    description,
    peopleNumber,
    location,
    me,
    router,
    mergedFiles,
  ]);

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
      const formData = new FormData();
      let existFilePaths = [];
      let existFileNames = [];
      mergedFiles.forEach((file) => {
        if (file.size) {
          formData.append("files", file);
        } else {
          existFilePaths.push(file.url);
          existFileNames.push(file.name);
        }
      });
      //console.log(fileList);
      //formData.append()
      // formData.append("")
      // 여기부터 작업하면 댐
      formData.append("type", contentType);
      formData.append("id", post._id);
      formData.append("title", title);
      formData.append("content", description);

      formData.append("field", filter);
      formData.append("filePath", JSON.stringify(existFilePaths));
      formData.append("fileName", JSON.stringify(existFileNames));
      axios
        .patch(`api/posts`, formData)
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

  // tagbox 관련된 것들
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

    const formData = new FormData();
    mergedFiles.forEach((file) => formData.append("files", file));
    //console.log(fileList);
    //formData.append()
    // formData.append("")
    // 여기부터 작업하면 댐
    formData.append("type", "forum");
    formData.append("writer", me._id);
    formData.append("title", title);
    formData.append("content", description);
    formData.append("tag", JSON.stringify(tags));
    formData.append("field", filter);

    //console.log({ title, description, tags, filter, fileList });

    dispatch(
      writePostRequestAction(
        formData,
        // type: router.route.split("/")[2],
        // writer: me._id,
        // title,
        // content: description,
        // tag: tags,
        // field: filter,
      ),
    );
  }, [title, description, tags, router, me, filter, mergedFiles]);

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
    console.log({ title, description, tags, filter, mergedFiles });

    let editConfirm = confirm("수정하시겠습니까?");
    if (editConfirm) {
      const formData = new FormData();
      let existFilePaths = [];
      let existFileNames = [];
      mergedFiles.forEach((file) => {
        if (file.size) {
          // 새로운거

          formData.append("files", file);
        } else {
          // 기존에 있던거
          existFilePaths.push(file.url.replace(`${SERVER_URL}/`, ""));
          existFileNames.push(file.name);
        }
      });
      //console.log(fileList);
      //formData.append()
      // formData.append("")
      // 여기부터 작업하면 댐
      formData.append("type", "forum");
      formData.append("id", post._id);
      formData.append("title", title);
      formData.append("content", description);
      formData.append("tag", JSON.stringify(tags));
      formData.append("field", filter);
      formData.append("filePath", JSON.stringify(existFilePaths));
      formData.append("fileName", JSON.stringify(existFileNames));

      axios
        .patch(`api/posts`, formData)
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

  // useEffect(() => {
  //   console.log(title);
  //   console.log(description);
  // }, [title, description]);

  useEffect(() => {
    console.log(mergedFiles);
  }, [mergedFiles]);

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
          {/* <FormItemWrapper>
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
          </FormItemWrapper> */}
          <Editor
            onChangeDescription={onChangeDescription}
            onChangeTitle={onChangeTitle}
            description={description}
            title={title}
          />
          {/* <FormItemWrapper>
            <div style={{ marginBottom: "7px" }}>
              <Label>첨부파일</Label>
            </div>
            <Upload name="logo" listType="picture">
              <Button icon={<UploadOutlined />}>파일 업로드</Button>
            </Upload>
          </FormItemWrapper> */}
          <Upload
            name="logo"
            listType="picture"
            beforeUpload={onChangeFileList}
            defaultFileList={mergeFiles()}
            onRemove={onRemoveFile}
          >
            {/* // defaultFileList> */}
            <Button icon={<UploadOutlined />}>파일 업로드</Button>
          </Upload>
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
          {/* <FormItemWrapper>
            <div style={{ marginBottom: "7px" }}>
              <Label>제목</Label>
            </div>
            <Input.TextArea
              placeholder="제목을 입력해주세요."
              //onChange={onChangeTitle}
              defaultValue={isEdit ? post.title : ""}
            />
          </FormItemWrapper> */}
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
          {/* <FormItemWrapper>
            <div style={{ marginBottom: "7px" }}>
              <Label>내용</Label>
            </div>
            <Input.TextArea
              rows={6}
              placeholder="내용을 입력해주세요."
              //onChange={onChangeDescription}
              defaultValue={isEdit ? post.content : ""}
            />
          </FormItemWrapper> */}
          <Editor
            onChangeDescription={onChangeDescription}
            onChangeTitle={onChangeTitle}
            description={description}
            title={title}
          />
          <Upload
            name="logo"
            listType="picture"
            beforeUpload={onChangeFileList}
            defaultFileList={mergeFiles()}
            onRemove={onRemoveFile}
          >
            {/* // defaultFileList> */}
            <Button icon={<UploadOutlined />}>파일 업로드</Button>
          </Upload>

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
