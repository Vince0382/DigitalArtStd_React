import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../containers/Page1/Footer/Footer';
import CookieBanner from '../../components/CookieBanner/CookieBanner';
import * as actions from '../../store/actions';

const layout = (props) => {

    return (
        <div className={classes.Layout} id="top">
            
            <CookieBanner language={props.language}/>

            <Toolbar
                color={props.controlsColor}
                clicked={props.onDrawerToggle}
                open={props.showMobileMenu}/>
                
            <SideDrawer
                color={props.controlsColor}
                open={props.showMobileMenu}
                closed={props.onDrawerToggle} />
            
            <div className={classes.Content}>
                { props.children }
                
            </div>
            
            <Footer />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        controlsColor : state.main.controlsColor,
        showMobileMenu: state.main.showMobileMenu,
        language: state.main.language
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDrawerToggle: () => dispatch( actions.showMobileMenu() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(layout));