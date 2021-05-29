import Router from "next/router";
import React from 'react';
import Button from '../../components/common/Button';

const index = () => {

    const goMypage = () => {
        Router.push({
            pathname: "/store/mypage",
            // query : {
            //   email : encodeURIComponent("이메일"),
            // }
          });
    }

    const goUpdateProduct = () => {
        Router.push({
            pathname: "/store/product",
            query : {
              email : encodeURIComponent("이메일"),
            }
          });
    }

    return (
        <div>
            판매자 메인페이지입니다.<Button onClick={goMypage}>내정보</Button>
            <Button onClick={goUpdateProduct}>상품 등록</Button>
        </div>
    );
};

export default index;