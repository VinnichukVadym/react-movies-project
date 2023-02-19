import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useLocation, useParams} from "react-router-dom";
import {Pagination, PaginationItem} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import css from './GendersPage.module.css';
import {movieActions} from "../../redux";
import {Movie} from "../../components";

const GenresPage = () => {

    const dispatch = useDispatch();
    const {page_genre, movies, totalPages} = useSelector(({movies}) => movies);
    const {state: id} = useLocation();
    const {genre} = useParams();

    const handleChange = (page) => {
        dispatch(movieActions.setPage(page))
    }

    useEffect(() => {
        dispatch(movieActions.getMoviesByGenre({id, page: page_genre}))
    }, [dispatch, id, page_genre])

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
                    defaultPage={page_genre}
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