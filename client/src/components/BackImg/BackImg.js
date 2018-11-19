import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import classes from './BackImg.css';

const backImg = (props) => {
    return (
        <div className={classes.BackImg}>
            <Parallax   offsetYMax={0}
                        offsetYMin={-20}
                        className={classes.BackImgParallax}>
                <img src={props.image} />
            </Parallax>
        </div>
    );
}

export default backImg;