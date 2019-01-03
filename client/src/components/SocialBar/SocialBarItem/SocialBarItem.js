import React from 'react';
import SVG from 'react-inlinesvg';

import ScrollTo from '../../../hoc/scrollToComponent';

import classes from './SocialBarItem.css';

const socialBarItem = (props) => {
    return (
        <ScrollTo   className={classes.Item}
                    type={props.type}
                    toTop={props.toTop}
                    element={props.link}
                    clickHandler={props.clickHandler}
                    style={{color: props.color, width: props.size}}>

            <SVG src={props.image} style={{fill: props.color, stroke: props.color}} />
        </ScrollTo>
    );
}

export default socialBarItem;