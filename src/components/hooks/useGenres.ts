import useData from "./useData"

interface Genre {
    id: number;
    name: string;
}

const fetchGenres = () => useData<Genre>("genres")

export default fetchGenres;