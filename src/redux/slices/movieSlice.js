import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    movies: [],

};

let getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            let {data} = await movieService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);


let movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
            })

});


const {reducer: movieReducer, actions: {}} = movieSlice;

const movieActions = {
    getAll,

};

export {
    movieReducer,
    movieActions
}