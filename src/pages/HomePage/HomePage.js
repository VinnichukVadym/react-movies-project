import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import {Home} from "../../components";

const HomePage = () => {

    const {page} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieActions.getPopularMovies({page}))
    },[dispatch, page])


    return (
        <div>
            <Home/>
        </div>
    );
};

export {
    HomePage
}