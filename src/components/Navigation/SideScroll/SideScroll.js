import React from 'react';
import SVG from 'react-inlinesvg';
import ScrollTo from '../../../hoc/scrollToComponent';
import ScrollCollision from 'react-scroll-collision';


import classes from './SideScroll.css';
import ArrowDown from '../../../assets/images/arrow_down.svg';
import ArrowUp from '../../../assets/images/arrow_up.svg';


const sideScroll = props => {

    return (
        <ScrollTo element={props.up? window.location.pathname : props.element} toTop={props.up} className={props.className} style={props.style}>

            <ScrollCollision className={classes.ScrollDiv}>
                <div className={classes.TextDiv}>
                    {props.up? "To the top" : "Scroll down"}
                </div>
                <div className={classes.Arrow}>
                    <SVG 
                        src={props.up? ArrowUp : ArrowDown}>
                    </SVG>
                </div>
            </ScrollCollision>
        </ScrollTo>
    );
}

export default sideScroll;