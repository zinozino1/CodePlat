import React from "react";
import ListItem from "./ListItem";
import shortId from "shortid";

const List = ({ data, type }) => {
    return (
        <>
            {data.map((v, i) => (
                <ListItem
                    key={v.id + shortId.generate()}
                    item={v}
                    type={type}
                ></ListItem>
            ))}
        </>
    );
};

export default List;
