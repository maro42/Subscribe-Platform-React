import { Button, Checkbox, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { shoppinglist, subscribe } from '../../src/lib/api/mypage';
import { shoppingInfo } from '../../src/lib/props/subscribe';
import { Loading } from '../common';
import EmptyResult from '../common/EmptyResult';
import Error from '../common/Error';

function Shopping() {

    // 장바구니정보 불러오기
    const { data, isError, isLoading } = useQuery('shoppinglist', shoppinglist, {
        refetchOnWindowFocus: false
    });

    // 결제정보
    const [cardInfo, setCardInfo] = useState({
        creditCardCompany: '',
        cardNo: ''
    })
    const handleCardInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardInfo({
            ...cardInfo,
            [e.target.name]: e.target.value
        })
    }

    // 체크된 리스트아이디 관리
    const [checkedItem, setCheckedItem] = useState(new Set<number>());

    // 결제 총 가격
    const [totPrice, setTotPrice] = useState(0);

    // 체크박스 선택 이벤트
    const handleCheckbox = (e: any) => {

        const isChecked = e.target.checked;
        let price = 0;

        // 선택된 서비스의 옵션 가격 총 합
        data.content.map((item: shoppingInfo, i: number) => {
            if (item.subscribeId == e.target.value) {
                item.options.map((option, i) => {
                    price += (option.price * option.quantity);
                })
            }
        })

        if (isChecked) {  // 선택됐으면
            checkedItem.add(e.target.value);
            setCheckedItem(checkedItem);

            setTotPrice(totPrice + price);
        } else {
            checkedItem.delete(e.target.value);
            setCheckedItem(checkedItem);

            setTotPrice(totPrice - price);
        }
    }

    // 결제하기(구록하기) 함수
    const doSubscribe = () => {

        // validation 체크
        if (checkedItem.size == 0) {
            alert('결제할 서비스를 선택해주세요.');
            return false;
        }
        if (cardInfo.creditCardCompany === '' || cardInfo.creditCardCompany === null) {
            alert('카드사를 입력해주세요.');
            return false;
        }
        if (cardInfo.cardNo === '' || cardInfo.cardNo === null) {
            alert('카드번호를 입력해주세요.');
            return false;
        }

        if (window.confirm("결제하시겠습니까?")) {
            let subscribeId:[number] = [];
            checkedItem.forEach(id => {
                subscribeId.push(id*1);
            })

            subscribe({
                subscribeIds: subscribeId,
                creditCardCompany: cardInfo.creditCardCompany,
                cardNo: cardInfo.cardNo
            })
            .then(res => {
                alert("결제되었습니다.");
                window.location.replace('/mypage?currtab=subscribe');
            }).catch(err => {
                alert("오류가 발생했습니다.");
                console.log(err);
            })
        }
    }

    return (
        <div>
            {isLoading && <Loading />}
            {isError && <Error />}
            {data !== undefined && data && data.totCnt !== 0 ? (
                <>
                    <table style={{ width: '80%' }}>
                        <colgroup>
                            <col width='10%' />
                            <col width='40%' />
                            <col width='50%' />
                        </colgroup>
                        <tbody>
                            {data.content.map(
                                (item: shoppingInfo, i: number) => (
                                    <tr>
                                        <td>
                                            <Checkbox name='shoppingCheck' value={item.subscribeId} onClick={handleCheckbox} />
                                        </td>
                                        <td><img style={{ width: '300px', height: '180px' }} src={item.serviceImage} /></td>
                                        <td>
                                            <p>{item.serviceName}</p>
                                            <div>
                                                <p>선택옵션 / 가격 / 수량</p>
                                                {item.options.map(
                                                    (option, i) => (
                                                        <><span>{option.optionName}</span> / <span>{option.price}</span>원 / <span>{option.quantity}</span>개 <br /></>
                                                    )
                                                )}
                                                <p>배송주기 : <span>{item.deliveryCycle}</span></p>
                                                <p>배송요일/날짜 : <span>{item.deliveryDay}</span></p>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                    <hr />
                    <hr />
                    <h4>결제정보</h4>
                    <div style={{ float: 'right'}}>
                        카드사 : <TextField name='creditCardCompany' value={cardInfo.creditCardCompany} onChange={handleCardInfo} />
                        카드번호 : <TextField name='cardNo' value={cardInfo.cardNo} onChange={handleCardInfo} /> <br />
                    </div>
                    <br/>
                    <br/>
                    <div style={{ float: 'right'}}>
                        총 결제 금액 <span>{totPrice}</span>원 &nbsp;&nbsp; <Button variant='outlined' onClick={doSubscribe}>결제하기</Button>
                    </div>
                </>
            ) : <EmptyResult />}
        </div>
    )
}

export default Shopping;