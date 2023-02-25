import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {genresActions} from "../../redux/slices/genresSlice";
import css from "../MoviesByGenresList/MoviesByGenreList.module.css";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";


const GenreBadgeAllMovies = () => {

    const {moviesAllByGenre, page} = useSelector(state => state.genres);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(genresActions.getAllMoviesByGenreId({id, page}))
    }, [dispatch, id, page])

    return (
        <div>

            <div>
                <div className={css.MoviesByGenreListBTNContainer}>
                    <div className={css.MoviesByGenreListBTN}>
                        <button disabled={page === 1} onClick={() => {
                            dispatch(genresActions.setCurrentPage(page - 1))
                        }}>prev
                        </button>
                        <button disabled={page === 500} onClick={() => {
                            dispatch(genresActions.setCurrentPage(page + 1))
                        }}>next
                        </button>
                    </div>

                    <div className={css.MoviesByGenreListWrap}>{moviesAllByGenre.map(movieAllByGenre => <MoviesListCard
                        key={movieAllByGenre.id} movie={movieAllByGenre}/>)}</div>
                </div>

            </div>

        </div>
    );
};

export {GenreBadgeAllMovies};