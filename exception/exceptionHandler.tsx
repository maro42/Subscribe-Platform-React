type exceptionParam = {
    status: number,
    message: string
}

export const exceptionHandler = ({status, message}:exceptionParam) => {
    if (status === 403 || status === 401) {
        // if (message !== 'login fail') {   // 단순 로그인 실패는 예외
        //     alert("로그인을 진행해주세요.");
        // }

        // 인증실패, 토큰 만료 등 로그인 에러 시 jwt 토큰 삭제
        window.localStorage.removeItem('Authorization');
        window.location.replace('/');
        return { "data": null };
    } else {
        return null;
    }
}