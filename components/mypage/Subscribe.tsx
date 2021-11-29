import { Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { subscribes } from "../../src/lib/api/mypage";
import { mySubscribeListItem } from "../../src/lib/props/subscribe";
import { Loading } from "../common";
import ComModal from "../common/ComModal";
import EmptyResult from "../common/EmptyResult";
import Error from "../common/Error";
import CancelSubscribePopup from "./CancelSubscribePopup";
import WriteReviewPopup from "./WriteReviewPopup";

// todo : 디폴트 이미지 처리
function Subscribe(changeTab:any) {

    // 구독 취소 팝업
    const [cancelPopup, setCancelPopup] = useState(false);
    // 구독 취소 아이디
    const [cancelSubsId, setCancelSubsId] = useState(0);
    // 구독 취소 팝업 관리함수
    const cancelPopupFunc = (subscribeId:number) => {
        setCancelSubsId(subscribeId);
        setCancelPopup(!cancelPopup);
    }

    // 구독정보 불러오기
    const subscribeInfo = useQuery('subscribes', subscribes, {
        refetchOnWindowFocus: false,
    });

    // 후기작성 팝업
    const [writeReviewPopup, setWriteReviewPopup] = useState(false);
    // 후기작성할 구독 아이디
    const [reviewSubsId, setReviewSubsId] = useState(0);
    // 후기작성 팝업 관리함수
    const writeReviewPopupFunc = (subscribeId:number) => {
        setReviewSubsId(subscribeId);
        setWriteReviewPopup(!writeReviewPopup);
    }

    return (
        <div>
            {subscribeInfo.isLoading && <Loading />}
            {subscribeInfo.isError && <Error/>}
            {subscribeInfo.data !== undefined && subscribeInfo.data && subscribeInfo.data.totCnt !== 0 ? (
                <table>
                    <colgroup>
                        <col width='35%' />
                        <col width='45%' />
                        <col width='20%' />
                    </colgroup>
                    <tbody>
                        {subscribeInfo.data.content.map(
                            (item: mySubscribeListItem, i: number) => (
                                <tr>
                                    <td><img style={{ width: '300px', height: '180px' }} src={item.serviceImage} /></td>
                                    <td>
                                        <div>{item.serviceName}</div>
                                        <div>
                                            <p>구독 시작일 : <span>{item.subscribeStartDate}</span>(<span>{item.subscribePeriod}</span>일째 구독 중입니다.)</p>
                                            
                                            <p>선택옵션 / 가격 / 수량</p>
                                            {item.options.map(
                                                (option, i) => (
                                                    <><span>{option.optionName}</span> / <span>{option.price}</span>원 / <span>{option.quantity}</span>개 <br /></>
                                                )
                                            )}
                                            <p>결제 횟수 : <span>{item.paidCount}</span>회</p>
                                            <p>다음 결제예정일 : <span>{item.nextPayDate}</span></p>
                                        </div>
                                    </td>
                                    <td>
                                        <Button variant="outlined" onClick={() => cancelPopupFunc(item.subscribeId)}>구독취소</Button>
                                        <Button variant="outlined" onClick={() => writeReviewPopupFunc(item.subscribeId)}>후기작성</Button>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            ) : <EmptyResult />}
            <ComModal open={cancelPopup} closeFunc={cancelPopupFunc} contents={<CancelSubscribePopup closeFunc={cancelPopupFunc} subscribeId={cancelSubsId} />} />
            <ComModal open={writeReviewPopup} closeFunc={writeReviewPopupFunc} contents={<WriteReviewPopup closeFunc={writeReviewPopupFunc} subscribeId={reviewSubsId} />} />
        </div>
    )
}

export default Subscribe;