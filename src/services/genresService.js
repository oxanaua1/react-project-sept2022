import {apiService, apiKey} from "./apiService";
import {urls} from "../configs";


const genresService = {
    getAll: () => apiService.get(`${urls.genres}?api_key=${apiKey}`).then(value => value.data.genres)

}

export {
    genresService
}

//genres: '/genre/movie/list'