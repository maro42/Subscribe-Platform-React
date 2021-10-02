import { PasswordInfo, UpdateMyinfo } from "../props/mypage";
import { cancelInfo } from "../props/subscribe";
import client from "./client";

export const getMyInfo = () => client.get("/user/customer/");

export const updateMyInfo = (updateMyinfo:UpdateMyinfo) => client.patch('/user/customer',updateMyinfo);

export const udpatePasswordInfo = (updataPasswordInfo:PasswordInfo) => client.post('/user/password', updataPasswordInfo);

export const subscribes = () => client.get('/customer/subscribes').then(res => res.data);

export const cancelSubscribe = (cancelInfo : cancelInfo) => client.patch('/customer/subscribe/cancel', cancelInfo);