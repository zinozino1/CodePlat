import React, { useCallback } from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import Link from "next/link";
import useInput from "../../../hooks/useInput";
import Router, { withRouter } from "next/router";

const SearchContentFormWrapper = styled.div`
  margin: 30px auto;
  width: 900px;
  display: flex;
  justify-content: flex-end;
  .write-btn {
    background: #fff;
    color: #313355;
    border: 1px solid #313355;
  }
  .search-form {
    width: 400px;
    margin-right: 10px;

    .ant-input-affix-wrapper {
      &:hover {
        border: 1px solid #ddd;
      }
    }

    .ant-input-affix-wrapper-focused {
      border-color: #fff;
      box-shadow: none;
      border: 1px solid #ddd;
    }

    .ant-input-search-button {
      background: #313355;
      color: #fff;
      border: 1px solid #313355;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const SearchContentForm = ({ contentType, router }) => {
  const [content, onChangeContent] = useInput("");

  const onSubmit = useCallback(
    // post 조작해야함.
    (value) => {
      if (value === "") {
        Router.push(`${router.route}`);
      } else {
        Router.push(`${router.route}/?term=${value}`);
      }
    },
    [router.route, content],
  );

  return (
    <SearchContentFormWrapper>
      <Input.Search
        className="search-form"
        placeholder="검색"
        allowClear
        enterButton
        onChange={onChangeContent}
        onSearch={onSubmit}

        //onSearch={onSearch}
      />
      <Link href={`/articles/${contentType}/write`}>
        <a>
          <Button type="primary" className="write-btn">
            글쓰기
          </Button>
        </a>
      </Link>
    </SearchContentFormWrapper>
  );
};

export default withRouter(SearchContentForm);
