import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './NotFoundPage.module.css'

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <div className={css.NotFoundPageWrap}>
            <h2>There is not such a page.
                Pls go back or enter new address.
            </h2>
            <button onClick={() => navigate(-1)}>Go Back</button>


        </div>
    );
};

export {NotFoundPage};