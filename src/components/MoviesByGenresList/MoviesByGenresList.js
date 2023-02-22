import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {moviesActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesByGenresList = () => {
    const {moviesByGenre, page} = useSelector(state => state.movies);
    const [genresId] = useSearchParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getMoviesByGenre({genresId, page}))
    }, [dispatch, genresId, page])

    return (
        <div>
            {/*{JSON.stringify(genresId)}*/}

            {moviesByGenre.map(movieByGenre => <MoviesListCard key={movieByGenre.id} movie={movieByGenre}/>)}

        </div>
    );
};

export {MoviesByGenresList};