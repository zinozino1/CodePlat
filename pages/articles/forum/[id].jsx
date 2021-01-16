import React, { useEffect } from "react";
import PostViewerLayout from "../../../components/layout/PostViewerLayout";
import { useSelector, useDispatch } from "react-redux";
import {
  loadPostRequestAction,
  initializePostAction,
} from "../../../reducers/post";
import { withRouter } from "next/router";
import PostViewer from "../../../components/common/contents/PostViewer";

const ForumDetail = ({ router }) => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(
      loadPostRequestAction({
        id: router.query.id,
        contentType: "forum",
      }),
    );
    return () => {
      dispatch(initializePostAction());
    };
  }, []);

  return (
    <PostViewerLayout contentType="forum">
      {post && <PostViewer post={post} contentType="forum" />}
    </PostViewerLayout>
  );
};

export default withRouter(ForumDetail);
