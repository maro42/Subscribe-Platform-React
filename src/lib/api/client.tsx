import axios from "axios";
import { exceptionHandler } from "../../../exception/exceptionHandler";

const client = axios.create();

/** 글로벌 설정 */
// 1. API 기본 주소 설정
client.defaults.baseURL = '/api';

// 2. 요청 시 인터셉터 설정
client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("Authorization");

        // console.log("token>>",token);
        if (token) {
            config.headers.Authorization = token;

        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

// 3. 응답 결과 인터셉터 설정
client.interceptors.response.use(
    (response) => {
        // 요청 성공 시 특정 작업 수행
        return response;
    },
    (error) => {

        const status = error.response.status;
        const message = error.response.data.message;
        // 에러처리가 사실상 로그인밖에 없지만... access denied면 리덕스의 기존 데이터 다 null로 리턴
        const result = exceptionHandler({status,message})
        if(result !== null){
            return result;
        }

        return Promise.reject(error);
    }
);

export default client;