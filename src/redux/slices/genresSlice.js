import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../../services";

const initialState = {
    genres: [],
    genre: null,
    moviesAllByGenre: [],
    page: 1,
    errors: null,
    loading: null

}

const getAll = createAsyncThunk(
    'genresSlice/getAll',
    async (_, thunkAPI) => {
        try {
            return await genresService.getAll()

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getAllMoviesByGenreId = createAsyncThunk(
    'genresSlice/getAllMoviesByGenreId',
    async ({id, page}, thunkAPI) => {
        try {
            return await genresService.getMoviesByGenreId(id, page)

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.page = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload;
                state.loading = false;
            })
            .addCase(getAllMoviesByGenreId.fulfilled, (state, action) => {
                state.moviesAllByGenre = action.payload;
                state.loading = false;
            })

});

const {reducer: genresReducer, actions: {setCurrentPage}} = genresSlice;

const genresActions = {
    getAll,
    getAllMoviesByGenreId,
    setCurrentPage
}


export {
    genresReducer,
    genresActions
}




