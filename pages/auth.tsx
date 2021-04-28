import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/common/Button';
import { reduxApiTest } from '../src/reducers/auth';
//import { isLoading, error, data } from '../src/query/test';
import Loading from '../components/common/Loading';
import Pagination from '../components/common/Pagination';
import axios from 'axios';


const auth = () => {

    const dispatch = useDispatch();
    const {email,password, result, testError, loading} = useSelector(({test, loading}) => ({
        email : test.email,
        password : test.password,
      result : test.result,
      testError : test.testError,
      loading : loading["test/TEST"],
    }));
  
    const onChange = (e:any) => {
      const {value, name} = e.target;
    };

    const apiTestFunc = () => {
        dispatch(reduxApiTest({email, password}));
    }


    const [queryloading, setQueryLoading] = useState(false);
    const [queryError, setQueryError] = useState(null);
    const [queryData, setQueryData] = useState(null);

    // const reactQueryTest = () => {

    //     const {isLoading, error, data} = useQuery('reactQueryTest', () => axios('http://swapi.dev/api/people/1/'));
    //     setQueryLoading(isLoading);
    //     setQueryError(error);
    //     setQueryData(data);
    // }


    return (
        <div>
            이메일 : <input name="eamil" onChange={onChange} value={email}/>
            비밀번호 : <input name="password" onChange={onChange} value={password}/>
            <Button onClick = {apiTestFunc}>테스트</Button>
            
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