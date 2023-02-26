import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Genre} from "../Genre/Genre";
import {movieActions} from "../../redux";
import css from './Genres.module.css';

const Genres = () => {

    const {genres} = useSelector(({movies}) => movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getGenres())
    }, [dispatch])

    return (
        <div className={css.genres}>
            {genres && genres.map((genre) => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {
    Genres
}