import React from 'react';

import classes from './BannerItem.css';

const bannerItem = (props) => {
    return (
        <div style={{height: props.size}} className={classes.BannerItem}>
            <img src={props.image}></img>
        </div>
    );
}

export default bannerItem;