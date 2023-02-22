import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "./slices";
import {genresReducer} from "./slices/genresSlice";

const rootReducer = combineReducers({
    movies: moviesReducer,
    genres: genresReducer
});

const setUpStore = () => configureStore({
    reducer: rootReducer
});

export {
    setUpStore
}