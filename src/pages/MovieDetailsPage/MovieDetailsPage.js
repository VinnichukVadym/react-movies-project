import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {MovieDetails} from "../../components";
import {movieActions} from "../../redux";

const MovieDetailsPage = () => {

    let {id} = useParams();
    let dispatch = useDispatch();
    let {movieDetails} = useSelector(({movies}) => movies);

    useEffect(() => {
            dispatch(movieActions.getById({id}))
    }, [ dispatch, id])

    return (
        <div>
            {movieDetails && <MovieDetails movieDetails={movieDetails}/>}
        </div>
    );
};

export {
    MovieDetailsPage
}