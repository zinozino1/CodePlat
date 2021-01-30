import React from "react";
import WriteLayout from "../../../components/layout/WriteLayout";
import WriteForm from "../../../components/common/contents/WriteForm";
import Head from "next/head";

const StudyWrite = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>스터디 | 글쓰기</title>
      </Head>
      <WriteLayout>
        <WriteForm contentType="study" />
      </WriteLayout>
    </>
  );
};

export default StudyWrite;
