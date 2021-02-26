import React, { useState } from "react";
import styled from "styled-components";
import { Card } from "antd";
import HotContent from "./HotContent";
import ScrapContent from "./ScrapContent";
import { useSelector } from "react-redux";
import ScrapNeedLogin from "./ScrapNeedLogin";

const ContentTemplateWrapper = styled.div`
  padding: 20px;
  .ant-card-body {
    background: #f0f2f6;
    padding: 10px 0;
  }
  .ant-tabs-tab-btn {
    color: #16172b !important;
  }
  .ant-tabs-ink-bar {
    background: #999;
  }
`;

const ContentTemplate = ({ forumData }) => {
  const { me } = useSelector((state) => state.user);

  const [currTab, setCurrTab] = useState({
    key: "hot",
    tab: "커뮤니티 인기글",
  });
  const onChangeTap = (key, type) => {
    setCurrTab({ [type]: key });
  };

  return (
    <ContentTemplateWrapper>
      <Card
        style={{ width: "100%" }}
        tabList={[
          { key: "hot", tab: "포럼 인기글" },
          //{ key: "scrap", tab: "스크랩" },
        ]}
        activeTabKey={currTab.key}
        onTabChange={(key) => {
          onChangeTap(key, "key");
        }}
      >
        <HotContent forumData={forumData} />
        {/* {currTab.key == "hot" ? (
          <HotContent forumData={forumData} />
        ) : (
          <>{me ? <ScrapContent /> : <ScrapNeedLogin />}</>
        )} */}
      </Card>
    </ContentTemplateWrapper>
  );
};

export default ContentTemplate;
