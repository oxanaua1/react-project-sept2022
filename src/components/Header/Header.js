import React from 'react';

import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import {UserInfo} from "../UserInfo/UserInfo";
import {FindMovie} from "../FindMovie/FindMovie";


const Header = () => {
    return (
        <div>
            <div className={css.HeaderWrap}>
                <div className={css.Header}>
                    <NavLink  to={'/'}>HOME</NavLink>
                    <NavLink  to={'/movies'}>MOVIES</NavLink>
                    <NavLink  to={'/genres'}>GENRES</NavLink>
                </div>

                <NavLink to={'/search'}> <FindMovie/></NavLink>
                <UserInfo/>
            </div>



        </div>
    );
};

export {Header};