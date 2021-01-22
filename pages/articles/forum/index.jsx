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
import Router, { withRouter } from "next/router";

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

const Forum = ({ router }) => {
  const [radioValue, setRadioValue] = useState("latest");
  const [field, setField] = useState("free");

  const onChangeField = useCallback(
    (e) => {
      setField(e);
      if (radioValue) {
        Router.push(
          `/articles/forum?sortingField=${e}&sortingBy=${radioValue}`,
        );
      } else {
        Router.push(`/articles/forum?sortingField=${e}`);
      }
    },
    [radioValue],
  );

  const onClickRadio = useCallback((e) => {
    setRadioValue(e.target.value);
  }, []);

  const onClickSort = useCallback(
    (e) => {
      if (field) {
        Router.push(
          `/articles/forum?sortingField=${field}&sortingBy=${e.target.value}`,
        );
      } else {
        Router.push(`/articles/forum?sortingBy=${e.target.value}`);
      }
    },
    [field],
  );

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
    // 쿼리값에 따라 다르게 요청해야함.

    dispatch(loadPostsReqeustAction("forum"));
    return () => {
      dispatch(initializePostsAction());
    };
  }, [router]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ArticleLayout contentType="forum">
      <ForumFilterWrapper>
        <Select defaultValue="free" onChange={onChangeField}>
          <Select.Option value="free">자유</Select.Option>
          <Select.Option value="QnA">QnA</Select.Option>
        </Select>
        <Radio.Group onChange={onClickRadio} defaultValue="latest">
          <Radio.Button value="latest" onClick={onClickSort}>
            최신순
          </Radio.Button>
          <Radio.Button value="recommend" onClick={onClickSort}>
            추천순
          </Radio.Button>
          <Radio.Button value="comment" onClick={onClickSort}>
            댓글순
          </Radio.Button>
          <Radio.Button value="scrap" onClick={onClickSort}>
            스크랩순
          </Radio.Button>
          <Radio.Button value="view" onClick={onClickSort}>
            조회순
          </Radio.Button>
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

export default withRouter(Forum);
