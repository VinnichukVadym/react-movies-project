import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import css from './Genre.module.css';
import {movieActions} from "../../redux";

const Genre = ({genre: {id, name}}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className={css.genre}>
            <button onClick={() => {
                dispatch(movieActions.setPage(1))
                navigate(`genres/${name.toLowerCase()}?page=1`, {state: id})
            }}>{name}</button>

        </div>
    );
};

export {
    Genre
}