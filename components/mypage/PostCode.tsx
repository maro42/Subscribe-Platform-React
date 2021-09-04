import { Button } from '@material-ui/core';
import React from 'react';
import DaumPostcode from 'react-daum-postcode';

function PostCode({callbackFunc, closeFunc}:any) {

    const handlePostCode = (data:any) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        // console.log(data)
        // console.log(fullAddress)
        // console.log(data.zonecode);
        callbackFunc(data.zonecode, fullAddress);
        closeFunc();
    }

    return (
        <div>
            <Button variant='outlined' onClick={closeFunc}>X</Button>
            <DaumPostcode onComplete={handlePostCode} />
        </div>
    )
}

export default PostCode;