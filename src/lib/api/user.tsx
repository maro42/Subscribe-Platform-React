import client from './client';

type loginProps = {
    username : string;
    password : string;
};

// 로그인
export const login = ({username, password}:loginProps) => client.post('/login.do',{username, password});