import React from 'react';
import { connect } from 'react-redux';

import classes from './NavigationItems.css';
import * as actions from '../../../store/actions';
import NavigationItem from './NavigationItem/NavigationItem';
import HomeSvg from '../../../assets/images/home.svg';
import ServiceSvg from '../../../assets/images/service.svg';
import TeamSvg from '../../../assets/images/team.svg';
import ChatSvg from '../../../assets/images/chat.svg';
import BlogSvg from '../../../assets/images/blog.svg';
import LinkedIn from '../../../assets/images/linkedin.svg';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem color={props.color} callBack={props.callBack} link="/" exact toTop fixed image={HomeSvg}>Home</NavigationItem>
        <NavigationItem color={props.color} callBack={props.callBack} link="/#services" fixed image={ServiceSvg}>Services</NavigationItem>
        <NavigationItem color={props.color} callBack={props.callBack} link="/#team" fixed image={TeamSvg}>Team</NavigationItem>
        <NavigationItem color={props.color} callBack={props.callBack} type="function" link="#" clickHandler={props.clickHandler} image={ChatSvg}>Contact</NavigationItem>
        <NavigationItem color={props.color} callBack={props.callBack} link="/blog" toTop fixed image={BlogSvg}>Blog</NavigationItem>
        <NavigationItem color={props.color} callBack={props.callBack} type="external" link="https://www.linkedin.com/company/rise-up-luxebmourg" image={LinkedIn}>LinkedIn</NavigationItem>
    </ul>
);

const mapDispatchToProps = dispatch => {
    return {
        clickHandler: () => dispatch(actions.showModal())
    }
}

export default connect(null, mapDispatchToProps,null, {pure: false}) (navigationItems);