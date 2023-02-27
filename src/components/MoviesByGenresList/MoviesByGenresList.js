import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesByGenreList.module.css';


const MoviesByGenresList = () => {

    const {moviesByGenre, page} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const {genreId} = useParams();

    useEffect(() => {
        dispatch(moviesActions.getMoviesByGenre({genreId, page}))
    }, [dispatch, genreId, page])


    return (

        <div className={css.MoviesByGenreListBTNContainer}>
            <div>
                <div className={css.MoviesByGenreListBTN}>
                    <button disabled={page === 1} onClick={() => {
                        dispatch(moviesActions.setCurrentPage(page - 1))
                    }}>prev
                    </button>
                    <button disabled={page === 500} onClick={() => {
                        dispatch(moviesActions.setCurrentPage(page + 1))
                    }}>next
                    </button>
                </div>

                <div className={css.MoviesByGenreListWrap}>{moviesByGenre.map(movieByGenre => <MoviesListCard
                    key={movieByGenre.id} movie={movieByGenre}/>)}</div>
            </div>


        </div>


    );
};

export {MoviesByGenresList};