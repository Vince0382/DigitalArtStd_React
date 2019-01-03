import React from 'react';

import classes from './Title.css';

const title = (props) => {
    return (
        <div>
            {props.title1 ? <div className={classes.TitleText} style={{color: props.color1}}>{props.title1}</div> : null}
            {props.title2 ? <div className={classes.TitleText} style={{color: props.color2}}>{props.title2}</div> : null}
            {props.subTitle ? <div className={classes.TitleSubText} style={{color: props.color1}}>{props.subTitle}</div> : null}
        </div>
    );
}

export default title;