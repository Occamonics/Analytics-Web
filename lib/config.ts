import * as process from "process";


import axios from "axios";

const {
    BACKEND_ENDPOINT
} = process.env;

const api = axios.create({
    baseURL : BACKEND_ENDPOINT ?? "http://localhost:4000",
});

export default api;
