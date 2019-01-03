import React from 'react';

import classes from './SiteMapItem.css';
import ScrollTo from '../../../hoc/scrollToComponent';

const siteMap = (props) => {

    return (
        <li className={classes.Item} onClick={props.callBack}>
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
                {props.children}
            </ScrollTo>
        </li>
    );

};

export default siteMap;