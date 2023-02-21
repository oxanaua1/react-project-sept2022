import {apiKey, apiService} from "./apiService";
import {urls} from "../configs";

const moviesService = {
    getAll: (page = 1) => apiService.get(`${urls.movies}?api_key=${apiKey}`,
        {params: {page}}).then(value => value.data.results)
}

export {
    moviesService
}
//https://api.themoviedb.org/3/discover/movie?api_key=e9a488e6ea1f2a8b453bb5067ca250ce