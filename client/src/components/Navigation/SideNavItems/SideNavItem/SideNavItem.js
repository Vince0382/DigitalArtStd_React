import React from 'react';
import ScrollTo from '../../../../hoc/scrollToComponent';

import classes from './SideNavItem.css';

const sideNavItem = (props) => {

    return (
        <div className={classes.SideNavContainer}>
            <ScrollTo 
                    element={props.link}
                    exact={props.exact}
                    fixed={props.fixed}
                    active={classes.Active} 
                    toTop={props.toTop}>
 
                    <svg className={classes.SideNavItem}>
                        <circle
                            strokeWidth= "1px"
                            r= "2px"
                            cx= "3px"
                            cy= "3px"/>

                    </svg>
            </ScrollTo>
        </div>
    );
}

export default sideNavItem;
