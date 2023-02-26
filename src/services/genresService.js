import {apiService} from "./apiService";
import {authService} from "./authService";
import {urls} from "../configs";


const genresService = {
    getAll: () => apiService.get(`${urls.genres}?api_key=${authService}`).then(value => value.data.genres),
    getMoviesByGenreId: (id, page = 1) => apiService.get(`${urls.movies}?api_key=${authService}&page=${page}&with_genres=${id}`).then(value => value.data.results),
}


export {
    genresService
}

