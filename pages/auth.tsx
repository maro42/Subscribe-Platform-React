import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/common/Button';
import * as API from '../src/reducers/auth';
//import { isLoading, error, data } from '../src/query/test';
import Loading from '../components/common/Loading';
import Pagination from '../components/common/Pagination';
import axios from 'axios';


const auth = () => {

    const dispatch = useDispatch();
    const {email,password, result, testError, loading,user} = useSelector(({test, loading}) => ({
        email : test.email,
        password : test.password,
      result : test.result,
      testError : test.testError,
      user : test.user,
      loading : loading["test/TEST"],
    }));

    const [testEmail, setTestEmail] = useState('');
    const [testPassword, setTestPassword] = useState('');

    const onCHangeEmail = (e:any) => {
      const {value, name} = e.target;
      setTestEmail(value);
    };

    const onCHangePassword = (e:any) => {
        const {value, name} = e.target;
        setTestPassword(value);
      };

    const apiTestFunc = () => {
        dispatch(API.reduxApiTest({
            email : testEmail,
            password : testPassword}));
    }

    const onClickUser = () => {
      
        dispatch(API.reduxGetUserId(1));
    }    


    return (
        <div>
            이메일 : <input name="eamil" onChange={onCHangeEmail} value={testEmail}/>
            비밀번호 : <input name="password" onChange={onCHangePassword} value={testPassword}/>
            <Button onClick = {apiTestFunc}>테스트</Button>
            
            <Button onClick = {onClickUser}>유저테스트</Button>

            {loading && <Loading/>}
            <div>결과 : {testError ? "에러가 발생했습니다." :((result === '' || result == null) ? '' : (result == 'N' ? '틀렸습니다.' : '맞습니다.'))}</div>
            <Pagination totCnt={13} searchFunc={apiTestFunc} index={3}/>
            <br/>
            {/* <div>============================================</div>
            <Button onClick = {reactQueryTest}>reactQuery테스트</Button>
            {queryloading ? (<div>로딩중.....</div>) : queryError ? (<div>에러가 발생했습니다.</div>) : (<div>{queryData}</div>)} */}
        </div>
    );
};

export default auth;