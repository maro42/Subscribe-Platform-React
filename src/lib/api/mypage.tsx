import { PasswordInfo, UpdateMyinfo } from "../props/mypage";
import { cancelInfo, paymentResultParam, reqPayInfo } from "../props/subscribe";
import client from "./client";

export const getMyInfo = () => client.get("/user/customer").then(res => res.data);

export const updateMyInfo = (updateMyinfo: UpdateMyinfo) => client.patch('/user/customer', updateMyinfo);

export const udpatePasswordInfo = (updataPasswordInfo: PasswordInfo) => client.post('/user/password', updataPasswordInfo);

export const subscribes = () => client.get('/customer/subscribes').then(res => res.data);

export const cancelSubscribe = (cancelInfo: cancelInfo) => client.patch('/customer/subscribe/cancel', cancelInfo);

export const shoppinglist = () => client.get('/customer/shoppinglist').then(res => res.data);

export const subscribe = (subscribeInfo: reqPayInfo) => client.post('/customer/subscribe', subscribeInfo);

export const paymentResult = (reqPaymentResult: paymentResultParam) => client.get('/payment/payment-results', {
    params: reqPaymentResult
}).then(res => res.data);

export const removeShopping = (subscribeId: number) => client.delete('/customer/remove-shopping', {
    params: {"subscribeId":subscribeId}
});