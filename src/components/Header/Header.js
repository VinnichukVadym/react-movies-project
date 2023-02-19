import css from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = () => {

    const user = 'Vadym';

    return (
        <div className={css.header}>
            <div className={css.header_left}>
                <h2 className={css.logo}>Logo</h2>
                <NavLink to={'home'}>Home</NavLink>
                <NavLink to={'movies'}>Movies</NavLink>
            </div>
            <div className={css.header_right}>
                <NavLink to={'search'}>
                    <div className={css.search}>
                        <span>Search</span>
                        <img className={css.search_icon}
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Search_icon.svg/2048px-Search_icon.svg.png"
                             alt="search icon"/>
                    </div>
                </NavLink>
                <div className={css.user}>
                    <div className={css.user_photo}>{user[0]}</div>
                    <span>{user}</span>
                </div>
            </div>
        </div>
    );
};

export {
    Header
}