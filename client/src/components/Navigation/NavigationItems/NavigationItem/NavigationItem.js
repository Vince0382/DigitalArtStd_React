import React from 'react';

import ScrollTo from '../../../../hoc/scrollToComponent';
import classes from './NavigationItem.css';


const navigationItem = props => {

    // const icon = (
    //     <span className={classes.Icon}>
    //         <SVG src={props.image} style={{fill: props.color}} />
    //     </span>
    // );

    const line = (
        <span className={classes.Line} style={{background: props.color}}></span>
    );

    const text = (
        <span className={classes.Text}>{props.children}</span>
    );

    return (
        <li className={classes.NavigationItem} onClick={props.callBack}>
            <ScrollTo
                    className={classes.Link}
                    type={props.type}
                    toTop={props.toTop}
                    element={props.link}
                    exact={props.exact}
                    fixed={props.fixed}
                    clickHandler={props.clickHandler}
                    active={classes.active}
                    callBack={props.callBack}
                    style={{color: props.color}}>   
                {/* {icon} */}
                {text}
                {line}
            </ScrollTo>
        </li>
    );

};

export default navigationItem;