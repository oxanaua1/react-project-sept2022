import React from 'react';

import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import {UserInfo} from "../UserInfo/UserInfo";
import {FindMovie} from "../FindMovie/FindMovie";

const Header = () => {
    return (
        <div className={css.Header}>

            <NavLink to={'/movies'}>MOVIES</NavLink>
            <NavLink to={'/genres'}>GENRES</NavLink>
            <FindMovie/>
            <UserInfo/>
        </div>
    );
};

export {Header};