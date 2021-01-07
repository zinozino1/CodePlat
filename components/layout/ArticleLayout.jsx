import React from "react";
import { Layout } from "antd";
import Header from "../common/Header";
import styled from "styled-components";
import SkillFilterForm from "../common/contents/SkillFilterForm";
import SearchContentForm from "../common/contents/SearchContentForm";

const Content = Layout.Content;

const ContentWrapper = styled(Content)`
    /* background: #fff; */
    width: 1300px;
    margin: 0 auto;
    margin-top: 65px;
    @media (max-width: 1368px) {
        & {
            width: 100%;
        }
    }
`;

const ArticleLayout = ({ children }) => {
    return (
        <Layout>
            <Header />
            <ContentWrapper>
                <SearchContentForm />
                {children !== "Community" && (
                    <SkillFilterForm></SkillFilterForm>
                )}
                {children}
            </ContentWrapper>
        </Layout>
    );
};

ArticleLayout.propTypes = {
    // children: PropTypes.node.isRequired,
};

export default ArticleLayout;
