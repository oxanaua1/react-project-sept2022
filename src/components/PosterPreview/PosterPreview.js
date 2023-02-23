import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";

import {urlMovieImg} from "../../services";
import css from './PosterPreview.module.css'
import {StarsRating} from "../StarsRating/StarsRating";


const PosterPreview = () => {
    const {moviesTrending} = useSelector(state => state.movies);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(moviesActions.getMoviesTrending())


    }, [dispatch])


    return (
        <div>
            <div className={css.PosterPreviewTrendingH3}><h3>Trending this week</h3></div>
            <div className={css.PosterPreviewWrap}>

                {moviesTrending.map(movieTrending => <div key={movieTrending.id}>

                    <div>

                        <img src={urlMovieImg + movieTrending.poster_path} alt={movieTrending.title}/>

                        <span><StarsRating/> {movieTrending.vote_average}</span>

                    </div>

                </div>)}

            </div>


        </div>
    );
};

export {PosterPreview};