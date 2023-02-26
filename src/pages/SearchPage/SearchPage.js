import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Pagination, PaginationItem} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useSearchParams} from "react-router-dom";

import {Search} from "../../components";
import {movieActions} from "../../redux";
import css from './SearchPage.module.css';

const SearchPage = () => {

    const ref = useRef();
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState(null);
    const {page, searchResult, totalPages} = useSelector(({movies}) => movies);
    const [, seQuery] = useSearchParams({page});


    const submit = (e) => {
        e.preventDefault();
        setSearchQuery(ref.current.value);
        dispatch(movieActions.setPage(1));
        seQuery({page: 1});
    }

    const handleChange = (page) => {
        dispatch(movieActions.setPage(page));
        seQuery({page});
    }

    useEffect(() => {
        if (searchQuery) {
            dispatch(movieActions.getSearchMovies({query: searchQuery, page}));
        }
    }, [page, searchQuery, dispatch])


    return (
        <div className={css.search}>
            <div>
                <h2 className={css.title}>Search movie</h2>
                <form className={css.form} onSubmit={(e) => submit(e)}>
                    <input className={css.input} type="text" placeholder={'Search movie'} ref={ref}/>
                    <button className={css.btn}>Search</button>
                </form>
            </div>

            <div className={css.search_contents}>
                {searchResult && searchResult.map(v => <Search key={v.id} movie={v}/>)}
            </div>

            {totalPages &&
                <Pagination
                    className={css.search_pagination}
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
    SearchPage
}