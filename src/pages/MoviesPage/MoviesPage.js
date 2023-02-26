import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {Movies} from "../../components";
import {movieActions} from "../../redux";

const MoviesPage = () => {

    const dispatch = useDispatch();
    const {page, movies} = useSelector(state => state.movies);
    const [query] = useSearchParams();

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}));
    }, [dispatch, page, query])


    return (
        <div>
            {movies && <Movies/>}
        </div>
    );
};

export {
    MoviesPage
}