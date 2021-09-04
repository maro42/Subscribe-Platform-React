import React, { useState } from 'react';
import styled from 'styled-components';
import ImageUpload from './ImageUpload';
import { ProductMainContainer } from './Title';

type ThumbnailProps = {
  thumbNails?: string[];
  setTuhmbNails?: React.Dispatch<React.SetStateAction<string[]>>;
};

function Thumbnail({ thumbNails, setTuhmbNails }: ThumbnailProps) {
  return (
    <ProductMainContainer>
      <h1>외부에 노출할 이미지 (썸네일)을 등록해주세요 </h1>
      최대 5장까지 첨부 가능합니다
      {/* <input type='file' name = 'files'/> */}
      <ImageUpload image={thumbNails!} setImage={setTuhmbNails!} />
    </ProductMainContainer>
  );
}

export default Thumbnail;

export const ImageBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: #cfcfcf;
  margin: 5px;
`;

export const ImageContainer = styled.div`
  display: flex;
`;
