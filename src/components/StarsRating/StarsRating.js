import React from 'react';
import {useState} from "react";
import css from './StarsRating.module.css'


const StarsRating = () => {
    const [rating, setRating] = useState(0);





    return (
        <div className={css.StarsRating}>
            {[...Array(10)].map((star, index)=> {
                index += 1;

                return (
                       <span  key={index} className={css.Star} >&#9733;</span>




                );
            })}
        </div>
    );
};

export {StarsRating};

// type="button"
// key={index}
// className={index <= ((rating && hover) || hover) ? "on" : "off"}
// onClick={() => setRating(index)}
// onMouseEnter={() => setHover(index)}
// onMouseLeave={() => setHover(rating)}