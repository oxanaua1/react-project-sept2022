import React from 'react';
import {Link} from "react-router-dom";

import {urlMovieImg} from "../../services";
import {StarsRating} from "../StarsRating/StarsRating";
import css from './MoviesListCard.module.css';


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
                <div className={css.MovieCardStars}><StarsRating/></div>

            </div>
        </div>
    );
};

export {MoviesListCard};