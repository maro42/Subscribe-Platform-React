import { testProps } from "../props/test";
import client from "./client";

// api연동 테스트(삭제할 것)
export const apiTest = ({id, name}:testProps) => client.get('/test/apiTest.do',{
    params:{
        'id' : id,
        'name' : name
    }
});