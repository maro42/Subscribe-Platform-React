import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/common/Button';
import { reduxApiTest, changeField } from '../src/reducers/test';
//import { isLoading, error, data } from '../src/query/test';
import Loading from '../components/common/Loading';
import Pagination from '../components/common/Pagination';
import axios from 'axios';

const test = () => {

    const dispatch = useDispatch();
    const {id, name, result, testError, loading} = useSelector(({test, loading}) => ({
      id : test.id,
      name : test.name,
      result : test.result,
      testError : test.testError,
      loading : loading["test/TEST"],
    }));
  
    const onChange = (e:any) => {
      const {value, name} = e.target;
      dispatch(
          changeField({
              key : name,
              value
          })
      );
    };

    const apiTestFunc = () => {
        dispatch(reduxApiTest({id, name}));
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
            아이디 : <input name="id" onChange={onChange} value={id}/>
            이름 : <input name="name" onChange={onChange} value={name}/>
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

export default test;