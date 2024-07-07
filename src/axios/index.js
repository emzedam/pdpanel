import axios from "axios";

const HTTP = axios.create({
    baseURL: `https://hamiapi.petoman.com/api`,
})



export default HTTP;