import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../containers/Footer/Footer';
import AboutContact from '../../containers/AboutContact/AboutContact';
import * as actions from '../../store/actions'; 

class Layout extends Component {

    render () {
        return (
            <div className={classes.Layout} id="top">
                
                <Toolbar
                    color={this.props.color}
                    fixedColor={this.props.fixedColor}
                    bgColor={this.props.riseUpBlue}
                    borderColor={this.props.riseUpGreen}
                    clicked={this.props.onDrawerToggle} 
                    open={this.props.showMobileMenu}/>
                <SideDrawer
                    color={this.props.color}
                    fixedColor={this.props.fixedColor}
                    open={this.props.showMobileMenu}
                    closed={this.props.onDrawerToggle} />
                
                <main className={classes.Content}>
                    {this.props.children}
                    <AboutContact />
                </main>
                
                <Footer color={this.props.color}/>
            </div>
        )
    }
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
        onDrawerToggle: () => dispatch(actions.showMobileMenu())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout));