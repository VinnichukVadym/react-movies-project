import {useEffect, useState} from "react";
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Pagination, PaginationItem} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import css from './GendersPage.module.css';
import {movieActions} from "../../redux";
import {Movie} from "../../components";

const GenresPage = () => {

    const dispatch = useDispatch();
    const {page, genres, movies, totalPages} = useSelector(({movies}) => movies);
    const {state} = useLocation();
    const {genre} = useParams();
    const [id, setId] = useState(null);
    const [query, setQuery] = useSearchParams({page});

    const handleChange = (page) => {
        dispatch(movieActions.setPage(page));
        setQuery({page});
    }

    useEffect(() => {
        if (state) {
            setId(state);
        } else {
            if (genres.length) {
                const g = genres.find(v => v.name.toLowerCase() === genre);
                setId(g.id);
            }
        }
    }, [state, setId, genre, genres])

    useEffect(() => {
        if (id) {
            dispatch(movieActions.getMoviesByGenre({id, page: query.get('page') || 1}));
        }
    }, [id, page, dispatch, query])

    return (
        <div className={css.genders}>
            <h2 className={css.title}>{genre}</h2>
            <div className={css.movies_contents}>
                {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            {totalPages &&
                <Pagination
                    className={css.movies_pagination}
                    color={'primary'}
                    variant="outlined"
                    page={page}
                    boundaryCount={1}
                    siblingCount={2}
                    count={totalPages}
                    onChange={(_, page) => handleChange(page)}
                    renderItem={(item) => (
                        <PaginationItem slots={{previous: ArrowBackIcon, next: ArrowForwardIcon}}{...item}/>
                    )}
                />
            }
        </div>
    );
};

export {
    GenresPage
}