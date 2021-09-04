import { PasswordInfo, UpdateMyinfo } from "../props/mypage";
import client from "./client";

export const getMyInfo = () => client.get("/user/customer/");

export const updateMyInfo = (updateMyinfo:UpdateMyinfo) => client.patch('/user/customer',updateMyinfo);

export const udpatePasswordInfo = (updataPasswordInfo:PasswordInfo) => client.post('/user/password', updataPasswordInfo);