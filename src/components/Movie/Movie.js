import {Link} from 'react-router-dom';

import css from './Movie.module.css';
import {Rating} from "@mui/material";

const Movie = ({movie: {id, poster_path, title, vote_average}}) => {

    const getPoster = `https://image.tmdb.org/t/p/w200${poster_path}`
    const notFoundPoster= 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'

    return (
        <Link className={css.movie} to={id.toString()}>
            <div>
                <img className={css.movie_poster} src={poster_path?getPoster:notFoundPoster} alt="title"/>
            </div>
            <Rating name="half-rating-read" value={vote_average / 2} precision={0.5} readOnly/>
            <div>{title}</div>
        </Link>
    );
};

export {
    Movie
}