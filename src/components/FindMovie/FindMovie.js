import React, {useEffect} from 'react';

import css from './FindMovie.module.css'
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {useParams, useSearchParams} from "react-router-dom";


const FindMovie = () => {
    const {register, handleSubmit, reset} = useForm({mode: 'all'});

    const {moviesSearched, page} = useSelector(state => state.movies);
    // const {query, setQuery} = useSearchParams('');
    const {query} = useParams();
    console.log(query);

    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(moviesActions.getMoviesSearched({query, page}))
    // }, [dispatch, query, page])

    const find = (data) => {
        dispatch(moviesActions.getMoviesSearched({data, page}))
        reset()

    }
    console.log(moviesSearched);

    return (
        <div>

            <form onSubmit={handleSubmit(find)}>
                <input className={css.FindMovie} type="text"
                       placeholder={"enter movie's name"} {...register('findMovie')}/>

            </form>

        </div>
    );
};

export {FindMovie};