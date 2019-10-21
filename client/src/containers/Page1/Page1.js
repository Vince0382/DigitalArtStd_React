import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Page1.css';
import * as actions from '../../store/actions';

import ScrollHandler from '../../hoc/ScrollHandler';
import SideScroll from '../../components/Navigation/SideScroll/SideScroll';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Promo1 from './Promo1/Promo1';
import TestParralax from '../TestParralax';

const CONTROLS_COLOR = 'white';

const Page1 = props => {

    useEffect(() =>{
        props.onChangeColor();
    }, []);
    
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
            <div key="home" className={classes.Main}>
                <SideScroll style={{color: props.controlsColor, fill: props.controlsColor}}
                            up={scrolled ? true : false}
                            element="/#whoweare"
                            />
                
                <Home scrolled={scrolled} />

                <About contentStyle={classes.ContentFrame}/>

                <Services contentStyle={classes.ContentFrame}/>

                <Promo1 contentStyle={classes.ContentFrame}/>

                <Portfolio contentStyle={classes.ContentFrame}/>

                <Contact />

            </div>
        </ScrollHandler>
    );
        
}

const mapStateToProps = state => {
    return {
        controlsColor: state.main.controlsColor
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeColor: () => dispatch( actions.changeControlsColor( CONTROLS_COLOR ))
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Page1 );