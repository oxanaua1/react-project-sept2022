import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, Outlet} from "react-router-dom";

import {genresActions} from "../../redux/slices/genresSlice";
import css from './GenreBadge.module.css'


const GenreBadge = () => {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresActions.getAll())

    }, [dispatch])


    return (
        <div>

            <div className={css.GenreContainer}>

                <div className={css.GenreWrap}>{genres.map(genre =>

                    <Link to={`${genre.id}/moviesAllByGenres`}
                          key={genre.id}>{genre.name}
                    </Link>)}</div>

            </div>

            <Outlet/>

        </div>
    );
};

export {GenreBadge};

