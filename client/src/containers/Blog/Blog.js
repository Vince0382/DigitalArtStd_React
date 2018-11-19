import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Blog.css';
import BackImage from '../../components/BackImg/BackImg';
import Img from '../../assets/images/img9.png';
import SideScroll from '../../components/Navigation/SideScroll/SideScroll';
import Section from '../../hoc/Section/Section';

class Blog extends Component {


    render(){

        return (
            <div className={classes.Main}>
                <BackImage image={Img}/>
                <SideScroll color={this.props.color} element="/#"/>

                <div className={classes.Blog}>
                    <div className={classes.Title} style={{color: this.props.color}}>
                        <h1>Keep in touch with us</h1>
                        <h2>Welcome to our Blog</h2>
                    </div>
                
                <Section link="/blog" mainSection="/blog"/>
                </div>
            
            
            
            </div>
        );

    }

}

const mapStateToProps = state => {
    return {
        color: state.textColor
    };
}

export default connect(mapStateToProps)(Blog) ;