import React from "react";
import { useQuery } from "react-query";
import { getWeeklyPopularity } from "../../src/lib/api/main";
import { Loading } from "../common";
import Error from "../common/Error";
import ServiceList from "../search/ServiceList";

function WeeklyPopularity() {

    const weeklyPopularity = useQuery("weeklyPopularity", () => getWeeklyPopularity(), {
        refetchOnWindowFocus: false
    })

    return (
        <div>
            <h2>이번주 인기 서비스</h2>
            {weeklyPopularity.isLoading && <Loading />}
            {weeklyPopularity.error ? <Error /> : (weeklyPopularity.data && weeklyPopularity.data !== undefined && weeklyPopularity.data.length !== 0 ? <ServiceList resultData={weeklyPopularity.data}></ServiceList> : <div>조회 결과가 없습니다.</div>)}
        </div>
    );
}

export default WeeklyPopularity;