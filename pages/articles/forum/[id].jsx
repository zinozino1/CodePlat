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
import wrapper from "../../../store/configureStore";
import { setUserRequestAction } from "../../../reducers/user";
import { END } from "redux-saga";

const ForumDetail = ({ router }) => {
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
        <title>포럼</title>
      </Head>
      <PostViewerLayout contentType="forum">
        {post && <PostViewer post={post} contentType="forum" />}
      </PostViewerLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    context.store.dispatch(setUserRequestAction);
    // 포스트 SSR 필요
    // context.store.dispatch(mainLoadPostsReqeustAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default withRouter(ForumDetail);
