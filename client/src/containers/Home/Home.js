import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Element } from 'react-scroll'; 

import classes from './Home.css';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/UI/Button/Button';
import Mouse from '../../components/UI/Scroll/Mouse/Mouse';
import ScrollTo from '../../hoc/scrollToComponent';
import BlockContent from '../../components/BlockContent/BlockContent';
import Img from '../../assets/images/img1.jpg';
import Professional from '../../assets/images/img2.jpg';
import Inovative from '../../assets/images/img3.jpg';
import Creative from '../../assets/images/img4.jpg';
import BackImage from '../../components/BackImg/BackImg';

import * as actions from '../../store/actions';

class Home extends Component {

    componentWillMount = () => {
        this.props.setTextColor();
    }

    render () {
        return (
            <div key="home">
                <BackImage image={Img} />
                <div className={classes.Home}>
                    <div className={classes.Animation}>
                        <Logo animated={true} />
                    </div>
                    <div className={classes.DivButton}>
                        <Button clicked={this.props.onShowModal}
                                color={this.props.color}
                                borderColor={this.props.color}
                                bgColor2={this.props.color}
                                bgColor1="#3D9842">About Us</Button>
                    </div>
                    <div className={classes.DivMouse}>
                        <ScrollTo element="homeContent">
                            <Mouse borderColor={this.props.color} bgColor={this.props.color}/>
                        </ScrollTo>
                        
                    </div>

                </div>
                <Element name="homeContent">
                    <div className={classes.Content}>
                        <BlockContent 
                            title="We are Professional"
                            orientation="left"
                            image={Professional}
                            bgColor="white">
                            <p>Looking for a quality partner to carry out your projects? Rise Up will guide you through the key stages of success</p>
                        </BlockContent>
                    </div>
                    <div className={classes.ContentAfter}></div>
                    <div className={classes.Content}>
                        <BlockContent 
                            title="We are Innovative"
                            orientation="right"
                            image={Inovative}
                            bgColor="white">
                            <p>Looking for a partner at the cutting edge of technology? Rise Up will help you building solutions</p>
                        </BlockContent>
                    </div>
                    <div className={classes.ContentAfter}></div>
                    <div className={classes.Content}>
                        <BlockContent 
                            title="We are Creative"
                            orientation="left"
                            image={Creative}
                            bgColor="white">
                            <p>Looking for an imagination enabler? Rise Up will make sure you</p>
                        </BlockContent>
                    </div>
                    <div className={classes.ContentAfter}></div>
                </Element>

            </div>
        );
    }
        
}

const mapStateToProps = state => {
    return {
        color: state.textColor
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowModal: () => dispatch(actions.showModal()),
        setTextColor: () => dispatch(actions.setTextColor("rgb(7, 87, 119)"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);