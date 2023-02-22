import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../services";

const initialState = {
    genres: [],
    genre: null,
    page: null,
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

const getById = createAsyncThunk(
    'genresSlice/getById',
    async (id, thunkAPI) => {
        try {
          return await genresService.getById(id);


        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload;
                state.loading = false;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.genre = action.payload;
            })

});

const {reducer: genresReducer} = genresSlice;

const genresActions = {
    getAll,
    getById
}


export {
    genresReducer,
    genresActions
}




