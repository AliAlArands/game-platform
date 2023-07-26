import useData from "./useData"

interface Platform {
    id: number,
    name: string,
    slug: string
}

const fetchPlatforms = () => useData<Platform>("platforms/lists/parents")

export default fetchPlatforms;