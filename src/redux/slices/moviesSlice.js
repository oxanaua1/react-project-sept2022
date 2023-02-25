import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    movies: [],
    movie: null,
    moviesByGenre: [],
    moviesTrending: [],
    moviesSearched: [],
    page: 1,
    errors: null,
    loading: null,
    rating: null,


}

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async (page, thunkAPI) => {
        try {
            return await moviesService.getAll(page);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'moviesSlice/getById',
    async (id, thunkAPI) => {
        try {
            return await moviesService.getById(id);


        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const getMoviesByGenre = createAsyncThunk(
    'moviesSlice/getMoviesByGenre',
    async ({genreId, page}, thunkAPI) => {
        try {
            return await moviesService.getByGenreId(genreId, page)

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getMoviesTrending = createAsyncThunk(
    'moviesSlice/getMoviesTrending',
    async (page, thunkAPI) => {
        try {
            return await moviesService.getTrending(page)

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getMoviesSearched = createAsyncThunk(
    'moviesSlice/getMoviesSearched',
    async ({query, page}, thunkAPI) => {
        try {
            return await moviesService.getSearch(query,page)

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.page = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.loading = false;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movie = action.payload;
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                state.moviesByGenre = action.payload;
                state.loading = false;
            })
            .addCase(getMoviesTrending.fulfilled, (state, action) => {
                state.moviesTrending = action.payload;
                state.loading = false;
            })
            .addCase(getMoviesSearched.fulfilled, (state, action) => {
                state.moviesSearched = action.payload;
                state.loading = false;
            })
});

const {reducer: moviesReducer, actions: {setCurrentPage}} = moviesSlice;

const moviesActions = {
    getAll,
    setCurrentPage,
    getById,
    getMoviesByGenre,
    getMoviesTrending,
    getMoviesSearched

}


export {
    moviesReducer,
    moviesActions
}




