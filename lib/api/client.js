import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000"; // 서버 URL 정의
axios.defaults.withCredentials = true; // 클라에서 서버로 쿠키 전달

const client = axios.create();

export default client;
