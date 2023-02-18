import {Outlet} from "react-router-dom";

import {Header} from "../../components";

const MainLayOut = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {
    MainLayOut
}