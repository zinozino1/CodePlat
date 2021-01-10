import React from "react";
import ListItem from "./ListItem";
import { Skeleton } from "antd";

const List = ({ data, type }) => {
    return (
        <>
            {data.map((v, i) => (
                <ListItem key={v.id} item={v} type={type}></ListItem>
            ))}
        </>
    );
};

export default List;
