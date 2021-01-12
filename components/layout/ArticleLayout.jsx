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

const ArticleWrapper = styled.div`
    margin: 0 auto;
    width: 900px;
    @media (max-width: 900px) {
        width: 100%;
    }
`;

const ArticleLayout = ({ children }) => {
    return (
        <Layout>
            <Header />
            <ContentWrapper>
                <SearchContentForm />
                {children !== "Forum" && <SkillFilterForm></SkillFilterForm>}
                <ArticleWrapper>{children}</ArticleWrapper>
            </ContentWrapper>
        </Layout>
    );
};

ArticleLayout.propTypes = {
    // children: PropTypes.node.isRequired,
};

export default ArticleLayout;
