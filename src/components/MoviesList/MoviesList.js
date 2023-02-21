import React, {useEffect, useState} from 'react';
import {moviesService} from "../../services";


const MoviesList = () => {
    let [movies, setMovies] = useState([]);

    useEffect(() => {
        moviesService.getAll(1).then(value => setMovies([...value]))


    }, [])
    
    console.log(movies);

    return (
        <div>
            {JSON.stringify(movies)}

        </div>
    );
};

export {MoviesList};