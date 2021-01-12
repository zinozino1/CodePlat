import React from "react";
import { List, Avatar, Space, Tag, Popover, Skeleton } from "antd";
import {
    MessageOutlined,
    LikeOutlined,
    StarOutlined,
    EyeOutlined,
    CommentOutlined,
    UserOutlined,
    TagsOutlined,
} from "@ant-design/icons";
import styled, { css } from "styled-components";
import Link from "next/link";
import ProfileModal from "../../modal/ProfileModal";
import shortid from "shortid";

const ListItemWrapper = styled(List.Item)`
    background: #fff;
    padding: 10px 30px;
    margin-bottom: 10px;
    transition: 0.3s;
    ${(props) =>
        props.forumHome &&
        css`
            /* margin: 0; */
        `}
    .ant-list-item-action {
        margin-top: 5px;
        margin-left: 0;
    }
    .ant-list-item-meta-title {
        font-size: 18px;
    }
    &:hover {
        box-shadow: 0 3px 7px rgba(0, 0, 0, 0.21);
        transition: 0.3s;
    }
`;

const ListHeader = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-around;
    .tag-wrapper {
        flex: 1;
    }
    .user-date-wrapper {
        text-align: right;
        .user-nickname {
            margin-right: 10px;
        }
        .create-date {
            color: #888;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        .user-date-wrapper {
            margin-top: 10px;
        }
    }
`;

const userInfoWindow = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const ListItem = ({ item, type }) => {
    if (type == "study" || type == "project") {
        return (
            <Link href={`/articles/${type}/${item.id}`}>
                <a>
                    <ListItemWrapper
                        actions={[
                            <IconText
                                icon={EyeOutlined}
                                text={item.views}
                                key="list-vertical-eye-o"
                            />,
                            <IconText
                                icon={CommentOutlined}
                                text={item.comments.length}
                                key="list-vertical-comment-o"
                            />,
                        ]}
                    >
                        <ListHeader>
                            <div className="tag-wrapper">
                                {item.techStack.map((v, i) => (
                                    <Tag
                                        color="magenta"
                                        key={v + shortid.generate()}
                                    >
                                        {v}
                                    </Tag>
                                ))}
                                <Tag color="geekblue">{item.area}</Tag>
                                {item.isOnGoing ? (
                                    <Tag color="volcano">모집중</Tag>
                                ) : (
                                    <Tag color="green">모집완료</Tag>
                                )}
                            </div>
                            <div className="user-date-wrapper">
                                <Popover
                                    content={
                                        <div
                                            onClick={(e) => {
                                                e.stopPropagation();
                                            }}
                                        >
                                            <ProfileModal
                                                writer={item.writer}
                                            ></ProfileModal>
                                        </div>
                                    }
                                >
                                    <Avatar
                                        onClick={(e) => {
                                            e.stopPropagation();
                                        }}
                                        style={{ cursor: "pointer" }}
                                        size={24}
                                        icon={<UserOutlined />}
                                    />{" "}
                                </Popover>
                                <span className="user-nickname">
                                    {item.writer.nickname}
                                </span>
                                <span className="create-date">{`${item.createAt.getFullYear()}.${
                                    item.createAt.getMonth() + 1
                                }.${item.createAt.getDay()}`}</span>
                            </div>
                        </ListHeader>
                        <List.Item.Meta
                            //avatar={<Avatar src={item.avatar} />}
                            title={item.title}
                        />
                        {""}
                    </ListItemWrapper>
                </a>
            </Link>
        );
    } else {
        return (
            <Link href={`/articles/forum/${item.id}`}>
                <a>
                    <ListItemWrapper
                        actions={[
                            <IconText
                                icon={EyeOutlined}
                                text={item.views}
                                key="list-vertical-eye-o"
                            />,
                            <IconText
                                icon={MessageOutlined}
                                text={item.comments.length}
                                key="list-vertical-message"
                            />,
                            <IconText
                                icon={LikeOutlined}
                                text={item.likes}
                                key="list-vertical-like-o"
                            />,
                            <IconText
                                icon={TagsOutlined}
                                text={item.scraped}
                                key="list-vertical-scrap-o"
                            />,
                        ]}
                    >
                        <ListHeader>
                            <div className="tag-wrapper">
                                <Tag color="red" key={item}>
                                    {item.filter}
                                </Tag>
                            </div>
                            <div className="user-date-wrapper">
                                <Popover
                                    content={
                                        <div
                                            onClick={(e) => {
                                                e.stopPropagation();
                                            }}
                                        >
                                            <ProfileModal
                                                writer={item.writer}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                }}
                                            ></ProfileModal>
                                        </div>
                                    }
                                >
                                    <Avatar
                                        style={{ cursor: "pointer" }}
                                        size={24}
                                        icon={<UserOutlined />}
                                    />{" "}
                                </Popover>
                                <span className="user-nickname">
                                    {item.writer.nickname}
                                </span>
                                <span className="create-date">{`${item.createAt.getFullYear()}.${
                                    item.createAt.getMonth() + 1
                                }.${item.createAt.getDay()}`}</span>
                            </div>
                        </ListHeader>
                        <List.Item.Meta
                            //avatar={<Avatar src={item.avatar} />}
                            title={item.title}
                        />
                        {""}
                    </ListItemWrapper>
                </a>
            </Link>
        );
    }
};

export default ListItem;
