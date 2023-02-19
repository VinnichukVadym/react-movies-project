import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Genre} from "../Genre/Genre";
import {movieActions} from "../../redux";

const Genres = () => {

    const {genres} = useSelector(({movies}) => movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getGenres())
    }, [dispatch])

    return (
        <div style={{marginTop:60}}>
            {genres && genres.map((genre) => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {
    Genres
}