import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Head from "next/head";
import wrapper from "../store/configureStore";
import withReduxSaga from "next-redux-saga";
import { useDispatch, useSelector } from "react-redux";
import { setUserRequestAction } from "../reducers/user";
import { END } from "redux-saga";
import axios from "axios";
import firebase from "../firebase";

const App = ({ Component }) => {
  const dispatch = useDispatch();

  const { me } = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(setUserRequestAction());
  // }, []);

  // useEffect(async () => {
  //   if (me) {
  //     await firebase.auth().signInWithEmailAndPassword(me.email, me.email);
  //     console.log("firebase 로그인 성공");
  //   }
  //   // firebase.auth().onAuthStateChanged((user) => {
  //   //   console.log("firebase 새로 생성된 사용자 : ", user);
  //   // });
  //   let user = await firebase.auth().currentUser;
  //   console.log("firebase 로그인된 user : ", user);
  // }, [me]);

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>

        <title>CodePlat</title>
        {/* <link rel="shortcut icon" href="/public/favicon.ico" /> */}
      </Head>
      <Component></Component>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   async (context) => {
//     const cookie = context.req ? context.req.headers.cookie : "";
//     axios.defaults.headers.Cookie = "";
//     if (context.req && cookie) {
//       axios.defaults.headers.Cookie = cookie;
//     }
//     context.store.dispatch(setUserRequestAction());
//     context.store.dispatch(END);
//     await context.store.sagaTask.toPromise();
//   },
// );

export default wrapper.withRedux(withReduxSaga(App));
