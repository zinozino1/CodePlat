import React, { useEffect, useCallback, useState } from "react";
import ArticleLayout from "../../../components/layout/ArticleLayout";
import { useDispatch, useSelector } from "react-redux";
import {
    loadPostsReqeustAction,
    initializePostsAction,
} from "../../../reducers/post";
import List from "../../../components/common/contents/List";
import { Spin, Radio, Select } from "antd";
import styled from "styled-components";

const SpinWrapper = styled.div`
    text-align: center;
    margin: 100px 0;
`;

const ForumFilterWrapper = styled.div`
    margin-bottom: 10px;
    .ant-radio-button-wrapper-checked {
        color: #888;
        text-decoration: underline;
        &:hover {
            color: #888;
        }
    }
    .ant-radio-button-wrapper {
        transition: none;
        &::before {
            display: none;
        }
        &:hover {
            text-decoration: underline;
        }
        background: transparent;
        color: #888;
        border: none;
        font-size: 12px;
        .ant-radio-button {
        }
        .ant-radio-button-checked {
            display: none;
        }
    }
`;

const Forum = () => {
    const [radioValue, setRadioValue] = useState("latest");
    const onClickRadio = useCallback((e) => {
        setRadioValue(e.target.value);
    }, []);

    const dispatch = useDispatch();
    const { forumPosts, loadPostsLoading } = useSelector((state) => state.post);

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight && !loadPostsLoading) {
            dispatch(loadPostsReqeustAction("forum"));
        }
    };

    useEffect(() => {
        dispatch(loadPostsReqeustAction("forum"));
        return () => {
            dispatch(initializePostsAction());
        };
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <ArticleLayout contentType="forum">
            <ForumFilterWrapper>
                <Select defaultValue="QnA">
                    <Select.Option value="QnA">QnA</Select.Option>
                    <Select.Option value="free">자유</Select.Option>
                </Select>
                <Radio.Group onChange={onClickRadio} defaultValue="latest">
                    <Radio.Button value="latest">최신순</Radio.Button>
                    <Radio.Button value="recommend">추천순</Radio.Button>
                    <Radio.Button value="comment">댓글순</Radio.Button>
                    <Radio.Button value="scrap">스크랩순</Radio.Button>
                    <Radio.Button value="view">조회순</Radio.Button>
                </Radio.Group>
            </ForumFilterWrapper>
            <List data={forumPosts} type="forum" />
            {loadPostsLoading && (
                <SpinWrapper>
                    <Spin tip="불러오는중..." />
                </SpinWrapper>
            )}
        </ArticleLayout>
    );
};

export default Forum;
