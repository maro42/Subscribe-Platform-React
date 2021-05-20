import React from 'react'
import styled from 'styled-components';
import { Button, Dialog } from '../../../components/common';
import { ProductMainContainer } from './Title';

type OptionDialogType = {
    open : boolean;
    setOpen :  React.Dispatch<React.SetStateAction<boolean>>
}

function OptionDialog({open, setOpen}:OptionDialogType){

    const handleClose = (e:any) =>{
        setOpen(false);
    }

 return <Dialog open={open} onClose={handleClose} title ='서비스 등록'>
     
     <Container>
         <div>
         상품명 <input title='상품명'/> 
        가격 <input title="가격"/>
        <Button>추가</Button>
         </div>
    

        추가 리스트 - 테이블로 변경
        <AddListContainer></AddListContainer>
        
        <Button>완료</Button>

     </Container>

 </Dialog>;   
}

export default OptionDialog;

const AddListContainer = styled.div`
    width : 100%;
    height :  100%;
    padding : 10px;
    background-color : #cfcfcf;

`

 const Container = styled.div`
    width : 100%;
    height : 300px;
    background-color : #fff;
    display : flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`