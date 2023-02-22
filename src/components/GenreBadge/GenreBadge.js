import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../../redux/slices/genresSlice";
import css from './GenreBadge.module.css'
import {Link} from "react-router-dom";

const GenreBadge = () => {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresActions.getAll())

    }, [dispatch])


    console.log(genres);


    return (
        <div className={css.GenreContainer}>

            <div className={css.GenreWrap}>{genres.map(genre =>
                <Link to={genre.id.toString()}
                      key={genre.id}>{genre.name}
                </Link>)}</div>

        </div>
    );
};

export {GenreBadge};

