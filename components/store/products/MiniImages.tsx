import { Button } from '@material-ui/core';
import ImageImage from 'material-ui/svg-icons/image/image';
import React, { useState } from 'react';
import styled from 'styled-components';

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
                <img
                  style={{ padding: '10px', width: '100%', height: '100px' }}
                  src={v}
                />
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
