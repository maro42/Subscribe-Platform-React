import axios from "axios";

const client = axios.create();

/** 글로벌 설정 */
// 1. API 기본 주소 설정
client.defaults.baseURL = '/api';


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

// jwt토큰 헤더 설정
axios.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem("jwtToken");
        if(token){
            client.defaults.headers.common['Authorization'] = token;
        }
        return request;
    },
    (error) => {
        Promise.reject(error);
    }
);

export default client;