import { DialogContent, DialogTitle, Link } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dialog } from '../common'
import * as API from '../../src/reducers/auth';
import useInputState from '../customHook/useInputState';
import { useEffect } from 'react';
import { useCallback } from 'react';

type LoginDialogType = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LoginDialog({
    open,
    setOpen
}: LoginDialogType) {

    const [email, handleEmailChange] = useInputState('');
    const [password, handlePasswordChange] = useInputState('');

    const handleClose = (e: any) => {
        setOpen(false);
    }

    const { loginYn } = useSelector(({ loginReducer }: any) => ({
        loginYn: loginReducer.loginYn,
    }))

    const dispatch = useDispatch();
    const onClickLogin = () => {
        dispatch(API.reduxLogin({
            email: email,
            password: password
        }));
    }

    useEffect(() => {
        if(loginYn === 'Y'){
            setOpen(false);
        }
    },[loginYn]);

    const onClickTest = () => {
        dispatch(API.reduxGetUserId(1));
    }


    return (
        <Dialog open={open} onClose={handleClose} title={"로그인"} >
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'grid', margin: '5px' }}>
                    <input name="eamil" onChange={handleEmailChange} value={email} style={{ marginBottom: "3px" }} placeholder={'이메일'} />
                    <input type='password' name="password" onChange={handlePasswordChange} value={password} style={{ marginTop: "3px" }} placeholder={'비밀번호'} />
                </div>
                <Button onClick={onClickLogin} >로그인</Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button onClick={onClickTest}>아이디 찾기</Button>

                <Link>비밀번호 찾기</Link>
            </div>
        </Dialog>
    )

}