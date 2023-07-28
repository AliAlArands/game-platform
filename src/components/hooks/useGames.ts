import { Game } from "../Games";
import useData from "./useData"
import { GameQuery } from "../../App";

const fetchGames = (gameQuery: GameQuery) => useData<Game>("games", gameQuery.GenreId, gameQuery.Platform?.id, gameQuery.Sorting?.value);
export default fetchGames;