import React, { useEffect, useCallback, useState } from "react";
import ArticleLayout from "../../../components/layout/ArticleLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  loadPostsReqeustAction,
  initializePostsAction,
  //searchPostsRequestAction,
} from "../../../reducers/post";
import List from "../../../components/common/contents/List";
import { Spin, Select } from "antd";
import styled from "styled-components";
import { withRouter } from "next/router";
import Head from "next/head";
import { Locations } from "../../../lib/constant/constant";

const SelectLocationWrapper = styled.div`
  text-align: right;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: 500;
`;

const SpinWrapper = styled.div`
  text-align: center;
  margin: 100px 0;
`;

let skip = 0;
const LocationSelectChildren = [];
Locations.forEach((v, i) => {
  LocationSelectChildren.push(
    <Select.Option key={v.key}>{v.value}</Select.Option>,
  );
});

const Study = ({ router }) => {
  //console.log("skip : ", skip);
  const dispatch = useDispatch();
  const { skill } = useSelector((state) => state.skill);
  const { studyPosts, loadPostsLoading } = useSelector((state) => state.post);
  const { temporalPostsLength } = useSelector((state) => state.post);

  const [location, setLocation] = useState("전체");
  const onChangeLocation = useCallback((value) => {
    setLocation(value);
  }, []);

  const onFilterSearch = useCallback(() => {}, []);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && !loadPostsLoading) {
      console.log("temporalPostsLength : ", temporalPostsLength);
      dispatch(
        loadPostsReqeustAction({
          type: "study",
          skip,
          techStack: skill,
          term: router.query.term,
        }),
      );
      if (temporalPostsLength >= 10) {
        skip += 10;
        dispatch(
          loadPostsReqeustAction({
            type: "study",
            skip,
            techStack: skill,
            term: router.query.term,
          }),
        );
      }
    }
  };

  // useEffect(() => {
  //   console.log(skill);
  //   console.log(location);
  //   // if (skill.length !== 0) {
  //   //   skip = 0;
  //   //   console.log(skill);
  //   //   console.log(location);
  //   //   dispatch(initializePostsAction()); // 초기화 시켜준 후 호출
  //   //   dispatch(
  //   //     filterSearchRequestAction({ type: "study", skip, skill, location }),
  //   //   );
  //   //   skip += 10;
  //   // }
  // }, [skill, location]);

  useEffect(() => {
    console.log("skip : ", skip);
    console.log("query : ", router.query.term);
    console.log("skill: ", skill);
    console.log("location : ", location);
    if (router.query.term) {
      dispatch(
        loadPostsReqeustAction({
          type: "study",
          term: router.query.term,
          skip,
          techStack: skill,
          location,
        }),
      );
    } else {
      dispatch(
        loadPostsReqeustAction({
          type: "study",
          skip,
          teckStack: skill,
          location,
        }),
      );
    }
    skip += 10;

    return () => {
      console.log("언마운트");
      skip = 0;
      dispatch(initializePostsAction());
    };
  }, [router, skill, location]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>스터디</title>
      </Head>
      <ArticleLayout contentType="study">
        <SelectLocationWrapper>
          <Label style={{ lineHeight: "32px" }}>지역</Label>
          <Select
            defaultValue="전체"
            bordered={false}
            style={{ color: "#999" }}
            onChange={onChangeLocation}
          >
            {LocationSelectChildren}
          </Select>
        </SelectLocationWrapper>
        <List data={studyPosts} type="study" />
        {loadPostsLoading && (
          <SpinWrapper>
            <Spin tip="불러오는중..." />
          </SpinWrapper>
        )}
      </ArticleLayout>
    </>
  );
};

export default withRouter(Study);
