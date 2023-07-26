import useData from "./useData"

interface Platform {
    id: number,
    name: string,
}

const fetchPlatforms = () => useData<Platform>("platforms")

export default fetchPlatforms;