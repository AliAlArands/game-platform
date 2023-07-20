import { useQuery } from "@tanstack/react-query";
import rawgApi from "../../apis/rawgApi";



const fetchData = <T>(data: string) => {
    return useQuery<T[], Error>({
        queryKey: [data],
        queryFn: () => rawgApi.get(`/${data}`).then((res) => res.data.results),
    });
}

export default fetchData;