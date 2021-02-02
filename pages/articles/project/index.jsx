import React, { useEffect, useState } from "react";
import ArticleLayout from "../../../components/layout/ArticleLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  loadPostsReqeustAction,
  initializePostsAction,
  searchPostsRequestAction,
} from "../../../reducers/post";
import List from "../../../components/common/contents/List";
import { Spin } from "antd";
import styled from "styled-components";
import { withRouter } from "next/router";
import Head from "next/head";

const SelectLocationWrapper = styled.div`
  text-align: right;
  margin-bottom: 10px;
`;

const SpinWrapper = styled.div`
  text-align: center;
  margin: 100px 0;
`;

let skip = 0;

const Project = ({ router }) => {
  const dispatch = useDispatch();
  const { projectPosts, loadPostsLoading } = useSelector((state) => state.post);

  const { temporalPostsLength } = useSelector((state) => state.post);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && !loadPostsLoading) {
      dispatch(loadPostsReqeustAction({ type: "project", skip }));
      if (temporalPostsLength >= 10) {
        dispatch(loadPostsReqeustAction({ type: "project", skip }));
        skip += 10;
      }
    }
  };

  useEffect(() => {
    // {
    //   contentType:"project",
    //   query:"asdf"
    // }

    if (router.query.term) {
      dispatch(
        searchPostsRequestAction({
          type: "project",
          term: router.query.term,
          skip,
        }),
      );
    } else {
      dispatch(loadPostsReqeustAction({ type: "project", skip }));
      skip += 10;
    }

    return () => {
      skip = 0;
      dispatch(initializePostsAction());
    };
  }, [router]);

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
        <title>프로젝트</title>
      </Head>
      <ArticleLayout contentType="project">
        <SelectLocationWrapper>asdfasdf</SelectLocationWrapper>
        <List data={projectPosts} type="project" />
        {loadPostsLoading && (
          <SpinWrapper>
            <Spin tip="불러오는중..." />
          </SpinWrapper>
        )}
      </ArticleLayout>
    </>
  );
};

export default withRouter(Project);
