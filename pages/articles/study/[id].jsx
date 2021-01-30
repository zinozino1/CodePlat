import React, { useEffect } from "react";
import PostViewerLayout from "../../../components/layout/PostViewerLayout";
import { useSelector, useDispatch } from "react-redux";
import {
  loadPostRequestAction,
  initializePostAction,
} from "../../../reducers/post";
import { withRouter } from "next/router";
import PostViewer from "../../../components/common/contents/PostViewer";
import Head from "next/head";

const StudyDetail = ({ router }) => {
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

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>스터디</title>
      </Head>
      <PostViewerLayout contentType="study">
        {post && <PostViewer post={post} contentType="study" />}
      </PostViewerLayout>
    </>
  );
};

export default withRouter(StudyDetail);
