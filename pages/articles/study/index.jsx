import React, { useEffect } from "react";
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

let skip = 0;

const Study = ({ router }) => {
  const dispatch = useDispatch();
  const { studyPosts, loadPostsLoading } = useSelector((state) => state.post);
  const { temporalPostsLength } = useSelector((state) => state.post);
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && !loadPostsLoading) {
      dispatch(loadPostsReqeustAction({ type: "study", skip }));
      if (temporalPostsLength >= 10) {
        dispatch(loadPostsReqeustAction({ type: "study", skip }));
        skip += 10;
      }
    }
  };

  useEffect(() => {
    // {
    //   contentType:"project",
    //   query:"asdf"
    // }
    dispatch(loadPostsReqeustAction({ type: "study", skip }));
    skip += 10;
    return () => {
      dispatch(initializePostsAction());
    };
  }, [router]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      skip = 0;
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
