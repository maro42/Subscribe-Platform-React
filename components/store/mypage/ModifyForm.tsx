import { TextField } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeForm, setModifyYn } from '../../../src/reducers/store/mypage';
import { Button } from '../../common';
import { updateStoreinfo } from '../../../src/lib/api/store/mypage';
import { corporationNumberCheck, emptyCheck } from '../../../src/lib/validationCheck';

function ModifyForm() {
  const { storeinfo } = useSelector(({ storeMypageReducer }) => ({
    storeinfo: storeMypageReducer.storeinfo,
  }));

  const dispatch = useDispatch();
  const changeStoreinfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeForm({ key: name, value }));
  };

  // 폼 수정
  const modifyStoreinfo = () => {

    if (!validation()) {
      return false;
    }

    if (window.confirm('수정하시겠습니까?')) {
      updateStoreinfo(storeinfo.store)
        .then((res) => {
          alert('수정되었습니다.');
          dispatch(setModifyYn('N'));
        })
        .catch((e) => {
          alert('오류가 발생했습니다. 다시 시도해주세요.');
          console.log(e);
        });
    }
  };

  // 유효성 체크
  const validation = () => {
    if (!emptyCheck(storeinfo.store.storeName)) {
      alert("상호명을 입력해주세요.");
      return false;
    }

    // 사업자번호 유효성 체크
    if (!corporationNumberCheck(storeinfo.store.businessNum)) {
      alert("올바른 사업자번호를 입력해주세요.");
      return false;
    }

    return true;
  }


  return (
    <>
      <label>회사명</label> :
      <TextField
        label="회사명"
        name="storeName"
        onChange={changeStoreinfo}
        value={storeinfo.store.storeName}
      />
      <br />
      <label>대표자명</label> : <label>{storeinfo.name}</label>
      <br />
      <label>사업자번호</label> :
      <TextField
        label="사업자번호"
        name="businessNum"
        onChange={changeStoreinfo}
        value={storeinfo.store.businessNum}
      />
      <br />
      <label>이메일</label> : <label>{storeinfo.email}</label>
      <br />
      <Button onClick={modifyStoreinfo}>수정</Button>
    </>
  );
}

export default ModifyForm;
