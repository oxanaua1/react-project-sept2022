import {apiService, apiKey} from "./apiService";
import {urls} from "../configs";


const genresService = {
    getAll: () => apiService.get(`${urls.genres}?api_key=${apiKey}`).then(value => value.data.genres),
    getMoviesByGenreId: (id, page) => apiService.get(`${urls.movies}?api_key=${apiKey}&page=${page}&with_genres=${id}`).then(value => value.data.results),
}

export {
    genresService
}

