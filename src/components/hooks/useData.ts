import { useQuery } from "@tanstack/react-query";
import rawgApi from "../../apis/rawgApi";


const fetchData = <T>(data: string, id?: number, platformId?: number, sorting?: string) => {
    console.log(sorting)
    return useQuery<T[], Error>({
        queryKey: [data, id, platformId, sorting],
        queryFn: () => rawgApi.get(`/${data}`, { params: { genres: id, platforms: platformId, ordering: sorting } }).then((res) => res.data.results),
    });
}

export default fetchData;