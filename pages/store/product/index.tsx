import { Stepper } from '../../../components/common';
import React, { useState } from 'react'
import styled from 'styled-components';


function getStpes(){
    return ['상품 TItle 입력','옵션 등록','썸네일 등록','서비스 이미지 등록','상세 정보 등록'];
}


function Product(){

    return (
       
      <ProductContainer>
           <Stepper steps = {getStpes()}/>
            

      </ProductContainer>
    );
}

export default Product; 

const ProductContainer = styled.div`
    width :100vw;
    height : 100vh;
    background-color : #cfcfcf;
    display : flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`
const UpperContainer = styled.div`
background-color : #fff;
width : 1300px;
height : 500px;
margin: 10px;
display: flex;
`

const SideContainer = styled.div`
background-color : #fff;
width : 50%;
height : 100%;
padding:10px
`