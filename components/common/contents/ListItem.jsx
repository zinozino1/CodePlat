import React from "react";
import { List, Avatar, Space, Tag, Popover, Skeleton, Image } from "antd";
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
import { SERVER_URL } from "../../../lib/constant/constant";

const ListItemWrapper = styled(List.Item)`
  background: #fff;
  padding: 10px 30px;
  margin-bottom: 10px;
  transition: 0.3s;

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

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ListItem = ({ item, type }) => {
  if (type == "study" || type == "project") {
    return (
      <Link
        href={
          item.writer ? `/articles/${type}/${item._id}` : `/articles/${type}`
        }
      >
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
                  <Tag color="magenta" key={v + shortid.generate()}>
                    {v}
                  </Tag>
                ))}
                <Tag color="geekblue">{item.location}</Tag>
                {item.isOngoing ? (
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
                      {item.writer && (
                        <ProfileModal writer={item.writer}></ProfileModal>
                      )}
                    </div>
                  }
                >
                  <Avatar
                    onClick={(e) => {
                      e.preventDefault();
                      //console.log("아바타 클릭했음");
                    }}
                    style={{ cursor: "pointer" }}
                    size={24}
                    icon={<UserOutlined />}
                    width={100}
                    src={
                      item.writer && (
                        <Image src={`${SERVER_URL}/${item.writer.avatarUrl}`} />
                      )
                    }
                  />{" "}
                </Popover>
                <span className="user-nickname">
                  {item.writer ? item.writer.nickname : "탈퇴한 회원"}
                </span>
                <span className="create-date">{`${new Date(
                  item.createdAt,
                ).getFullYear()}.${
                  new Date(item.createdAt).getMonth() + 1
                }.${new Date(item.createdAt).getDate()}`}</span>
                {/* <span className="create-time">
                  {`${new Date(item.createdAt).getHours()}:${new Date(
                    item.createdAt,
                  ).getMinutes()}:${new Date(item.createdAt).getSeconds()}`}
                </span> */}
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
      <Link
        href={item.writer ? `/articles/forum/${item._id}` : "/articles/forum"}
      >
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
                text={item.likes.length}
                key="list-vertical-like-o"
              />,
              <IconText
                icon={TagsOutlined}
                text={item.scraps.length}
                key="list-vertical-scrap-o"
              />,
            ]}
          >
            <ListHeader>
              <div className="tag-wrapper">
                <Tag color="red" key={item}>
                  {item.field}
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
                      {item.writer && (
                        <ProfileModal writer={item.writer}></ProfileModal>
                      )}
                    </div>
                  }
                >
                  <Avatar
                    onClick={(e) => {
                      e.preventDefault();
                      //console.log("아바타 클릭했음");
                    }}
                    style={{ cursor: "pointer" }}
                    width={100}
                    size={24}
                    icon={<UserOutlined />}
                    src={
                      item.writer && (
                        <Image src={`${SERVER_URL}/${item.writer.avatarUrl}`} />
                      )
                    }
                  />{" "}
                </Popover>
                <span className="user-nickname">
                  {item.writer ? item.writer.nickname : "탈퇴한 회원"}
                </span>
                <span className="create-date">{`${new Date(
                  item.createAt,
                ).getFullYear()}.${
                  new Date(item.createAt).getMonth() + 1
                }.${new Date(item.createAt).getDate()}`}</span>
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
