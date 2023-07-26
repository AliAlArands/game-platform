import { useQuery } from "@tanstack/react-query";
import rawgApi from "../../apis/rawgApi";


const fetchData = <T>(data: string, id?:number, platformId?:number) => {
    return useQuery<T[], Error>({
        queryKey: [data, id, platformId],
        queryFn: () => rawgApi.get(`/${data}`, {params: {genres:id, platforms:platformId}}).then((res) => res.data.results),
    });
}

export default fetchData;