import React, { useState, useEffect, useCallback } from "react";
import { Card, Radio, Button } from "antd";
import List from "../common/contents/List";
import styled from "styled-components";

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
  const [currentBtn, setCurrentBtn] = useState("study");
  const onClickBtn = useCallback((e) => {
    setCurrentBtn(e.target.value);
    console.log(e.target.value);
  }, []);

  const [currTab, setCurrTab] = useState({
    key: "scrap",
    tab: "스크랩",
  });

  const onTabChange = (key, type) => {
    console.log(key, type);
    setCurrTab({ [type]: key });
  };

  const tabListTitle = [
    {
      key: "scrap",
      tab: "스크랩",
    },
    {
      key: "post",
      tab: "게시글",
    },
    {
      key: "comment",
      tab: "댓글",
    },
  ];
  const contentListTitle = {
    scrap: <p>{currentBtn}스크랩</p>, //<List data ={} type ={currentBtn}></List>
    post: <p>{currentBtn}게시글</p>, //<List data ={} type ={currentBtn}></List>
    comment: <p>{currentBtn}댓글</p>, //<List data ={} type ={currentBtn}></List>
  };

  return (
    <MyActivityWrapper>
      <div className="activity_type">
        <Radio.Group onChange={onClickBtn} defaultValue="study">
          <div>
            <Radio.Button value="study" onChange={onClickBtn}>
              스터디
            </Radio.Button>
          </div>
          <div>
            <Radio.Button value="project" onChange={onClickBtn}>
              프로젝트
            </Radio.Button>
          </div>
          <div>
            <Radio.Button value="forum" onChange={onClickBtn}>
              커뮤니티
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
          {contentListTitle[currTab.key]}
        </Card>
      </div>
    </MyActivityWrapper>
  );
};

export default MyActivityTemplate;
