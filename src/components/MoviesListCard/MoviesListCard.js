import React from 'react';
import css from './MoviesListCard.module.css'
import {urlMovieImg} from "../../services";
import {Link} from "react-router-dom";

const MoviesListCard = ({movie}) => {

    const {id, title, release_date, poster_path, vote_average, vote_count} = movie;

    return (
        <div>

            <div className={css.MovieCardWrapper}>

                <Link to={`${id}`}>
                    <h3 className={css.Title}>{title}</h3>
                    <div className={css.Title}>Release Date: {release_date}</div>
                    <img src={urlMovieImg + poster_path} alt={title}/>
                    <div className={css.Vote}>Vote Average: {vote_average}; All voted: {vote_count}</div>
                </Link>

            </div>
        </div>
    );
};

export {MoviesListCard};