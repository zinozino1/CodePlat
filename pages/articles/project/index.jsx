import React, { useEffect, useState } from "react";
import ArticleLayout from "../../../components/layout/ArticleLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  loadPostsReqeustAction,
  initializePostsAction,
} from "../../../reducers/post";
import List from "../../../components/common/contents/List";
import { Spin } from "antd";
import styled from "styled-components";
import { withRouter } from "next/router";
import Head from "next/head";

const SpinWrapper = styled.div`
  text-align: center;
  margin: 100px 0;
`;

const Project = ({ router }) => {
  const dispatch = useDispatch();
  const { projectPosts, loadPostsLoading } = useSelector((state) => state.post);
  const [skip, setSkip] = useState(0);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && !loadPostsLoading) {
      dispatch(loadPostsReqeustAction({ type: "project", skip }));
      setSkip(skip + 10);
    }
  };

  useEffect(() => {
    // {
    //   contentType:"project",
    //   query:"asdf"
    // }

    dispatch(loadPostsReqeustAction({ type: "project", skip }));
    return () => {
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
