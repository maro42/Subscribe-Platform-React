import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components';
import { Button, Dialog,CustomTable } from '../../../components/common';
import useInputState from '../../../components/customHook/useInputState';
import { TableHeader } from '../../../src/lib/props';
import OptaionTable from './OptaionTable';
import { ProductMainContainer } from './Title';


type OptionDialogType = {
    open : boolean;
    setOpen :  React.Dispatch<React.SetStateAction<boolean>>
}

function OptionDialog({open, setOpen}:OptionDialogType){

    const [options, setOptions] = useState<{[key:string] : string}[]>([]);

    const [optionTitle, handleOptionTitle, setOptionTitle] = useInputState('');
    const [price, handlePrice, setPrice] = useInputState('');
    const [stock,handleStock, setStock] = useInputState('');
    const [maxCount, handleMaxCount, setMaxCount] = useInputState('');
    
    const heendleAddOptions = useCallback(()=>{

       options.push({
        optionTitle : optionTitle,
        price : price,
        stock : stock,
        maxCount : maxCount
       })

       setOptions(options);
       

    },[options, setOptions, optionTitle, price, stock, maxCount])


    const handleClose = (e:any) =>{
        setOpen(false);
    }

    const Test = useMemo(()=>{
        return (
            <OptaionTable options ={options}/>
        )
    },[options])
    
 return <Dialog open={open} onClose={handleClose} title ='서비스 등록'>
     
     <Container>
         <div style = {{display:'flex',flexDirection: 'column'}}>
         상품명 <input title='상품명' onChange={handleOptionTitle} value={optionTitle}/> 
        가격 <input title="가격" onChange = {handlePrice} value={price}/>
        재고 <input title="재고" onChange = {handleStock} value={stock}/>
        최대 주문가능 수량 <input title="최대주문가능수량" onChange = {handleMaxCount} value={maxCount}/>
        <Button onClick={heendleAddOptions}>추가</Button>
         </div>
    
        추가 리스트 - 테이블로 변경
       {Test}
        
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