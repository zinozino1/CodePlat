import React from "react";
import styled from "styled-components";
import PostViewerHeader from "./PostViewerHeader";
import PostViewerContent from "./PostViewerContent";

// 리렌더링 분산화를 위해 컴포넌트 분리

const PostWrapper = styled.div``;

const PostViewer = ({ post, contentType }) => {
    return (
        <PostWrapper>
            <PostViewerHeader post={post} contentType={contentType} />
            <PostViewerContent post={post} contentType={contentType} />
        </PostWrapper>
    );
};

export default PostViewer;
