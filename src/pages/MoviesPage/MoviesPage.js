import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {Movies} from "../../components";
import {movieActions} from "../../redux";

const MoviesPage = () => {

    const dispatch = useDispatch();
    const {page} = useSelector(state => state.movies);
    const [, setQuery] = useSearchParams();

    useEffect(() => {
        setQuery({page});
        console.log(page)
        dispatch(movieActions.setPage(1));
    }, [])


    return (
        <div>
            <Movies/>
        </div>
    );
};

export {
    MoviesPage
}