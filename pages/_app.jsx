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
    dispatch(setUserRequestAction());
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>Logo</title>
      </Head>
      <Component></Component>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(App));
