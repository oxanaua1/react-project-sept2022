import React, {useEffect} from 'react';
import {urlMovieImg} from "../../services";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import css from './MovieInfo.module.css'

const MovieInfo = () => {
    const {id} = useParams();
    const {movie} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(moviesActions.getById(id))

    }, [dispatch, id])

    return (
        <div>


            {movie &&

                <div className={css.MovieInfoWrapper}
                     style={{backgroundImage: `url(${urlMovieImg + movie.backdrop_path})`}}>

                    <div>
                        <img src={urlMovieImg + movie.poster_path} alt={movie.title}/>
                    </div>

                    <div className={css.Fond}>
                        <h2 className={css.Fond}>{movie.title}</h2>
                        <h3>{movie.tagline}</h3>
                        <div>Release Date: {movie.release_date}</div>
                        <div>Vote Average: {movie.vote_average}; All votes:{movie.vote_count}</div>
                        <div>Runtime:{movie.runtime}</div>

                        <div>
                            Genre: {movie.genres.map(genre =>
                            <Link to={genre.id.toString()} key={genre.id}> {genre.name}
                            </Link>)}
                        </div>

                        <div>
                            Production Companies: {movie.production_companies.map(productionCompany =>
                            <li key={productionCompany.id}>{productionCompany.origin_country}/{productionCompany.name}</li>)}
                        </div>
                        <div className={css.Overview}>Overview: {movie.overview}</div>

                    </div>

                </div>
            }


        </div>
    );
}

export {MovieInfo};