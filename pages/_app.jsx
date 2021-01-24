import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Head from "next/head";
import wrapper from "../store/configureStore";
import withReduxSaga from "next-redux-saga";
import { useDispatch } from "react-redux";
import { setUserRequestAction } from "../reducers/user";

const App = ({ Component }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // 렌더링중에 상태바뀌면 안되므로 useEffect
    // SSR때 바꿔줘야한다 지금은 임시로 localstorage사용 -> passport에서 넘겨주는 쿠키 사용해야함
    // try {
    //   const user = localStorage.getItem("user");
    //   if (!user) {
    //     dispatch(setUserRequestAction(null));
    //   } else {
    //     dispatch(setUserRequestAction(JSON.parse(user)));
    //   }
    // } catch (error) {
    //   dispatch(setUserRequestAction(null));
    //   console.log(error);
    // }
    dispatch(setUserRequestAction());
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>Home</title>
      </Head>
      <Component></Component>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(App));
