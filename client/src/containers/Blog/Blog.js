import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getElementsPositions } from '../../shared/utility';
import ScrollHandler from '../../hoc/ScrollHandler';

import classes from './Blog.css';
import BackImage from '../../components/BackImg/BackImg';
import Img from '../../assets/images/img9.png';
import SideScroll from '../../components/Navigation/SideScroll/SideScroll';
import Section from '../../hoc/Section/Section';

class Blog extends Component {

    state = {
        scrolled: false,
        boundaries: [
            [0,0]
        ]
    }

    scrollHandler = () => {
        if(window.scrollY > 30) {
            if(!this.state.scrolled) this.setState({scrolled: true});
        } else {
            this.setState({scrolled: false});
        }

        if(!this.props.isMobile()){
            const updatedBoundaries = getElementsPositions("footer");
    
            if (this.state.boundaries !== updatedBoundaries){
                this.setState({
                    boundaries: updatedBoundaries
                });
            }
        }
    }

    render(){

        return (
            <ScrollHandler onWindowScroll={this.scrollHandler}>
                <div className={classes.Main}>
                    <BackImage image={Img}/>
                    <SideScroll color={this.props.color}
                                color2="white"
                                up={(this.state.scrolled && !this.props.isMobile()) ? true : false}
                                element="/#"
                                changeColorAt={this.state.boundaries}/>

                    <div className={classes.Blog}>
                        <div className={classes.Title} style={{color: this.props.color}}>
                            <h1>Keep in touch with us</h1>
                            <h2>Welcome to our Blog</h2>
                        </div>
                    
                    <Section link="/blog" mainSection="/blog"/>
                    </div>
                
                
                
                </div>
            </ScrollHandler>
        );

    }

}

const mapStateToProps = state => {
    return {
        color: state.textColor
    };
}

export default connect(mapStateToProps)(Blog) ;