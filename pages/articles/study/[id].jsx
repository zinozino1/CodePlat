import React, { useEffect } from "react";
import PostViewerLayout from "../../../components/layout/PostViewerLayout";
import { useSelector, useDispatch } from "react-redux";
import {
  loadPostRequestAction,
  initializePostAction,
} from "../../../reducers/post";
import { withRouter } from "next/router";
import PostViewer from "../../../components/common/contents/PostViewer";

const StudyDetail = ({ router }) => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(
      loadPostRequestAction({
        id: router.query.id,
        contentType: "study",
      }),
    );
    return () => {
      dispatch(initializePostAction());
    };
  }, [router]);

  return (
    <PostViewerLayout contentType="study">
      {post && <PostViewer post={post} contentType="study" />}
    </PostViewerLayout>
  );
};

export default withRouter(StudyDetail);
