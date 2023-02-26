import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayOut} from "./layouts";
import {GenresPage, HomePage, MovieDetailsPage, MoviesPage, SearchPage} from "./pages";
import {useSelector} from "react-redux";
import './App.css';

const App = () => {
    const {theme} = useSelector(({movies}) => movies);
    return (
        <div className={`${theme}`}>
            <Routes>
                <Route path={'/'} element={<MainLayOut/>}>
                    <Route index element={<Navigate to={'home'}/>}/>
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'search'} element={<SearchPage/>}/>
                    <Route path={'genres/:genre'} element={<GenresPage/>}/>
                    <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
                    <Route path={'search/:id'} element={<MovieDetailsPage/>}/>
                    <Route path={'home/:id'} element={<MovieDetailsPage/>}/>
                    <Route path={'genres/:genre/:id'} element={<MovieDetailsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {
    App
}