import { Button, TextField } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { paymentResult } from "../../src/lib/api/mypage";
import { resPaymentResult } from "../../src/lib/props/subscribe";
import { Loading } from "../common";
import CustomDateRangePicker from "../common/CustomDateRangePicker";
import EmptyResult from "../common/EmptyResult";
import Error from "../common/Error";


function PaymentHistory() {

    // getHistory = {data, isError, isLoading, refetch} 등등 reactquery 결과 객체
    const getHistory = useQuery('paymentResult', () => paymentResult(searchParam), {
        refetchOnWindowFocus: false,
    })

    // 검색 함수
    const searchFunc = () => {
        getHistory.refetch();
    }

    const today = new Date();
    const [searchParam, setSerchParam] = useState({
        startDate: today.getFullYear() + '' + ('0' + (today.getMonth() + 1)).slice(-2) + '' + ('0' + today.getDate()).slice(-2),
        endDate: today.getFullYear() + '' + ('0' + (today.getMonth() + 1)).slice(-2) + '' + ('0' + today.getDate()).slice(-2),
        serviceName: ''
    });

    // 조회조건 변경 함수
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSerchParam({
            ...searchParam,
            [e.target.name]: e.target.value
        })
    }

    // 날짜 변경 함수
    const changeDate = (sDate: string, eDate: string) => {
        setSerchParam({
            ...searchParam,
            startDate: sDate,
            endDate: eDate
        })
    }

    return (
        <>
            <div>
                <div>검색조건</div>
                <CustomDateRangePicker setDateFunc={changeDate} />
                <div>서비스명 <TextField name='serviceName' value={searchParam.serviceName} onChange={handleChange} /></div>
                <Button onClick={searchFunc}>검색</Button>
            </div>
            {getHistory.isLoading && <Loading />}
            {getHistory.isError && <Error />}
            {getHistory.data && getHistory.data !== undefined && getHistory.data.totCnt !== 0 ? (
                <div style={{ marginTop: '1%' }}>
                    <table>
                        <colgroup>
                            <col width='30%' />
                            <col width='70%' />
                        </colgroup>
                        <tbody>
                            {getHistory.data.content.map((item: resPaymentResult, i: number) => (
                                <>
                                    <tr>
                                        <th>구독서비스명</th>
                                        <td>{item.serviceNames[0] + (item.serviceNames.length > 1 ? ' 외 ' + (item.serviceNames.length - 1) : '')}</td>
                                    </tr>
                                    <tr>
                                        <th>카드정보</th>
                                        <td>{item.creditCardCompany} / {item.paidCardNo}</td>
                                    </tr>
                                    <tr>
                                        <th>결제금액</th>
                                        <td>{item.payPrice}</td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (<EmptyResult />)}
        </>
    )
}

export default PaymentHistory;