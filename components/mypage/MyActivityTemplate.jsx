import React, { useState, useEffect, useCallback } from "react";
import { Card, Radio, Button } from "antd";
import List from "../common/contents/List";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

const MyActivityWrapper = styled.div`
  display: flex;
  .activity_type {
    flex: 1;
    /* // border: 1px solid black; */
    padding: 20px;
    .ant-radio-group {
      .ant-radio-button-wrapper {
        width: 300px;
        text-align: center;
      }
      @media (max-width: 768px) {
      }
    }
  }
  .myActivity {
    flex: 3;
    /* // border: 1px solid black; */
    padding: 20px;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

const MyActivityTemplate = () => {
  const { me } = useSelector((state) => state.user);
  const [currentType, setCurrentType] = useState("study");
  const onClickTypeBtn = useCallback((e) => {
    setCurrentType(e.target.value);
  }, []);

  const [currTab, setCurrTab] = useState({
    key: "post",
    tab: "게시글",
  });

  const onTabChange = (key, type) => {
    setCurrTab({ [type]: key });
  };

  const tabListTitle = [
    {
      key: "post",
      tab: "게시글",
    },
    {
      key: "comments",
      tab: "댓글",
    },
    {
      key: "scraps",
      tab: "스크랩",
    },
  ];

  const [contents, setContents] = useState(null);

  useEffect(() => {
    if (me) {
      console.log({ currentType, key: currTab.key });
      axios
        .get(`/api/users/${me._id}?type=${currentType}&sort=${currTab.key}`)
        .then((res) => {
          console.log(res.data.posts);
          console.log(res.data.activities);
          setContents(res.data.activities);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currentType, currTab, me]);

  if (!contents) return null;

  return (
    <MyActivityWrapper>
      <div className="activity_type">
        <Radio.Group onChange={onClickTypeBtn} defaultValue="study">
          <div>
            <Radio.Button value="study" onChange={onClickTypeBtn}>
              스터디
            </Radio.Button>
          </div>
          <div>
            <Radio.Button value="project" onChange={onClickTypeBtn}>
              프로젝트
            </Radio.Button>
          </div>
          <div>
            <Radio.Button value="forum" onChange={onClickTypeBtn}>
              포럼
            </Radio.Button>
          </div>
        </Radio.Group>
        {/* <Button value = "study" onClick= {onClickBtn} block>스터디</Button>
          <Button value = "project" onClick = {onClickBtn} block>프로젝트</Button>
          <Button value = "forum"  onClick = {onClickBtn} block>커뮤니티</Button> */}
      </div>
      <div className="myActivity">
        <Card
          style={{ width: "100%" }}
          tabList={tabListTitle}
          activeTabKey={currTab.key}
          onTabChange={(key) => {
            onTabChange(key, "key");
          }}
        >
          {currTab.key === "post" &&
            contents.map((v, i) => {
              return <div key={i}>{v._id}</div>;
            })}
          {currTab.key === "comments" &&
            contents.map((v, i) => {
              return <div key={i}>{v.content}</div>;
            })}
          {currTab.key === "scraps" &&
            contents.map((v, i) => {
              return <div key={i}>{v._id}</div>;
            })}
        </Card>
      </div>
    </MyActivityWrapper>
  );
};

export default MyActivityTemplate;
