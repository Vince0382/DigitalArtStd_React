import React from 'react';
import { connect } from 'react-redux';

import classes from './NavigationItems.css';
import * as actions from '../../../store/actions';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem color={props.color} link="/" exact>Home</NavigationItem>
        <NavigationItem color={props.color} link="/services">Services</NavigationItem>
        <NavigationItem color={props.color} type="function" link="#" clickHandler={props.clickHandler}>Contact</NavigationItem>
        <NavigationItem color={props.color} type="external" link="https://www.linkedin.com/company/rise-up-luxebmourg/">Blog</NavigationItem>
    </ul>
);

const mapDispatchToProps = dispatch => {
    return {
        clickHandler: () => dispatch(actions.showModal())
    }
}

export default connect(null, mapDispatchToProps,null, {pure: false}) (navigationItems);