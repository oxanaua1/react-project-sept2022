import React from 'react';
import {NavLink} from "react-router-dom";

import {UserInfo} from "../UserInfo/UserInfo";
import {FindMovie} from "../FindMovie/FindMovie";
import {ChangeTheme} from "../ChangeTheme/ChangeTheme";
import css from './Header.module.css'


const Header = () => {
    return (
        <div>
            <div>
                <div className={css.HeaderWrap}>
                    <div className={css.Header}>
                        <NavLink to={'/'}>HOME</NavLink>
                        <NavLink to={'/movies'}>MOVIES</NavLink>
                        <NavLink to={'/genres'}>GENRES</NavLink>
                    </div>

                    <NavLink to={'/search'}> <FindMovie/></NavLink>
                    <ChangeTheme/>
                    <UserInfo/>

                </div>

            </div>


        </div>
    );
};

export {Header};