import axios from "axios";
import { useQuery } from "react-query";
import { apiTest } from "../lib/api/test"
import { testProps } from "../lib/props/test";

//export const {isLoading, error, data} = useQuery('reactQueryTest', () => axios('http://swapi.dev/api/people/1/'));