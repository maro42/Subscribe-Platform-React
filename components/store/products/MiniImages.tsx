import React, { useEffect } from 'react';
import styled from 'styled-components';

function MiniImages() {
  return (
    <>
      {' '}
      <MainImageContainer>
        <img src={'images/cancel.png'} />
      </MainImageContainer>
      <MiniImageContainer>
        <MiniImage>miniImage1</MiniImage>
        <MiniImage>miniImage2</MiniImage>
        <MiniImage>miniImage3</MiniImage>
        <MiniImage>miniImage4</MiniImage>
      </MiniImageContainer>
    </>
  );
}

export default MiniImages;

const MainImageContainer = styled.div`
  background-color: #cfcfcf;
  width: 70%;
  height: 400px;
`;

const MiniImageContainer = styled.div`
  width: 70%;
  height: 100px;
  background-color: #afafaf;
  display: flex;
`;

const MiniImage = styled.div`
  width: 50%;
  height: 20%;
  background-color: #afafaf;
`;
