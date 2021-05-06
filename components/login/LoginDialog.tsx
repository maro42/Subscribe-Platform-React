import { DialogContent, DialogTitle } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Button, Dialog} from '../common'
import * as API from '../../src/reducers/auth';

type LoginDialogType = {
    open : boolean;
    setOpen :  React.Dispatch<React.SetStateAction<boolean>>
}

export default function LoginDialog({
open,
setOpen
}:LoginDialogType){
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (e:any) => {
        const {value, name} = e.target;
        setEmail(value);
      };
  
      const onCHangePassword = (e:any) => {
          const {value, name} = e.target;
          setPassword(value);
        };
  
        const handleClose = (e:any) =>{
            setOpen(false);
        }

        const dispatch = useDispatch();
        const onClickLogin = () => {
            dispatch(API.reduxApiTest({
                email : email,
                password : password}));
        }

    return(
        <Dialog open = {open} onClose={handleClose} >
            <DialogTitle >
                로그인
            </DialogTitle>
            <DialogContent>
                <input name="eamil" onChange={onChangeEmail} value={email}/>
                <input name="password" onChange={onCHangePassword} value={password}/>
                <Button onClick ={onClickLogin} >로그인</Button>
            </DialogContent>
               
        </Dialog>
    )

}