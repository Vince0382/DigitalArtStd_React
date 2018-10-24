import React from 'react';

import logoSmall from '../../assets/images/logo_small.svg';
import logoAnimated from '../../assets/images/logo_animated.svg';
import classes from './Logo.css';

const selectLogo = (animated) => {
    if (animated) return logoAnimated;
    else return logoSmall;
}

 const logo = (props) => {
     return (
        
        <div className={classes.Logo} style={{height: props.height}}>
            <object type="image/svg+xml" data={selectLogo(props.animated)}></object>
        </div>
     );
 } 

 export default logo;