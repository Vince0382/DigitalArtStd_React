import React from 'react';
import { NavLink } from 'react-router-dom';

import ScrollTo from '../../../../hoc/scrollToComponent';
import classes from './NavigationItem.css';


const navigationItem = ( props ) => {

    let navlink = null;
    const after = (
        <div className={classes.After} style={{background: props.color}}></div>
    );

    switch (props.type) {
        case "function" : {
            if (props.clickHandler) {
                navlink = ( 
                    <div    className={classes.Link} 
                            onClick={props.clickHandler}
                            style={{color: props.color}}>
                        {props.children}
                        {after}
                    </div>
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
                    {props.children}
                    {after}
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
                        style={{color: props.color}}>   
                    {props.children}
                    {after}
                </ScrollTo>
            );
            break;
        }
        
    }




    return (
        <li className={classes.NavigationItem}>
            {navlink}
        </li>
    );

};

export default navigationItem;