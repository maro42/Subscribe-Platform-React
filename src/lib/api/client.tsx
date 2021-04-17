import axios from "axios";

const client = axios.create();

/** 글로벌 설정 */
// 1. API 기본 주소 설정
client.defaults.baseURL = '/api';

// 2. 헤더 설정(ex - jwt토큰)
// const token = localStorage.getItem("jwtToken");
// client.defaults.headers.common['X-AUTH-TOKEN'] = token;

// 3. 인터셉터 설정
axios.interceptors.response.use(
    response =>{
        // 요청 성공 시 특정 작업 수행
        return response;
    },
    error => {
        // 요청 실패 시 특정 작업 수행
        return Promise.reject(error);
    }
);

export default client;