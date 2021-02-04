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

export const loadForumPosts = (data) =>
  client.post(`/api/post/getForum`, { ...data });

export const addComment = (data) =>
  client.post(`/api/comment/write`, { ...data });

export const deletePost = (postId) =>
  client.delete(`/api/post/${postId}/delete`);

export const deleteCommentWithChildren = (commentId) =>
  client.put(`/api/comment/${commentId}/parentDelete`);

export const deleteComment = (commentId) =>
  client.delete(`/api/comment/${commentId}/delete`);

export const upLike = (id) => client.get(`/api/like/${id}/upLike`);

export const unLike = (id) => client.get(`/api/like/${id}/unLike`);

// export const searchPosts = (data) =>
//   client.post(`/api/post/filter`, { ...data });

// export const filterSearch = (data) =>
//   client.post(`/api/post/filter`, { ...data });
