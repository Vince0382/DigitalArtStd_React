import React from 'react';
import { NavLink } from 'react-router-dom';

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
                <NavLink
                        className={classes.Link}
                        to={props.link}
                        exact={props.exact}
                        activeClassName={classes.active}
                        style={{color: props.color}}>   
                    {props.children}
                    {after}
                </NavLink>
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