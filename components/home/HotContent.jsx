import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import List from "../common/contents/List";
import { Skeleton } from "antd";

const HotContentWrapper = styled.div``;

const HotContent = ({ forumData }) => {
  return (
    <HotContentWrapper>
      <List data={forumData} type="forum"></List>
    </HotContentWrapper>
  );
};

export default HotContent;
