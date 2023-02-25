import {apiKey, apiService} from "./apiService";
import {urls} from "../configs";

const moviesService = {
    getAll: (page = 1) => apiService.get(`${urls.movies}?api_key=${apiKey}&page=${page}`).then(value => value.data.results),
    getById: (id) => apiService.get(`${urls.movie}/${id}?api_key=${apiKey}`).then(value => value.data),
    getByGenreId: (id, page = 1) => apiService.get(`${urls.movies}?api_key=${apiKey}&page=${page}&with_genres=${id}`).then(value => value.data.results),
    getTrending: (page = 1) => apiService.get(`${urls.trending}?api_key=${apiKey}&page=${page}`).then(value => value.data.results),
    getSearch: (query, page = 1) => apiService.get(`${urls.search}?api_key=${apiKey}&language=en-US&query=${query}&page=${page}`).then(value => value.data.results)
}


export {
    moviesService
}
export const urlMovieImg = 'https://image.tmdb.org/t/p/w300/';

//https://api.themoviedb.org/3/discover/movie?api_key=e9a488e6ea1f2a8b453bb5067ca250ce
//https://api.themoviedb.org/3/discover/movie?api_key=e9a488e6ea1f2a8b453bb5067ca250ce&page=3&with_genres=28
//https://api.themoviedb.org/3/trending/movie/week?api_key=e9a488e6ea1f2a8b453bb5067ca250ce
//https://api.themoviedb.org/3/search/movie?api_key=e9a488e6ea1f2a8b453bb5067ca250ce&language=en-US&query=spider&page=1
//https://api.themoviedb.org/3/search/movie?api_key=e9a488e6ea1f2a8b453bb5067ca250ce&language=en-US&query=spider&page=1
