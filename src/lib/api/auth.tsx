import { login } from "../props/auth";
import client from "./client";

export const getLoginToken = ({email, password}:login) => client.post('/auth/login', 
{
        'email' : email,
        'password' : password
    }
);

export const getUserId = ({id}:any) =>{
    client.get('/user/'+id)
}