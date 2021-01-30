import React from "react";
import WriteLayout from "../../../components/layout/WriteLayout";
import WriteForm from "../../../components/common/contents/WriteForm";
import Head from "next/head";

const ForumWrite = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>포럼 | 글쓰기</title>
      </Head>
      <WriteLayout>
        <WriteForm contentType="forum" />
      </WriteLayout>
    </>
  );
};

export default ForumWrite;
