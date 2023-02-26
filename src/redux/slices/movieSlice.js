import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    movies: [],
    genres: [],
    popularMovies: [],
    searchResult: [],
    totalPages: null,
    page: 1,
    movieDetails: null,
    theme: 'dark',

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
            let {data} = await movieService.sortGenre(id, page);
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

const getPopularMovies = createAsyncThunk(
    'movieSlice/getPopularMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            let {data} = await movieService.getPopular(page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getSearchMovies = createAsyncThunk(
    'movieSlice/getSearchMovies',
    async ({query, page}, {rejectWithValue}) => {
        try {
            let {data} = await movieService.search(query, page);
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
        },
        enterSearchPage: (state) => {
            state.searchResult = [];
            state.totalPages = null;
        },
        setTheme: (state, action) => {
            if (action.payload === 'dark') {
                state.theme = 'light';
            }
            if (action.payload === 'light') {
                state.theme = 'dark';
            }
        },
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
            .addCase(getPopularMovies.fulfilled, (state, action) => {
                state.popularMovies = action.payload.results.sort((a, b) => b.vote_average - a.vote_average);
                state.page = action.payload.page;
                state.totalPages = 500;
            })
            .addCase(getSearchMovies.fulfilled, (state, action) => {
                state.searchResult = action.payload.results;
                state.page = action.payload.page;
                state.totalPages = action.payload.total_pages;
            })


});


const {reducer: movieReducer, actions: {setPage, setMovie, enterSearchPage, setTheme}} = movieSlice;

const movieActions = {
    getAll,
    setPage,
    getById,
    setMovie,
    getGenres,
    getMoviesByGenre,
    getPopularMovies,
    getSearchMovies,
    enterSearchPage,
    setTheme,

};

export {
    movieReducer,
    movieActions,
}