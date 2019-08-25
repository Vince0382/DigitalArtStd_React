import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './Page1.css';

import ScrollHandler from '../../hoc/ScrollHandler';
import SideScroll from '../../components/Navigation/SideScroll/SideScroll';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';



const Page1 = props => {
    
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
                <SideScroll className={classes.SideScroll}
                            up={scrolled ? true : false}
                            element="/#whoweare"
                            />
                
                <Home scrolled={scrolled} />

                <About contentStyle={classes.ContentFrame}/>

                <Services contentStyle={classes.ContentFrame}/>

                <Portfolio contentStyle={classes.ContentFrame}/>

                <Contact />

            </div>
        </ScrollHandler>
    );
        
}

const mapStateToProps = state => {
    return {

    }
}

export default connect( mapStateToProps )( Page1 );