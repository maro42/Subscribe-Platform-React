import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const imageURLs = [
  'images/cancel.png',
  'images/logo.png',
  'images/cancel.png',
  'images/logo.png',
];

function MiniImages() {
  const [mainImage, setMainImage] = useState(imageURLs[0]);

  const handleClickMiniImage = (id: number) => {
    setMainImage(imageURLs[id]);
  };

  return (
    <>
      {' '}
      <MainImageContainer>
        <img
          style={{ padding: '10px', width: '100%', height: '100%' }}
          src={mainImage}
        />
      </MainImageContainer>
      <MiniImageContainer>
        {imageURLs.map((v, i) => {
          return (
            <MiniImage>
              <Button onClick={() => handleClickMiniImage(i)}>
                <Image src="/dist/test.jpg" width={500} height={500} />
              </Button>
            </MiniImage>
          );
        })}
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
  width: 25%;
  height: 100px;
  background-color: #afafaf;
`;
