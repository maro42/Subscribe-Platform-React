import React, { useCallback, useMemo, useState } from 'react'
import { Button, CustomToggleButton } from '../../../components/common';
import { ProductMainContainer } from './Title';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import OptionDialog from './OptionDialog';

const ButtonGroups = [

    {
        children : <p>주단위</p>,
        value : 'week',
    },
    {
        children : <p>월단위</p>,
        value : 'month',
    }

]


type OptionsProps = {
    cycle? : string;
    setCycle? : any;
    deliveryDate? : string;
    setDeliveryDate? : any;
    options? : any;
    setOptions? : any;
    maxCount? : number;
    maxConut? : any;
    

}

function Options({
    cycle,
    setCycle,
    deliveryDate,
    setDeliveryDate,
    options,
    setOptions,
    maxCount,
    maxConut,
}:OptionsProps){

    const [open, setOpen] = useState(false);

    const handleAlignment = useCallback((event: React.MouseEvent<HTMLElement>, value: string ) => {
        setCycle(value);
      },[setCycle]);

      const test = useMemo(()=>{
        if(cycle === 'week'){
            return (
                <p>week </p>
            )
        }else{
            return (<p>MONTH </p>)
        }
      },[cycle])

    return(
        <ProductMainContainer>
            <h1>상품 배송 주기를 선택해 주세요</h1>
            <div>
                <CustomToggleButton  value={cycle} values = {ButtonGroups} onChange={handleAlignment}/>
            </div>

            <h1>배송 가능 날짜를 선택해 주세요</h1>
            {/* <div>월화수목금토일 체크박스로 선택하면 그것만 선택할 수 있도록..?</div>
            <div>아님 매월 1일, 15일 이런식.. 할 수있또록.. </div> */}
            {test}
            <h1>상품 옵션을 등록해 주세요</h1>
            가격도 같이 등록 상품 옵션 + 가격 다이얼로그
            <Button onClick={()=>setOpen(true)}><AddCircleIcon fontSize='large' /></Button>

            <h1>최대 주문 가능 수량을 입력해 주세요</h1>
            <input name='orderCount'/>
            <OptionDialog open={open} setOpen={setOpen}/>        
        </ProductMainContainer>

    )
}

export default Options;