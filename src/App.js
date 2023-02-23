import React from 'react';
import {Route, Routes} from "react-router-dom";

import {MoviesPage} from "./containers";
import {GenreBadge, MovieInfo, MoviesByGenresList, MoviesList, PosterPreview} from "./components";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MoviesPage/>}>
                    <Route index element={<PosterPreview/>}/>
                    <Route path={'movies'} element={<MoviesList/>}/>
                    <Route path={'movies/:id'} element={<MovieInfo/>}/>
                    <Route path={'movies/:id/:genreId'} element={<MoviesByGenresList/>}/>
                    <Route path={'genres'} element={<GenreBadge/>}/>
                    <Route path={'genres/:id'} element={<MoviesByGenresList/>}/>


                </Route>
            </Routes>
        </div>
    );
};

export {App};