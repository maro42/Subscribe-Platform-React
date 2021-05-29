import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfoForm from '../../components/store/mypage/InfoForm';
import ModifyForm from '../../components/store/mypage/ModifyForm';
import { getStoreinfo, setModifyYn } from '../../src/reducers/store/mypage';

const mypage = () => {

  // 내정보 조회하기
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStoreinfo());
    dispatch(setModifyYn('N'));
  }, [dispatch]);

  const {modifyYn} = useSelector(({storeMypageReducer}) => ({
    modifyYn : storeMypageReducer.modifyYn
  }));

  return (
    <>
    {modifyYn == 'Y' ? (<ModifyForm/>) : <InfoForm/>}
    </>
  );
};

// export async function getServerSideProps(ctx: any) {
//   return { props: { email: decodeURIComponent(ctx.query.email) } };
// }

export default mypage;