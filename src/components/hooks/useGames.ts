import { Game } from "../Games";
import useData from "./useData"

const fetchGames = (id?: number) => useData<Game>("games", id);
export default fetchGames;