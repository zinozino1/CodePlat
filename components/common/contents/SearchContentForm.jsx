import React from "react";
import styled from "styled-components";
import { Input, Button } from "antd";

const SearchContentFormWrapper = styled.div`
    margin: 20px auto;
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

const SearchContentForm = () => {
    return (
        <SearchContentFormWrapper>
            <Input.Search
                className="search-form"
                placeholder="검색"
                allowClear
                enterButton

                //onSearch={onSearch}
            />
            <Button>글쓰기</Button>
        </SearchContentFormWrapper>
    );
};

export default SearchContentForm;
