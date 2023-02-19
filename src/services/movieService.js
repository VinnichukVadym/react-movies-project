import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService = {
    getAll: (page = 1) => apiService.get(urls.movies, {params: {page}}),
    getById: (id) => apiService.get(urls.movieById(id)),
    getGenre: () => apiService.get(urls.genre),
    search: (query, page = 1) => apiService.get(urls.search,
        {params: {query, page}}),
    popular: (page = 1) => apiService.get(urls.popular, {params: {page}}),
    sortGenre: (id, page = 1) => apiService.get(`${urls.movies}`, {params: {page, with_genres: id}}),

}

export {
    movieService,
}