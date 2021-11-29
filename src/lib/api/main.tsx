import client from "./client";

export const getRecentService = (ids:string) =>
client.get("/services/recent", {params : {"ids": ids}})
.then(res => res.data);

export const getWeeklyPopularity = () => 
client.get("/services/weekly-popularity")
.then(res => res.data);