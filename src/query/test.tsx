import { useQuery } from "react-query";
import { apiTest } from "../lib/api/test"
import { testProps } from "../lib/props/test";

export const queryApiTest = async ({id, name}:testProps) => {
    await apiTest({id, name});
};