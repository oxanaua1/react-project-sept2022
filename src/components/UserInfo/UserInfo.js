import React from 'react';

import logo from './person.svg'
import css from './UserInfo.module.css'


const UserInfo = () => {

    return (
        <div>
            <div className={css.UserInfo}><img src={logo} alt="user"/>
            </div>


        </div>
    );
};

export {UserInfo};