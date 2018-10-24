import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../Footer/Footer';
import AboutContact from '../AboutContact/AboutContact';
import * as actions from '../../store/actions'; 

class Layout extends Component {

    render () {
        return (
            <div className={classes.Layout}>
                <Toolbar
                    color={this.props.color}
                    fixedColor={this.props.fixedColor}
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
        fixedColor: state.fixedTextColor
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDrawerToggle: () => dispatch(actions.showMobileMenu())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout));