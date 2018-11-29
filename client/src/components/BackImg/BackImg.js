import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import classes from './BackImg.css';

const backImg = (props) => {

    let imageDiv = (
        <div className={classes.BackImg}>
        <Parallax   offsetYMax={0}
                    offsetYMin={-20}
                    className={classes.BackImgParallax}
                    styleInner={{willChange: "transform"}}>
            <img src={props.image} alt=''/>
        </Parallax>
    </div>
    );

    if(props.isFixed){
        imageDiv = (
            <div className={classes.BackImgFixed}>
                <img src={props.image} alt=''/>
            </div>
        );
    }

    return imageDiv;
}

export default backImg;