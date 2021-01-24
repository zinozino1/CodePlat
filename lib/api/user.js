import client from "./client";

export const register = ({
  useremail,
  confirmUseremail,
  password,
  confirmpassword,
  usernickname,
  userSkill,
  userGithub /*이미지*/,
}) =>
  client.post("/api/join", {
    useremail,
    confirmUseremail,
    password,
    confirmpassword,
    usernickname,
    userSkill,
    userGithub,
    //이미지
  });

export const login = ({ email, password }) =>
  client.post("/api/login", {
    email,
    password,
  });

export const socialLogin = (type) => client.get(`/api/auth/${type}`);

export const check = () => client.get("/api/auth/check");

export const logout = (id) => client.post(`/api/logout/${id}`);
