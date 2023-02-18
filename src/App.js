import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayOut} from "./layouts";
import {GenresPage, HomePage, MoviesPage, SearchPage} from "./pages";

const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayOut/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'genres'} element={<GenresPage/>}/>
                <Route path={'search'} element={<SearchPage/>}/>
            </Route>
        </Routes>
    );
};

export {
    App
}