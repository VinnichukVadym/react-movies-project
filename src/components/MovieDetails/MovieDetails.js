import {Rating} from "@mui/material";

import css from './MovieDetails.module.css';

const MovieDetails = ({movieDetails}) => {
    const {
        budget,
        overview,
        original_language,
        homepage,
        production_companies,
        poster_path,
        backdrop_path,
        title,
        belongs_to_collection,
        production_countries,
        release_date,
        genres,
        status,
        vote_average,
        adult
    } = movieDetails;

    const getPoster = `https://image.tmdb.org/t/p/w400${poster_path}`
    const getBackdrop = `https://image.tmdb.org/t/p/original${backdrop_path}`

    let genresNames = '';
    for (const genre of genres) {
        genresNames = `${genresNames} ${genre.name}`;
    }


    return (
        <div>
            <img className={css.backdrop} src={getBackdrop} alt={title}/>
            <div className={css.movie_details}>
                <div>
                    <img src={getPoster} alt={title}/>
                </div>
                <div className={css.txt_content}>
                    <div className={css.genre}>
                        <h2 className={css.title}>{title}</h2>
                        <div className={css.genreBadge}>{genresNames.trim()}</div>
                    </div>
                    {belongs_to_collection?.name &&
                        <div><span>Belongs to collection</span>: {belongs_to_collection.name}</div>}
                    <div><span>Original language</span>: {original_language}</div>
                    <div><span>Overview</span>: {overview}</div>
                    {production_companies[0] &&
                        <div><span>Production companies</span>: {production_companies[0].name}</div>}
                    {production_countries[0] &&
                        <div><span>Production countries</span>: {production_countries[0].name}</div>}
                    <div><span>Release date</span>: {release_date}</div>
                    <div><span>Status</span>: {status}</div>
                    <div><span>Budget</span>: ${budget}</div>
                    {homepage &&
                        <div><span>Homepage</span>: <a href={homepage} target={'_blank'} rel="noreferrer">{homepage}</a>
                        </div>}
                    <div><span>Rating</span>: {vote_average}</div>
                    <Rating name="half-rating-read" value={vote_average / 2} precision={0.5} readOnly/>
                    {adult && <div style={{color: 'aqua'}}>Movie 18+</div>}
                </div>
            </div>
        </div>
    );
};

export {
    MovieDetails
}