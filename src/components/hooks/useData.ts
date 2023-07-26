import { useQuery } from "@tanstack/react-query";
import rawgApi from "../../apis/rawgApi";



const fetchData = <T>(data: string, id?:number) => {
    return useQuery<T[], Error>({
        queryKey: [data, id],
        queryFn: () => rawgApi.get(`/${data}`, {params: {genres:id}}).then((res) => res.data.results),
    });
}

export default fetchData;