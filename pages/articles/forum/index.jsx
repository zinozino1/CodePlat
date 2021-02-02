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
import Head from "next/head";

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

let skip = 0;

const Forum = ({ router }) => {
  console.log("skip : ", skip);
  const [radioValue, setRadioValue] = useState("latest");
  const [field, setField] = useState("free");

  const [tmp, setTmp] = useState(0);

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
  const { temporalPostsLength } = useSelector((state) => state.post);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && !loadPostsLoading) {
      console.log(temporalPostsLength);
      if (temporalPostsLength >= 10) {
        dispatch(loadPostsReqeustAction({ type: "forum", skip }));
        skip += 10;
      }
    }
  };
  // console.log(temporalPostsLength);
  // console.log(forumPosts);
  // if (temporalPostsLength >= 10) {
  //   console.log("Asdfasf");
  // }
  useEffect(() => {
    console.log(temporalPostsLength);
  }, [temporalPostsLength]);

  useEffect(() => {
    // 쿼리값에 따라 다르게 요청해야함.
    // {
    //   contentType:"forum",
    //   query:"asdf"
    // }

    dispatch(loadPostsReqeustAction({ type: "forum", skip }));
    skip += 10;

    return () => {
      dispatch(initializePostsAction());
    };
  }, [router]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [temporalPostsLength]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(1);
  //     setTmp(tmp + 1);
  //   }, 1000);
  // }, [tmp]);

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>포럼</title>
      </Head>
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
    </>
  );
};

export default withRouter(Forum);
