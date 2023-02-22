import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../../components";

const MoviesPage = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MoviesPage};