import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Divider, Skeleton } from "antd";
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
    console.log("rerender");
    //dispatch(setUserRequestAction());
    return () => {
      dispatch(initializePostsAction());
    };
  }, []);

  useEffect(async () => {
    if (me) {
      await firebase.auth().signInWithEmailAndPassword(me.email, me.email);
      console.log("firebase 로그인 성공");
    }
    // firebase.auth().onAuthStateChanged((user) => {
    //   console.log("firebase 새로 생성된 사용자 : ", user);
    // });
    let user = await firebase.auth().currentUser;
    console.log("firebase 로그인된 user : ", user);
  }, [me]);

  return (
    <Layout>
      <Header />
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
            <Row>
              <Col xs={24} sm={24} md={24}>
                <Divider orientation="left">스터디</Divider>
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
                <Divider orientation="left">프로젝트</Divider>
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
    console.log("fuc");
    //console.log(context);
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
      //axios.defaults.withCredentials = true;
    }
    context.store.dispatch(setUserRequestAction());
    context.store.dispatch(mainLoadPostsReqeustAction());
    //context.store.dispatch(END);
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default index;
