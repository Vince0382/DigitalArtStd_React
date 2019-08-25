import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../containers/Footer/Footer';
import * as actions from '../../store/actions';

const layout = (props) => {

    return (
        <div className={classes.Layout} id="top">
            
            <Toolbar
                color={props.textColor}
                borderColor={props.textColor}
                clicked={props.onDrawerToggle}
                open={props.showMobileMenu}/>
                
            <SideDrawer
                color={props.textColor}
                open={props.showMobileMenu}
                closed={props.onDrawerToggle} />
            
            <div className={classes.Content}>
                { props.children }
                
            </div>
            
            <Footer color={props.textColor}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        textColor : state.main.textColor,
        showMobileMenu: state.main.showMobileMenu
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDrawerToggle: () => dispatch(actions.showMobileMenu())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(layout));