import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import css from './FindMovie.module.css';


const FindMovie = () => {

    const {register, handleSubmit, reset, getValues} = useForm({mode: 'all'});
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();
    const {page} = useSelector(state => state.movies);

    const find = () => {
        const data = getValues('findMovie')
        setQuery(data)

        reset()
    }

    useEffect(() => {
        dispatch(moviesActions.getMoviesSearched({query, page}))
    }, [dispatch, query, page])


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