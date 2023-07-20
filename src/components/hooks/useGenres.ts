import { useQuery } from "@tanstack/react-query";
import rawgApi from "../../apis/rawgApi";

interface Genre {
    id: number;
    name: string;
}

const fetchGenres = () => {
    return useQuery<Genre[], Error>({
        queryKey: ["genres"],
        queryFn: () => rawgApi.get("/genres").then((res) => res.data.results),
    });
}

export default fetchGenres;