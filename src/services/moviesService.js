import {apiService} from "./apiService";
import {authService} from "./authService";
import {urls} from "../configs";

const moviesService = {
    getAll: (page = 1) => apiService.get(`${urls.movies}?api_key=${authService}&page=${page}`).then(value => value.data.results),
    getById: (id) => apiService.get(`${urls.movie}/${id}?api_key=${authService}`).then(value => value.data),
    getByGenreId: (id, page = 1) => apiService.get(`${urls.movies}?api_key=${authService}&page=${page}&with_genres=${id}`).then(value => value.data.results),
    getTrending: (page = 1) => apiService.get(`${urls.trending}?api_key=${authService}&page=${page}`).then(value => value.data.results),
    getSearch: (query, page = 1) => apiService.get(`${urls.search}?api_key=${authService}&language=en-US&query=${query}&page=${page}`).then(value => value.data.results)
}


export {
    moviesService
}

export const urlMovieImg = 'https://image.tmdb.org/t/p/w300/';

