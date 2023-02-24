import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";

import {urlMovieImg} from "../../services";
import css from './PosterPreview.module.css'
import {StarsRating} from "../StarsRating/StarsRating";
import {Link} from "react-router-dom";


const PosterPreview = () => {
    const {moviesTrending, page} = useSelector(state => state.movies);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(moviesActions.getMoviesTrending(page))


    }, [dispatch, page])


    return (
        <div>
            <div className={css.Page}>
                <button disabled={page === 1} onClick={() => {
                    dispatch(moviesActions.setCurrentPage(page - 1))
                }}
                >prevPage
                </button>
                <button onClick={() => {
                    dispatch(moviesActions.setCurrentPage(page + 1))
                }}
                >nextPage
                </button>
            </div>

            <div className={css.PosterPreviewTrendingH3}><h3>Trending this week</h3></div>
            <div className={css.PosterPreviewWrap}>

                {moviesTrending.map(movieTrending => <div key={movieTrending.id}>

                    <div>

                        <Link to={`${movieTrending.id}`}>
                            <img src={urlMovieImg + movieTrending.poster_path} alt={movieTrending.title}/>
                        </Link>
                            <span><StarsRating/> {movieTrending.vote_average}</span>


                    </div>

                </div>)}

            </div>


        </div>
    );
};

export {PosterPreview};