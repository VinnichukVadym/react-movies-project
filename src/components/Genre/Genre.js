import {useNavigate} from "react-router-dom";

import css from './Genre.module.css';

const Genre = ({genre: {id, name}}) => {

    const navigate = useNavigate();

    return (
        <div className={css.genre}>
            <button onClick={() => navigate(`genres/${name.toLowerCase()}`, {state: id})}>{name}</button>

        </div>
    );
};

export {
    Genre
}