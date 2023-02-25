import React from 'react';
import {Route, Routes} from "react-router-dom";

import {MoviesPage} from "./containers";
import {
    FoundMovieList,
    GenreBadge, GenreBadgeAllMovies,
    MovieInfo,
    MoviesByGenresList,
    MoviesList,
    NotFoundPage,
    PosterPreview
} from "./components";

const App = () => {
    return (
        <div>
            <Routes>

                <Route path={'/'} element={<MoviesPage/>}>

                    <Route index element={<PosterPreview/>}/>
                    <Route path={':id'} element={<MovieInfo/>}/>
                    <Route path={'movies'} element={<MoviesList/>}/>
                    <Route path={'movies/:id'} element={<MovieInfo/>}/>
                    <Route path={'movies/:id/:genreId/moviesByGenres'} element={<MoviesByGenresList/>}/>

                    <Route path={'genres'} element={<GenreBadge/>}>
                        <Route path={':id/moviesAllByGenres'} element={<GenreBadgeAllMovies/>}/>
                    </Route>

                    <Route path={'search'} element={<FoundMovieList/>}/>
                </Route>

                <Route path={'*'} element={<NotFoundPage/>}/>

            </Routes>
        </div>
    );
};

export {App};