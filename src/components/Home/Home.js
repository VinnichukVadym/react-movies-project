import {useSelector} from "react-redux";

import {Movie} from "../Movie/Movie";
import css from "../Home/Home.module.css";

const Home = () => {

    const {popularMovies} = useSelector(({movies}) => movies);


    return (
        <div className={css.home}>
            <h2 className={css.title}>Home</h2>
            <div className={css.home_contents}>
                {popularMovies && popularMovies.map(value => <Movie key={value.id} movie={value}/>)}
            </div>
        </div>
    );
};

export {
    Home
}
