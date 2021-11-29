import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { RECENT_SERVICE } from "../../src/globalProperties";
import { getRecentService } from "../../src/lib/api/main";
import { Loading } from "../common";
import Error from "../common/Error";
import ServiceList from "../search/ServiceList";

function RecentService() {

    const [ids, setIds] = useState("");
    useEffect(() => {
        let recentItem = localStorage.getItem(RECENT_SERVICE);
        if(recentItem == null){
            setIds("");
        }else{
            let curr = JSON.parse(recentItem);
            for(var i=0; i<curr.length; i++){
                setIds(ids+","+curr[i]);
            }
        }
        
    },[])

    useEffect(() => {
        recent.refetch();
    },[ids])

    const recent = useQuery(["getRecent", ids], () => getRecentService(ids), {
        refetchOnWindowFocus: false
    });

    return (
        <div>
            <h2>최근 본 서비스</h2>
            {recent.isLoading && <Loading />}
            {recent.isError ? <Error /> : (recent.data && recent.data !== undefined && recent.data.length !== 0 ? <ServiceList resultData={recent.data}></ServiceList> : <div>조회 결과가 없습니다.</div>)}

        </div>
    );
}

export default RecentService;