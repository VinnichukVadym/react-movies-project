import {Outlet} from "react-router-dom";

import {Genres, Header} from "../../components";
import css from './MainLayout.module.css';

const MainLayOut = () => {

    return (
        <div className={css.wrapper}>
            <Header/>
            <div className={css.main_content}>
                <Genres/>
                <Outlet/>
            </div>
        </div>
    );
};

export {
    MainLayOut
}