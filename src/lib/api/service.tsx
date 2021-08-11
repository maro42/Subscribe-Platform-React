import { BasicParam, SearchByCategoryId, SearchByServiceName } from "../props/service";
import client from "./client";

export const getServicesByServiceName = (searchServiceListParam: SearchByServiceName) => client.get('/service/getSearchServiceList', {
    params: {
        'serviceName': searchServiceListParam.serviceName,
        'pageNum': searchServiceListParam.pageNum,
        'size': searchServiceListParam.size
    },
}).then((response) => response.data)

export const getServicesByCategoryId = (param: SearchByCategoryId) => client.get('/service/getServiceListByCategory/' + param.categoryId, {
    params: {
        'pageNum': param.pageNum,
        'size': param.size
    }
}).then((response) => response.data)

export const getNewServices = (param:BasicParam) => client.get('/service/getNewSErviceList',{
    params : {
        'pageNum': param.pageNum,
        'size': param.size
    }
}).then((response) => response.data)