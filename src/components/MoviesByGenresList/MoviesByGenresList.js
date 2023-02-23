import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {moviesActions} from "../../redux";
import {useParams} from "react-router-dom";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesByGenreList.module.css'

const MoviesByGenresList = () => {
    const {moviesByGenre, page} = useSelector(state => state.movies);
    const {id, genreId} = useParams()

    console.log('id', id);
    console.log('genreId', genreId);

    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(moviesActions.getMoviesByGenre({id, page}))
        dispatch(moviesActions.getMoviesByGenre({genreId, page}))


    }, [dispatch, id, genreId, page])


    console.log(moviesByGenre);



    return (

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


    );
};

export {MoviesByGenresList};