import useData from "./useData"

interface Genre {
    id: number; 
    name: string;
    image_background: string;
    description: string;
}

const fetchGenres = () => useData<Genre>("genres")

export default fetchGenres;