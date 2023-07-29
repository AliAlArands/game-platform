import { Game } from "../Games";
import useData from "./useData"
import { GameQuery } from "../../App";

const fetchGames = (gameQuery: GameQuery) =>
    useData<Game>("games", gameQuery.Genre?.id,
        gameQuery.Platform?.id,
        gameQuery.Sorting?.value,
        gameQuery.SearchQuery);
export default fetchGames;