import React from 'react'
import { ImageBox, ImageContainer } from './Thumbnail';
import { ProductMainContainer } from './Title';

type ServiceImageProps = {
    services? : any;
setServices? : any;

}

function ServiceImage({services,
    setServices,}:ServiceImageProps){
    return(
        <ProductMainContainer>
        <h1>상세 정보 이미지를 업로드해주세요 </h1>
        최대 5장까지 첨부 가능합니다 

        <input type='file' name = 'files'/>

        <ImageContainer>
            <ImageBox/>
            <ImageBox/>
            <ImageBox/>
            <ImageBox/>
            <ImageBox/>
        </ImageContainer>

    </ProductMainContainer>
    )
}

export default ServiceImage;