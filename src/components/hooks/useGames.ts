import { useQuery } from "@tanstack/react-query";
import { Game } from "../Games";
import rawgApi from "./../../apis/rawgApi";


const fetchGames = () => {
    return useQuery<Game[], Error>({
        queryKey: ["games"],
        queryFn: () => rawgApi.get("/games").then((res) => res.data.results),
      });
}

export default fetchGames;