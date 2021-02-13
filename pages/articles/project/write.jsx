import React from "react";
import WriteLayout from "../../../components/layout/WriteLayout";
import WriteForm from "../../../components/common/contents/WriteForm";
import Head from "next/head";
import wrapper from "../../../store/configureStore";
import { setUserRequestAction } from "../../../reducers/user";
import { END } from "redux-saga";

const ProjectWrite = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>프로젝트 | 글쓰기</title>
      </Head>
      <WriteLayout>
        <WriteForm contentType="project" />
      </WriteLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    context.store.dispatch(setUserRequestAction());
    // 포스트 SSR 필요
    // context.store.dispatch(mainLoadPostsReqeustAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default ProjectWrite;
