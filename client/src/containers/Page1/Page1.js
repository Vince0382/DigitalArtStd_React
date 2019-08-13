import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import classes from './Page1.css';

import ScrollHandler from '../../hoc/ScrollHandler';
import SideScroll from '../../components/Navigation/SideScroll/SideScroll';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';



class Page1 extends PureComponent {
    
    state = {
        scrolled: false
    }

    scrollHandler = () => {
        if(window.pageYOffset > 30) {
            if(!this.state.scrolled) this.setState({scrolled: true});
        } else {
            this.setState({scrolled: false});
        }
    }

    render () {

        return (
            <ScrollHandler onWindowScroll={this.scrollHandler}>
                <div key="home" className={classes.Main}>
                    <SideScroll className={classes.SideScroll}
                                up={this.state.scrolled ? true : false}
                                element="/#whoweare"
                                />
                    
                    <Home scrolled={this.state.scrolled} />

                    <About contentStyle={classes.ContentFrame}/>

                    <Services contentStyle={classes.ContentFrame}/>

                    <Portfolio contentStyle={classes.ContentFrame}/>

                </div>
            </ScrollHandler>
        );
    }
        
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(Page1);