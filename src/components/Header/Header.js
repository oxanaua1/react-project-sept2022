import React from 'react';

import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import {UserInfo} from "../UserInfo/UserInfo";
import {FindMovie} from "../FindMovie/FindMovie";
import {ChangeTheme} from "../ChangeTheme/ChangeTheme";


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