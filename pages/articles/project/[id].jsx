import React, { useEffect } from "react";
import PostViewerLayout from "../../../components/layout/PostViewerLayout";
import { useSelector, useDispatch } from "react-redux";
import {
  loadPostRequestAction,
  initializePostAction,
} from "../../../reducers/post";
import { withRouter } from "next/router";
import PostViewer from "../../../components/common/contents/PostViewer";

const ProjectDetail = ({ router }) => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(
      loadPostRequestAction({
        id: router.query.id,
        contentType: "project",
      }),
    );
    return () => {
      dispatch(initializePostAction());
    };
  }, []);

  return (
    <PostViewerLayout contentType="project">
      {post && <PostViewer post={post} contentType="project" />}
    </PostViewerLayout>
  );
};

export default withRouter(ProjectDetail);
