import axios from "axios";

import {baseURL} from "../constants";

let apiService = axios.create({baseURL});

apiService.interceptors.request.use(config => {

    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmZmODhiOTBkOWFkMzAwZmYzMjgyZWFkYjBhN2QzMCIsInN1YiI6IjYyOTViODg5ZjhlOTgyMDA5YWNjMjI4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5FhImEu6xb2V0rpAG4FeatusNYHBYveAkaQUXZ7Eq0'

    return config;
})

export {
    apiService,
}