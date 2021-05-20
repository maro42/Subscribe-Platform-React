import React from 'react'
import styled from 'styled-components';


function Title(){
    return(
        
<ProductMainContainer>
        <h1>상품 타이틀을 입력해 주세요</h1>
        <input name = 'title' />
        <h1>상품 카테고리를 선택해 주세요</h1>
        <select><option>test1</option><option>test2</option></select>

</ProductMainContainer>

    )
}

export default Title;


export const ProductMainContainer = styled.div`
    width : 100%;
    height : 700px;
    background-color : #fff;
    display : flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`
