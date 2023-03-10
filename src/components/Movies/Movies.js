import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {Pagination, PaginationItem} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {movieActions} from "../../redux";
import css from './Movies.module.css';
import {Movie} from "../Movie/Movie";

const Movies = () => {

    const dispatch = useDispatch();
    const {movies, totalPages, page} = useSelector(({movies}) => movies);
    const [, seQuery] = useSearchParams({page});

    const handleChange = (page) => {
        dispatch(movieActions.setPage(page));
        seQuery({page});
    }

    return (
        <div className={css.movies}>
            <h2 className={css.title}>Movies</h2>
            <div className={css.movies_contents}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            {totalPages &&
                <Pagination
                    className={css.movies_pagination}
                    color={'primary'}
                    variant="outlined"
                    defaultPage={page}
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
    Movies
}