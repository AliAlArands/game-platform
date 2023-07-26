import { Game } from "../Games";
import useData from "./useData"

const fetchGames = (id:number | undefined, platformId:number | undefined) => useData<Game>("games", id, platformId);
export default fetchGames;