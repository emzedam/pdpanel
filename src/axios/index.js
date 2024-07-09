import axios from "axios";

const HTTP = axios.create({
    baseURL: `https://apiblog.petoman.com/api`,
})



export default HTTP;