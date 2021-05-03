import client from './client';

type loginProps = {
    username : string;
    password : string;
};

// 회원가입 - 이메일 중복체크
export const checkEmailDupl = (email:String) => client.get('/user/checkEmailDupl',{
    params:{
        "email" : email
    }
});

// 회원가입
export const signUp = (userInfo:Object) => client.post('/user/sign-up', userInfo);