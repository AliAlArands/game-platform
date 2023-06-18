import axios from "axios";
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "14244a6248b5434db8edbef5bba35de0",
    }
})