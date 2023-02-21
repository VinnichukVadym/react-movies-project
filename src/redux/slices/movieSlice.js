import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    movies: [],
    genres: [],
    totalPages: null,
    page: 1,
    movieDetails: null

};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            let {data} = await movieService.getAll(page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getGenres = createAsyncThunk(
    'movieSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            let {data} = await movieService.getGenre();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getMoviesByGenre = createAsyncThunk(
    'movieSlice/getMoviesByGenre',
    async ({id, page}, {rejectWithValue}) => {
        try {
            let {data} = await movieService.sortGenre(id,page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            let {data} = await movieService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setMovie: (state, action) => {
            state.movieDetails = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.totalPages = 500;
                state.page = action.payload.page;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movieDetails = action.payload;
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.totalPages = 500;
            })


});


const {reducer: movieReducer, actions: {setPage, setMovie}} = movieSlice;

const movieActions = {
    getAll,
    setPage,
    getById,
    setMovie,
    getGenres,
    getMoviesByGenre,

};

export {
    movieReducer,
    movieActions
}