import React, {useEffect} from 'react';
import {useLocalStorage} from '../../hooks/useLocalStorage';

import css from './ChangeTheme.module.css'


const ChangeTheme = () => {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const [theme, setTheme] = useLocalStorage('changedTheme', defaultDark ? "dark" : "light")


    useEffect(() => {
        document.documentElement.setAttribute('color-scheme', theme);
    }, [theme])


    return (
        <div>

            <div className={css.ToChangeThemeBtn}>

                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                    {theme === "dark" ? <button> to light mode</button> : <button>to dark mode </button>}
                </button>

            </div>


        </div>

    )
};

export {ChangeTheme};

