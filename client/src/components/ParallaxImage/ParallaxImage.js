import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import classes from './ParallaxImage.css';

const parallaxImage = (props) => {
    return (
        <Parallax offestXMin="-20" offsetXMax="20" slowerScrollRate className={classes.Parallax}>
            <div className={classes.ParallaxInner}>
                {props.children}
            </div>
        </Parallax>
    );
}

export default parallaxImage;