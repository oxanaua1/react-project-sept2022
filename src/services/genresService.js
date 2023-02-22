import {apiService, apiKey} from "./apiService";
import {urls} from "../configs";


const genresService = {
    getAll: () => apiService.get(`${urls.genres}?api_key=${apiKey}`).then(value => value.data.genres)

}

export {
    genresService
}

//genres: '/genre/movie/list'
// getById: (id) => apiService.get(`${urls.movies}?api_key=${apiKey}&with_genres=%${id}`).then(value => value.data.results)