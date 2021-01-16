import React from "react";
import styled from "styled-components";
import PostViewerHeader from "./PostViewerHeader";
import PostViewerContent from "./PostViewerContent";

// 리렌더링 분산화를 위해 컴포넌트 분리

const PostWrapper = styled.div`
    margin-top: 30px;
`;

const FillingFooter = styled.div`
    background: #f0f2f6;
    height: 350px;
`;

const PostViewer = ({ post, contentType }) => {
    return (
        <PostWrapper>
            <PostViewerHeader post={post} contentType={contentType} />
            <PostViewerContent post={post} contentType={contentType} />
            <FillingFooter />
        </PostWrapper>
    );
};

export default PostViewer;
