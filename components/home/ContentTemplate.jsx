import React, { useState } from "react";
import styled from "styled-components";
import { Card } from "antd";
import HotContent from "./HotContent";
import ScrapContent from "./ScrapContent";

const ContentTemplateWrapper = styled.div`
    padding: 20px;
`;

const ContentTemplate = () => {
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
                //title="Card title"
                tabList={[
                    { key: "hot", tab: "커뮤니티 인기글" },
                    { key: "scrap", tab: "스크랩" },
                ]}
                activeTabKey={currTab.key}
                onTabChange={(key) => {
                    onChangeTap(key, "key");
                }}
            >
                {
                    currTab.key == "hot" ? <HotContent /> : <ScrapContent />
                    /* {contentList[this.state.key]} */
                }
            </Card>
        </ContentTemplateWrapper>
    );
};

export default ContentTemplate;
