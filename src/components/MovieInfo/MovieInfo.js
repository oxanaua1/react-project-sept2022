import React, {useEffect} from 'react';
import {urlMovieImg} from "../../services";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import css from './MovieInfo.module.css'


const MovieInfo = () => {
    const {id} = useParams();
    const {movie} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {

        dispatch(moviesActions.getById(id))

    }, [dispatch, id])


    return (
        <div>

            <div className={css.MovieInfoBtnBack}>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
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

                        <div className={css.GenreBadgeWrap}>
                            Genre: {movie.genres.map(genre =>

                            <Link to={`${genre.id}/moviesByGenres`} key={genre.id}>
                                <div className={css.GenreBadgeContainer}>
                                    <span className={css.GenreBadgeNotification}>go to</span>

                                    <div className={css.GenreBadge}>
                                        {genre.name}


                                    </div>


                                </div>
                            </Link>)}

                        </div>

                        <div>
                            Production Companies: {movie.production_companies.map(productionCompany =>
                            <li key={productionCompany.id}>{productionCompany.origin_country}{productionCompany.name}</li>)}
                        </div>
                        <div className={css.Overview}>Overview: {movie.overview}</div>

                    </div>

                </div>
            }

        </div>
    );
}

export {MovieInfo};