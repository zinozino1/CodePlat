import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Divider, Skeleton, Carousel, Button } from "antd";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import MyProfile from "../components/home/MyProfile";
import ContentTemplate from "../components/home/ContentTemplate";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/common/contents/List";
import {
  mainLoadPostsReqeustAction,
  initializePostsAction,
} from "../reducers/post";
import { END } from "redux-saga";
import wrapper from "../store/configureStore";
import { setUserRequestAction, SET_USER_REQUEST } from "../reducers/user";
import axios from "axios";
import firebase from "../firebase";
import client from "../lib/api/client";

const Content = Layout.Content;

const ContentWrapper = styled(Content)`
  width: 1300px;
  margin: 100px auto;

  @media (max-width: 1368px) {
    & {
      width: 100%;
    }
  }
  @media (max-width: 950px) {
    & {
      margin: 125px auto;
    }
  }
`;

const ListWrapper = styled.div`
  padding: 20px;
`;

const MainLoadingSkeleton = styled(Skeleton)`
  margin-bottom: 10px;
`;

const MainInfoWrapper = styled.div`
  padding: 20px;
  width: 100%;
  height: 62vh;
  margin-bottom: 20px;
  position: relative;
  /* border: 1px solid black; */
  @media (max-width: 1368px) {
    .main-info-content {
      position: relative;
      width: 100%;
    }
    .main-info-back {
      display: none;
    }
  }
`;

const MainInfoContent = styled.div`
  padding: 20px;
  position: absolute;
  top: 50px;
  width: 340px;
  height: 400px;
  background: #fff;
  z-index: 2;
`;

const MainInfoBackground = styled.div`
  position: absolute;
  top: 90px;
  left: 60px;
  width: 340px;
  height: 400px;
  background: #16172a;
  z-index: 1;
`;

