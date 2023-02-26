import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import {movieActions} from "../../redux";
import Switch from '../Switch/Switch';


const Header = () => {

    const dispatch = useDispatch();
    const user = 'Vadym';

    return (
        <div className={css.header}>
            <div className={css.header_left}>
                <h2 className={css.logo}>Logo</h2>
                <NavLink to={'home'}>Home</NavLink>
                <NavLink to={'movies'}>Movies</NavLink>
            </div>
            <div className={css.header_right}>
                <NavLink to={'search'} onClick={() => dispatch(movieActions.enterSearchPage())}>
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
                <Switch/>
                {/*<div className="theme">*/}
                    {/*<label className={css.switch}>*/}
                    {/*    <input type="checkbox" id={css.slider}/>*/}
                    {/*    <span className={css.slider}></span>*/}
                    {/*</label>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export {
    Header
}