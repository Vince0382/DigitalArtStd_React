import React from 'react';
import SVG from 'react-inlinesvg';

import ScrollTo from '../../../../hoc/scrollToComponent';
import classes from './NavigationItem.css';


const navigationItem = ( props ) => {

    let navlink = null;

    const icon = (
        <span className={classes.Icon}>
            <SVG src={props.image} style={{fill: props.color}} />
        </span>
    );

    const line = (
        <span className={classes.Line} style={{background: props.color}}></span>
    );

    const text = (
        <span className={classes.Text}>{props.children}</span>
    );

    switch (props.type) {
        case "function" : {
            if (props.clickHandler) {
                navlink = ( 
                    <span   className={classes.Link} 
                            onClick={props.clickHandler}
                            style={{color: props.color}}>
                        {icon}
                        {line}
                        {text}
                    </span>
                );
            }
            break;
        }
        case "external" : {
            navlink = ( 
                <a      className={classes.Link}
                        target="_blank"
                        href={props.link}
                        style={{color: props.color}}>
                    {icon}
                    {line}
                    {text}
                </a>
            );
            break;
        }
        default: {
            navlink = (
                <ScrollTo
                        className={classes.Link}
                        toTop={props.toTop}
                        element={props.link}
                        exact={props.exact}
                        fixed={props.fixed}
                        active={classes.active}
                        callBack={props.callBack}
                        style={{color: props.color}}>   
                    {icon}
                    {line}
                    {text}
                </ScrollTo>
            );
            break;
        }
        
    }




    return (
        <li className={classes.NavigationItem} onClick={props.callBack}>
            {navlink}
        </li>
    );

};

export default navigationItem;