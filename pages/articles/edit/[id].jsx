import React, { useEffect } from "react";
import WriteLayout from "../../../components/layout/WriteLayout";
import WriteForm from "../../../components/common/contents/WriteForm";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import {
  loadPostRequestAction,
  initializePostAction,
} from "../../../reducers/post";
import { withRouter } from "next/router";

const PostEdit = ({ router }) => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(
      loadPostRequestAction({
        postId: router.query.id,
      }),
    );
    return () => {
      dispatch(initializePostAction());
    };
  }, [router]);

  if (!post) return null;

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>글수정</title>
      </Head>
      <WriteLayout>
        <WriteForm contentType={post.type} isEdit={true} />
      </WriteLayout>
    </>
  );
};

export default withRouter(PostEdit);
