import React from 'react';

import css from './FindMovie.module.css'
import {useForm} from "react-hook-form";


const FindMovie = () => {
    const {register, handleSubmit, reset} = useForm({mode: 'all'});
    const find = () => {
        reset()
    }
    return (
        <div>

            <form onSubmit={handleSubmit(find)} >
                <input className={css.FindMovie} type="text" placeholder={"enter movie's name"} {...register('findMovie')}/>

            </form>

        </div>
    );
};

export {FindMovie};