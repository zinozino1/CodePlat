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

export const mainLoadPosts = () => client.get(`/api/posts`);

export const writePost = (data) => {
  const config = {
    headers: {
      Accept: "application/json",
      enctype: "multipart/form-data",
    },
  };
  return client.post(`/api/posts`, data, config);
};

// export const editPost = (data) => client.put(`api/post/update`, { ...data });

export const loadPost = (postId) => client.get(`/api/posts/${postId}`);

export const loadPosts = (data) => {
  const filteredTechStack = data.techStack.map((v, i) => {
    if (v === "C++") {
      return "C%2B%2B";
    }
    if (v === "C#") {
      return "C%23";
    } else {
      return v;
    }
  });

  return client.get(
    `/api/posts/getPosts?type=${
      data.type
    }&techStack=${filteredTechStack.toString()}&skip=${data.skip}&term=${
      data.term
    }&location=${data.location}`,
  );
};

export const loadForumPosts = (data) =>
  client.get(
    `/api/posts/getForum?type=${data.type}&term=${data.term}&skip=${data.skip}&field=${data.field}`,
  );

export const addComment = (data) =>
  client.post(`/api/comment/write`, { ...data });

export const deletePost = (postId) =>
  client.delete(`/api/posts/${postId}/delete`);

export const deleteCommentWithChildren = (commentId) =>
  client.put(`/api/comment/${commentId}/parentDelete`);

export const deleteComment = (commentId) =>
  client.delete(`/api/comment/${commentId}/delete`);

export const upLike = (data) =>
  client.post(`/api/like/upLike`, {
    type: data.type,
    id: data.id,
  });

export const unLike = (data) =>
  client.delete(`/api/like/unLike`, {
    data: {
      type: data.type,
      id: data.id,
    },
  });

// export const searchPosts = (data) =>
//   client.post(`/api/post/filter`, { ...data });

// export const filterSearch = (data) =>
//   client.post(`/api/post/filter`, { ...data });
