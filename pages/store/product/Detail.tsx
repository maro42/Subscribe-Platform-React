import React from 'react'
import { ProductMainContainer } from './Title';

type DetailProps = {
    deliveryOption? : string;
setDeliveryOption? : any;

etc? : string;
setEtc? : any;

}

function Detail({
    deliveryOption,
setDeliveryOption,

etc,
setEtc,

} : DetailProps){
    return(
        <ProductMainContainer>
            <h1>상세 정보를 등록해주세요 </h1>
            그... 폰트 바꾸고 이런거.. 게시판같은걸로 바꾸기
            <textarea/> 
        </ProductMainContainer>
    )
}

export default Detail;