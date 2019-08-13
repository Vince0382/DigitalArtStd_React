import React from 'react';

import classes from './Project.css';

import AnimatedMask from '../../../../components/Animated/Mask/AnimatedMask';
import Slide from '../../../../components/UI/Slide/Slide';


const project = ( props ) => {

    const mobile = props.Mobile? classes.Mobile : null

    return (
        <div className={classes.Project + " " + props.className} style={props.style}>

            <div className={classes.Wrapper}>
                {props.children}
            </div>  

            {/* <div className={classes.ProjectView}></div> */}
            <AnimatedMask className={classes.ImagesWrapper} delay="1.2s">
                <div className={classes.Skin + " " + mobile}>
                    <div className={classes.Images}>
                            {props.images ? props.images.map(image => {
                                return <img className={classes.Image} src={image}/> 
                            }) : null}
                                        
                    </div>
                    <div className={classes.Slider}><Slide /></div>
                </div>
                
            </AnimatedMask>
        </div>
    );
}

export default project;