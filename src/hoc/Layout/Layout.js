import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../containers/Page1/Footer/Footer';
import CookieBanner from '../../components/CookieBanner/CookieBanner';
import ScrollHandler from '../ScrollHandler';
import SideScroll from '../../components/Navigation/SideScroll/SideScroll';
import * as actions from '../../store/actions';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';

export const ScrolledContext = React.createContext();

const layout = (props) => {

    const classNames = 
        [
            classes.Layout,
            classes.EffectRotateLeft
        ]

    if ( props.showMobileMenu ) 
    {
        classNames.push( classes.ModalView );
        classNames.push( classes.Animate );

    }

    const [scrolled, setScrolled] = useState( false );

    const scrollHandler = () => {
        if(window.pageYOffset > 30) {
            if(!scrolled) setScrolled( true );
        } else {
            setScrolled( false );
        }
    }

    return (
        <ScrollHandler onWindowScroll={scrollHandler}>
            <div className={classNames.join(' ')} id="top">
                <Toolbar
                    color={props.controlsColor}
                    scrolled={scrolled}
                    clicked={props.onDrawerToggle}
                    open={props.showMobileMenu}/>

                <SideScroll style={{color: props.controlsColor, fill: props.controlsColor}}
                                up={scrolled ? true : false}
                                element="/#whoweare" />

                <CookieBanner language={props.language}/>

                <div className={classes.Container} onClick={props.showMobileMenu ? props.onDrawerToggle : null}>
                    <div className={classes.Wrapper}>

                        <div className={classes.Content}>
                            <ScrolledContext.Provider value={scrolled}>
                                { props.children }
                            </ScrolledContext.Provider>
                        </div>
                    
                    </div>
                </div>

                <Footer />

                <div className={classes.WrapperOverflow}>
                    <nav className={`${classes.OuterNav} ${classes.Right} ${classes.Vertical}`}>
                        <NavigationItems callBack={props.onDrawerToggle} />
                    </nav>
                </div>
                    
                {/* <SideDrawer
                    color={props.controlsColor}
                    open={props.showMobileMenu}
                    closed={props.onDrawerToggle} /> */}
                
                
            </div>
        </ScrollHandler>
    );
}

const mapStateToProps = state => {
    return {
        controlsColor : state.main.controlsColor,
        showMobileMenu: state.main.showMobileMenu,
        language: state.main.language,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDrawerToggle: () => dispatch( actions.showMobileMenu() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(layout));