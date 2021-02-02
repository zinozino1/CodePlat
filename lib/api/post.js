// 예시

import client from "./client";
// import qs from "qs";

// export const writePost = ({ title, body, tags }) =>
//   client.post("/api/posts", { title, body, tags });

// export const getPost = (id) => client.get(`/api/posts/${id}`);

// export const getPosts = ({ page, username, tag }) => {
//   const query = qs.stringify({ page, username, tag });
//   return client.get(`/api/posts?${query}`);
// };

export const mainLoadPosts = () => client.get(`/api/post/getPosts`);

export const writePost = (data) => client.post(`/api/post/write`, { ...data });

export const loadPost = (postId) => client.get(`/api/post/${postId}/getDetail`);

export const loadPosts = (data) =>
  client.post(`/api/post/getPosts`, { ...data });

// export const searchPosts = (data) =>
//   client.post(`/api/post/filter`, { ...data });

// export const filterSearch = (data) =>
//   client.post(`/api/post/filter`, { ...data });
