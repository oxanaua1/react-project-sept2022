import React from 'react';
import {useState} from "react";
import css from './StarsRating.module.css'


const StarsRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);


    return (
        <div className={css.StarsRating}>PLS VOTE:
              {[...Array(10)] .map((star, index) => {
                index += 1;
                return (
                    <button id={css.button}
                        type="button"
                        key={index}
                        className={index <= ((rating && hover) || hover) ? css.on : css.off}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className={css.Star}>&#9733;</span>
                    </button>
                );
            })}
        </div>

    );

};

export {StarsRating};

