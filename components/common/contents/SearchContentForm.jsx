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
  .search-form {
    width: 400px;
    margin-right: 10px;
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
          <Button>글쓰기</Button>
        </a>
      </Link>
    </SearchContentFormWrapper>
  );
};

export default withRouter(SearchContentForm);
