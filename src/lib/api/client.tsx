import axios from "axios";

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

        if (status === 403 || status === 401) {
            if (error.response.data.message !== 'login fail') {   // 단순 로그인 실패는 예외
                alert("로그인을 진행해주세요.");
            }

            // 인증실패, 토큰 만료 등 로그인 에러 시 jwt 토큰 삭제
            window.localStorage.removeItem('Authorization');
            return { "data": null };
        } else {
            return Promise.reject(error);
        }
    }
);

export default client;