import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayOut} from "./layouts";
import {GenresPage, HomePage, MovieDetailsPage, MoviesPage, SearchPage} from "./pages";

const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayOut/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'search'} element={<SearchPage/>}/>
                <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
                <Route path={'genres/:genre'} element={<GenresPage/>}/>
                <Route path={'genres/:genre/:id'} element={<MovieDetailsPage/>}/>
            </Route>
        </Routes>
    );
};

export {
    App
}