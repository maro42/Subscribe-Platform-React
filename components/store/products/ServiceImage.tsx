import React from 'react';
import { IMAGE_PATH } from '../../../src/globalProperties';
import { serviceImages } from '../../../src/lib/props/service';

function ServiceImage({values}:{values: Array<serviceImages>}) {
  
  return (
    <>
    {values.map((image, i) => (
      <img src={IMAGE_PATH+image.imageUrl}/>
    ))}
    </>
  );
}

export default ServiceImage;
