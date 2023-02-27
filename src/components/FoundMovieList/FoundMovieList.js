import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {urlMovieImg} from "../../services";
import css from './FoundMovieList.module.css'
import {moviesActions} from "../../redux";


const FoundMovieList = () => {

    const dispatch = useDispatch();
    const {moviesSearched, page} = useSelector(state => state.movies);


    return (
        <div>

            <div className={css.Page}>
                <h2>PLS FIND HERE WHAT YOU'VE BEEN SEARCHING FOR </h2>
                <button disabled={page === 1} onClick={() => {
                    dispatch(moviesActions.setCurrentPage(page - 1))
                }}
                >prev Page
                </button>
                <button onClick={() => {
                    dispatch(moviesActions.setCurrentPage(page + 1))
                }}
                >next Page
                </button>
            </div>


            <div className={css.FoundMovieListWrap}>

                {moviesSearched.map(movie =>
                    <div key={movie.id}>
                        <div className={css.FoundMovieListCard}>
                            <h3 className={css.Title}>{movie.title}</h3>
                            <div className={css.Title}>Release Date: {movie.release_date}</div>
                            <img src={urlMovieImg + movie.poster_path} alt={movie.title}/>
                            <div className={css.Vote}>Vote Average: {movie.vote_average};
                                All voted: {movie.vote_count}</div>
                        </div>

                    </div>
                )}

            </div>

        </div>

    );
};

export {FoundMovieList};
