import React from "react";
import WriteLayout from "../../../components/layout/WriteLayout";
import WriteForm from "../../../components/common/contents/WriteForm";
import Head from "next/head";

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

export default ProjectWrite;
