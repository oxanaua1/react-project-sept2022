const baseURL = 'https://api.themoviedb.org/3';

const urls = {
    movies: '/discover/movie',
    movie: '/movie',
    genres: '/genre/movie/list',
    trending:'/trending/movie/week',
    search:'/search/movie'
}

export {
    baseURL, urls
}