import { useQuery } from "@tanstack/react-query";
import rawgApi from "../../apis/rawgApi";


const fetchData = <T>(data: string, id?: number, platformId?: number, sorting?: string, SearchQuery?:string) => {
    return useQuery<T[], Error>({
        queryKey: [data, id, platformId, sorting, SearchQuery],
        queryFn: () => rawgApi.get(`/${data}`, { params: { genres: id, platforms: platformId, ordering: sorting, search: SearchQuery } }).then((res) => res.data.results),
    });
}

export default fetchData;