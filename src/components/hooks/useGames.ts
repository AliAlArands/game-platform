import { Game } from "../Games";
import useData from "./useData"

const fetchGames = () => useData<Game>("games");
export default fetchGames;