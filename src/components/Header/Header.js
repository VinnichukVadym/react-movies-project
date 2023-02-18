import css from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = () => {

    return (
        <div >
            <NavLink to={'home'}>Home</NavLink>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'search'}>Search</NavLink>
            <span>User</span>
        </div>
    );
};

export {
    Header
}