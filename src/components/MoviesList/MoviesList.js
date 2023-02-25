import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css'



const MoviesList = () => {

    const {movies, page} = useSelector(state => state.movies);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(moviesActions.getAll(page))


    }, [dispatch, page])


    return (
        <div>
            <div className={css.Page}>
                <button disabled={page === 1} onClick={() => {
                    dispatch(moviesActions.setCurrentPage(page - 1))
                }}
                >prevPage
                </button>
                <button disabled={page === 500} onClick={() => {
                    dispatch(moviesActions.setCurrentPage(page + 1))
                }}
                >nextPage
                </button>
            </div>

            <div className={css.MovieListWrapper}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}

            </div>


        </div>
    );
};

export {MoviesList};