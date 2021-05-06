import { login } from "../props/auth";
import client from "./client";

// api연동 테스트(삭제할 것)
export const getLoginToken = ({email, password}:login) => client.post('/auth/login',
    
{
        'email' : email,
        'password' : password
    }
);

export const getUserId = ({id}:any) =>{
    client.get('/user/'+id)
}