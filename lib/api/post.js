// 예시

import client from "./client";
import qs from "qs";

export const writePost = ({ title, body, tags }) =>
  client.post("/api/posts", { title, body, tags });

export const getPost = (id) => client.get(`/api/posts/${id}`);

export const getPosts = ({ page, username, tag }) => {
  const query = qs.stringify({ page, username, tag });
  return client.get(`/api/posts?${query}`);
};
