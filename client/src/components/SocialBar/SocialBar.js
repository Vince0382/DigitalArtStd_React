import React from 'react';

import classes from './SocialBar.css';
import SocialBarItem from './SocialBarItem/SocialBarItem';

import LinkedIn from '../../assets/images/linkedin.svg';
import Blog from '../../assets/images/blog.svg';

const socialBar = (props) => {
    return (
        <div className={classes.SocialBar}>
            <SocialBarItem image={LinkedIn} link="https://www.linkedin.com/company/rise-up-luxebmourg" type="external" color={props.color} size={props.size}/>
            <SocialBarItem image={Blog} link="/blog" toTop color={props.color} size={props.size}/>
        </div>
    );
}

export default socialBar;