import React, { useState, useEffect, useCallback } from "react";
import { Card, Radio, Button, Pagination } from "antd";
import List from "../common/contents/List";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import shortid from "shortid";
import Link from "next/link";
import moment from "moment";

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

const MyCommentWrapper = styled.div`
  margin: 20px 0;
  padding-bottom: 5px;
  border-bottom: 1px solid #ddd;
`;

const MyActivityTemplate = () => {
  const { me } = useSelector((state) => state.user);
  const [currentType, setCurrentType] = useState("study");

  const onClickTypeBtn = useCallback((e) => {
    setContents(null);
    setPosts(null);
    setCurrentType(e.target.value);
  }, []);

  const [currTab, setCurrTab] = useState({
    key: "post",
    tab: "게시글",
  });

  const onTabChange = (key, type) => {
    setContents(null);
    setPosts(null);
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

  const [loading, setLoading] = useState(false);

  const [contents, setContents] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(async () => {
    if (me) {
      setLoading(true);

      console.log({ currentType, key: currTab.key });
      await axios
        .get(`/api/users/${me._id}?type=${currentType}&sort=${currTab.key}`)
        .then((res) => {
          //console.log(res.data);
          //console.log("activities : ", res.data.activities);
          setContents(res.data.activities);
          if (res.data.posts) {
            setPosts(res.data.posts);
          }
        })
        .catch((err) => {
          console.log(err);
        });

      setLoading(false);
    }
  }, [currentType, currTab, me]);

  // useEffect(() => {
  //   console.log("contents : ", contents);
  //   console.log("posts : ", posts);
  // }, [contents, posts]);

  if (!contents) return null;
  if (loading) return null;

  return (
    <MyActivityWrapper>
      <div className="activity_type">
        <Radio.Group onChange={onClickTypeBtn} defaultValue={currentType}>
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
          {currTab.key === "post" && (
            //   contents.map((v, i) => {
            //     return <div key={i}>{v.title}</div>;
            //   })
            <div
              style={{
                overflow: "auto",
                height: "59vh",
              }}
            >
              <List data={contents} type={currentType} />
              {/* <Pagination defaultCurrent={1} total={contents.length} /> */}
            </div>
          )}
          {currTab.key === "comments" && (
            <div
              style={{
                overflow: "auto",
                height: "59vh",
              }}
            >
              {contents.map((v, i) => {
                let flag = false;
                let post = null;

                posts.forEach((s, j) => {
                  if (v.postId === s._id) {
                    flag = true;
                    // postTitle = s.title;
                    post = s;
                  }
                });
                if (flag) {
                  return (
                    <MyCommentWrapper key={i}>
                      <div>
                        <span style={{ fontSize: "16px", fontWeight: "500" }}>
                          {v.content}
                        </span>
                      </div>
                      <div>
                        <Link href={`articles/${post.type}/${post._id}`}>
                          <a>{post.title}</a>
                        </Link>{" "}
                        글에 남긴 댓글
                      </div>
                      <div>
                        <span style={{ color: "#999", fontSize: "10px" }}>
                          {moment(v.createdAt).format("MM/DD HH:mm")}
                        </span>
                      </div>
                    </MyCommentWrapper>
                  );
                }
              })}
            </div>
          )}
          {currTab.key === "scraps" && (
            <div
              style={{
                overflow: "auto",
                height: "59vh",
              }}
            >
              <List data={posts} type={currentType} />
              {/* <Pagination defaultCurrent={1} total={contents.length} /> */}
            </div>
          )}
        </Card>
      </div>
    </MyActivityWrapper>
  );
};

export default MyActivityTemplate;