const index = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const {
    studyPosts,
    projectPosts,
    forumPosts,
    mainLoadPostsLoading,
  } = useSelector((state) => state.post);

  useEffect(() => {
    //dispatch(mainLoadPostsReqeustAction());
    //console.log("rerender");
    //dispatch(setUserRequestAction());
    return () => {
      dispatch(initializePostsAction());
    };
  }, []);

  useEffect(async () => {
    if (me) {
      await firebase.auth().signInWithEmailAndPassword(me.email, me.email);
      // console.log("firebase 로그인 성공");
    }
    // firebase.auth().onAuthStateChanged((user) => {
    //   console.log("firebase 새로 생성된 사용자 : ", user);
    // });
    let user = firebase.auth().currentUser;
    // console.log("firebase 로그인된 user : ", user);

    //firebaseSetUserRequestAction(user);
  }, [me]);

  return (
    <Layout>
      <Header />
      {/* <div style={{ border: "1px solid black", marginTop: "65px" }}>
        codeplat
        <img
          alt="background"
          src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*kJM2Q6uPXCAAAAAAAAAAAABkARQnAQ"
          style={{ width: "100%", height: "40vh" }}
        ></img>
      </div> */}
      <ContentWrapper>
        <Row>
          {me ? (
            <Col xs={24} sm={8} md={8}>
              <Row>
                <Col xs={24} sm={24} md={24}>
                  <MyProfile me={me} />
                </Col>
              </Row>
              <Row>
                <MainInfoWrapper>
                  <MainInfoContent className="main-info-content">
                    <span
                      style={{
                        fontSize: "24px",
                        fontWeight: "500",
                      }}
                    >
                      CodePlat
                    </span>
                    <p
                      style={{
                        color: "#999",
                        fontSize: "12px",
                        marginTop: "20px",
                      }}
                    >
                      "학생, 직장인, 프리랜서, 디자이너 등에게 프로젝트 혹은
                      스터디 및 커뮤니티 기능을 제공하는 서비스 플랫폼입니다."
                    </p>
                    {/* <div style={{ border: "1px solid black", height: "70%" }}>
                      <Button>시작하기</Button>
                    </div> */}
                  </MainInfoContent>
                  <MainInfoBackground className="main-info-back" />
                </MainInfoWrapper>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24}>
                  {mainLoadPostsLoading ? (
                    <ListWrapper>
                      {Array(8)
                        .fill(null)
                        .map((v, i) => (
                          <MainLoadingSkeleton active loading key={i} />
                        ))}
                    </ListWrapper>
                  ) : (
                    <ContentTemplate forumData={forumPosts} />
                  )}
                </Col>
              </Row>
            </Col>
          ) : (
            <Col xs={24} sm={8} md={8}>
              <Row>
                <MainInfoWrapper>
                  <MainInfoContent className="main-info-content">
                    <span
                      style={{
                        fontSize: "24px",
                        fontWeight: "500",
                      }}
                    >
                      CodePlat
                    </span>
                    <p
                      style={{
                        color: "#999",
                        fontSize: "12px",
                        marginTop: "20px",
                      }}
                    >
                      "학생, 직장인, 프리랜서, 디자이너 등에게 프로젝트 혹은
                      스터디 및 커뮤니티 기능을 제공하는 서비스 플랫폼입니다."
                    </p>
                    {/* <div style={{ border: "1px solid black", height: "70%" }}>
                      <Button>시작하기</Button>
                    </div> */}
                  </MainInfoContent>
                  <MainInfoBackground className="main-info-back" />
                </MainInfoWrapper>
              </Row>
              {mainLoadPostsLoading ? (
                <ListWrapper>
                  {Array(8)
                    .fill(null)
                    .map((v, i) => (
                      <MainLoadingSkeleton active loading key={i} />
                    ))}
                </ListWrapper>
              ) : (
                <ContentTemplate forumData={forumPosts} />
              )}
            </Col>
          )}

          <Col xs={24} sm={16} md={16}>
            {/* <Row>
              <div
                style={{
                  border: "1px solid black",
                  width: "100%",
                  marginTop: "20px",
                  height: "30vh",
                }}
              >
                1
              </div>
            </Row> */}
            <Row>
              <Col xs={24} sm={24} md={24}>
                {/* 스터디
                <Divider orientation="left">스터디</Divider> */}
                <div
                  style={{
                    padding: "20px",
                    paddingBottom: "0",
                  }}
                >
                  <div>
                    <span style={{ fontSize: "18px", fontWeight: "600" }}>
                      스터디
                    </span>
                  </div>
                  <div>
                    <span style={{ fontSize: "12px", color: "#999" }}>
                      스터디 모집, 참여 공간입니다. 관심있는 스터디에 지원하거나
                      팀원을 모집해보세요.
                    </span>
                  </div>
                </div>
                {mainLoadPostsLoading ? (
                  <ListWrapper>
                    {Array(5)
                      .fill(null)
                      .map((v, i) => (
                        <MainLoadingSkeleton active loading key={i} />
                      ))}
                  </ListWrapper>
                ) : (
                  <ListWrapper>
                    <List data={studyPosts} type="study"></List>
                  </ListWrapper>
                )}
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24}>
                <div
                  style={{
                    padding: "20px",
                    paddingBottom: "0",
                  }}
                >
                  <div>
                    <span style={{ fontSize: "18px", fontWeight: "600" }}>
                      프로젝트
                    </span>
                  </div>
                  <div>
                    <span style={{ fontSize: "12px", color: "#999" }}>
                      프로젝트 모집, 참여 공간입니다. 관심있는 프로젝트에
                      지원하거나 팀원을 모집해보세요.
                    </span>
                  </div>
                </div>
                {mainLoadPostsLoading ? (
                  <ListWrapper>
                    {Array(5)
                      .fill(null)
                      .map((v, i) => (
                        <MainLoadingSkeleton active loading key={i} />
                      ))}
                  </ListWrapper>
                ) : (
                  <ListWrapper>
                    <List data={projectPosts} type="project"></List>
                  </ListWrapper>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </ContentWrapper>
      <Footer />
    </Layout>
  );
};

// 프론트 서버에서 실행되는 코드
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    //console.log(context);

    const cookie = context.req ? context.req.headers.cookie : "";
    client.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      //console.log("fuckcookie", cookie);
      client.defaults.withCredentials = true;
      client.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch(setUserRequestAction());
    context.store.dispatch(mainLoadPostsReqeustAction());
    //context.store.dispatch(END);
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default index;
