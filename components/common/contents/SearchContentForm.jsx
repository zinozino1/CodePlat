import React from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import Link from "next/link";

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

const SearchContentForm = ({ contentType }) => {
  return (
    <SearchContentFormWrapper>
      <Input.Search
        className="search-form"
        placeholder="검색"
        allowClear
        enterButton

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

export default SearchContentForm;
