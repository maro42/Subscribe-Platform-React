import React, { useState } from 'react';
import styled from 'styled-components';

type ImageUploadProps = {
  image?: any[];
  setImage?: any;
};

function ImageUpload({ image, setImage }: ImageUploadProps) {
  const handleImageUpload = (e: any) => {
    const fileArr = e.target.files;

    let fileURLs: any[] = [];

    let file;
    let filesLength = fileArr.length > 5 ? 5 : fileArr.length;

    for (let i = 0; i < filesLength; i++) {
      file = fileArr[i];

      let reader = new FileReader();
      reader.onload = () => {
        fileURLs[i] = reader.result;
        setImage([...fileURLs]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div>
        <input
          type="file"
          id="thumbNailFile"
          name="thumbNailFile"
          multiple
          accept="image/jpg,image/png,image/jpeg,image/gif"
          onChange={handleImageUpload}
        />
      </div>
      <ImageContainer>
        {image!.map((v, index) => {
          return (
            <ImageBox key={index}>
              <img
                src={v}
                style={{
                  backgroundColor: '#efefef',
                  width: '100%',
                  height: '100%',
                }}
              />
            </ImageBox>
          );
        })}
      </ImageContainer>
    </>
  );
}

export default ImageUpload;

export const ImageBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: #cfcfcf;
  margin: 5px;
`;

export const ImageContainer = styled.div`
  display: flex;
`;