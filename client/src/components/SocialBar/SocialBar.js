import React from 'react';

import classes from './SocialBar.css';
import SocialBarItem from './SocialBarItem/SocialBarItem';

import LinkedIn from '../../assets/images/linkedin.svg';
import Facebook from '../../assets/images/facebook.svg';
import Codepen from '../../assets/images/codepen.svg';
import Github from '../../assets/images/github.svg';

const socialBar = (props) => {
    return (
        <div className={props.className}>
            <SocialBarItem image={LinkedIn} link="https://www.linkedin.com/in/vincent-petrini-a3231355/" type="external" color={props.color} size={props.size}/>
            <SocialBarItem image={Facebook} link="https://www.facebook.com/digitalartstd" type="external" color={props.color} size={props.size}/>
            <SocialBarItem image={Codepen} link="https://codepen.io/vincentpetrini/" type="external" color={props.color} size={props.size}/>
            <SocialBarItem image={Github} link="https://github.com/Vince0382" type="external" color={props.color} size={props.size}/>
        </div>
    );
}

export default socialBar;