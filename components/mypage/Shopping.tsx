import { Button, Checkbox } from '@material-ui/core';
import React from 'react';

function Shopping(){
    return(
        <div>
        <table style={{width:'80%'}}>
            <colgroup>
                <col width='10%' />
                <col width='40%' />
                <col width='50%' />
            </colgroup>
            <tbody>
                <tr>
                    <td><Checkbox name='shoppingCheck'/></td>
                    <td><img style={{ width: '300px', height: '180px' }} src='/images/cancel.png' /></td>
                    <td>
                        <p>민주네 견과류</p>
                        <div>
                            <p>선택옵션 / 가격 : <span>호두</span> / <span>2000</span>원</p>
                            <p>배송주기 : <span>1주</span></p>
                            <p>배송요일/날짜 : <span>화</span></p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div style={{float:'right', marginRight:'5%'}}>
            총 결제 금액 <span>13,000</span>원 &nbsp;&nbsp; <Button variant='outlined'>결제하기</Button>
        </div>
        </div>
    )
}

export default Shopping;