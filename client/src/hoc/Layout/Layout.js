import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../containers/Footer/Footer';
import AboutContact from '../../containers/AboutContact/AboutContact';
import * as actions from '../../store/actions';

const layout = (props) => {

    return (
        <div className={classes.Layout} id="top">
            
            <Toolbar
                color={props.color}
                fixedColor={props.fixedColor}
                bgColor={props.riseUpBlue}
                borderColor={props.riseUpGreen}
                clicked={props.onDrawerToggle}
                open={props.showMobileMenu}/>
            <SideDrawer
                color={props.color}
                fixedColor={props.fixedColor}
                open={props.showMobileMenu}
                closed={props.onDrawerToggle} />
            
            <main className={classes.Content}>
                { props.children }
                <AboutContact isMobile={props.isMobile}/>
            </main>
            
            <Footer color={props.color} clickHandler={props.onShowModal}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        showModal: state.showModal,
        showMobileMenu: state.showMobileMenu,
        color: state.textColor,
        fixedColor: state.fixedTextColor,
        riseUpGreen: state.riseUpGreen,
        riseUpBlue: state.riseUpBlue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDrawerToggle: () => dispatch(actions.showMobileMenu()),
        onShowModal: () => dispatch(actions.showModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(layout));