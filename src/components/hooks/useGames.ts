import { Game } from "../Games";
import useData from "./useData"

const fetchGames = (id: number | undefined, platformId: number | undefined, sorting: string | undefined) => useData<Game>("games", id, platformId, sorting);
export default fetchGames;