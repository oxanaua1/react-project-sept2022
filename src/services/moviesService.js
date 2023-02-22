import {apiKey, apiService} from "./apiService";
import {urls} from "../configs";

const moviesService = {
    getAll: (page) => apiService.get(`${urls.movies}?api_key=${apiKey}&page=${page}`).then(value => value.data.results),
    getById: (id) => apiService.get(`${urls.movie}/${id}?api_key=${apiKey}`).then(value => value.data),
    getByGenreId: (id, page) => apiService.get(`${urls.movies}?api_key=${apiKey}&page=${page}&with_genres=%${id}`).then(value => value.data.results)
}


export {
    moviesService
}
export const urlMovieImg = 'https://image.tmdb.org/t/p/w300/';

//https://api.themoviedb.org/3/discover/movie?api_key=e9a488e6ea1f2a8b453bb5067ca250ce
//https://api.themoviedb.org/3/discover/movie?api_key=e9a488e6ea1f2a8b453bb5067ca250ce&page=3&with_genres=28