import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Page1.css';
import * as actions from '../../store/actions';

import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Promo1 from './Promo1/Promo1';

import { ScrolledContext } from '../../hoc/Layout/Layout';

const CONTROLS_COLOR = 'white';

const Page1 = props => {

    useEffect(() =>{
        props.onChangeColor();
    }, []);

    return (
        
            <div key="home" className={classes.Main}>

                <ScrolledContext.Consumer>
                    {
                        value => ( <Home scrolled={value} /> )
                    }
                </ScrolledContext.Consumer>

                <About contentStyle={classes.ContentFrame}/>

                <Services contentStyle={classes.ContentFrame}/>

                <Promo1 contentStyle={classes.ContentFrame}/>

                <Portfolio contentStyle={classes.ContentFrame}/>

                <Contact />

            </div>
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