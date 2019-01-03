import React, { Component } from 'react';
import {connect} from 'react-redux';

import { getElementsPositions } from '../../shared/utility';

import classes from './Home.css';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/UI/Button/Button';
import BlockContent from '../../components/BlockContent/Home/BlockContent';
import Img from '../../assets/images/img1.jpg';
import Professional from '../../assets/images/img2.jpg';
import Inovative from '../../assets/images/img3.jpg';
import BackImage from '../../components/BackImg/BackImg';
import Spacer from '../../components/Spacer/Spacer';
import BannerItems from '../../components/Banner/BannerItems';
import SideNav from '../../components/Navigation/SideNavItems/SideNavItems';
import Services from '../Services/Services';
import SideScroll from '../../components/Navigation/SideScroll/SideScroll';
import Section from '../../hoc/Section/Section';
import ScrollHandler from '../../hoc/ScrollHandler';
import Companies from '../../components/Companies/Companies';
import Title from '../../components/Title/Title';


import * as actions from '../../store/actions';
import Team from '../Team/Team';

//SVG import 
import Customer from '../../assets/images/customer.svg';
import Agile from '../../assets/images/agile_small.svg';
import Certified from '../../assets/images/certified.svg';
import Consulting from '../../assets/images/consulting.svg';
import Coaching from '../../assets/images/coaching.svg';
import Development from '../../assets/images/development.svg';
import AgileServices from '../../assets/images/agile.svg';
import Project from '../../assets/images/project.svg';
import UXUI from '../../assets/images/uxui.svg';
import Architecture from '../../assets/images/architecture.svg';

class Home extends Component {
    constructor (props) {
        super(props);
        this.servicesRef = React.createRef();
        this.teamRef = React.createRef();
    }
    
    state = {
        scrolled: false,
        sideNavColor: this.props.color,
        sideScrollColor: this.props.color,
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
            const updatedBoundaries = getElementsPositions(this.servicesRef.current, "footer");
    
            if (this.state.boundaries !== updatedBoundaries){
                this.setState({
                    boundaries: updatedBoundaries
                });
            }
        }
    }

    render () {

        return (
            <ScrollHandler onWindowScroll={this.scrollHandler}>
                <div key="home" className={classes.Main}>
                    <div style={{position: "absolute", top: "100px", left: "0"}}>
                        <Section link="/" mainSection="/"/>
                    </div>

                    <BackImage image={Img} isFixed/>

                    <SideNav 
                            color= {this.props.color} 
                            color2="white"
                            changeColorAt={this.state.boundaries} />
                    <SideScroll 
                            color={this.props.color}
                            color2="white"
                            up={(this.state.scrolled && !this.props.isMobile()) ? true : false}
                            element="/#whoweare"
                            changeColorAt={this.state.boundaries}/>

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
                        <Spacer height='100px' noBg/>
                        
                        <div className={classes.Text} style={{color: this.props.color}}>
                            {/* <SVG src={animatedText} style={{fill: this.props.color}} /> */}
                            <p><i>“There are no secrets to success. It is the result of preparation, hard work, and learning from failure.”</i></p>
                            <p>– Colin Powell</p>
                        </div>

                    </div>
                    
                    <Spacer height="100px" />
                    <div className={classes.Container}>
                        <div className={classes.Content} id="whoweare">
                            <BlockContent 
                                title={<Title title1="Who We" title2="Are" color1={this.props.color} color2="#3D9842"/>}
                                hash="/#whoweare"
                                mainSection="/"
                                image={Professional}
                                bgColor="white"
                                color={this.props.color}
                                frameColor={this.props.riseUpGreen}
                                overviewItems={[["Customer Oriented", Customer], ["Agile Expert", Agile], ["Certified Partner", Certified]]}>
                                
                                <p style={{fontSize: "24px"}}>RiseUp! A young and innovative start-up at the cutting edge of technology</p>
                                <p>Our expertise is focused on agile management and development of innovative cross-platform and fully responsive mobile and web applications</p>
                            </BlockContent>
                        </div>
                        

                        <Spacer height="50px" />

                        <BannerItems isMobile={this.props.isMobile}/>

                        <Spacer height="50px" />

                        
                        <div className={classes.Content} id="whatwedo">
                            <BlockContent 
                                title={<Title title1="What We" title2="Do" color1={this.props.color} color2="#3D9842"/>}
                                hash="/#whatwedo"
                                mainSection="/"
                                image={Inovative}
                                bgColor="white"
                                color={this.props.color}
                                frameColor={this.props.riseUpGreen}
                                overviewItems={[
                                    ["Agile Services", AgileServices], 
                                    ["Project Management", Project],
                                    ["UX/UI Design", UXUI],
                                    ["Software Architecture", Architecture], 
                                    ["Software Developement", Development]]}>
                                
                                <p>Rise Up provides high quality consulting, 
                                        coaching and training solutions for clients seeking the benefits of agile software development including Lean-UX, 
                                        DevOps and Continuous Delivery. 
                                </p>
                                <p>Its our passion to improve the performance of software development teams and programs 
                                        while maximizing the delivery of business value through innovative agile technology delivery techniques. 
                                </p>
                                <p>No matter what your stage of agile adoption is, just beginning, or needing to take your teams 
                                        and programs to the next level, we have solutions that will deliver your organizations an improved 
                                        flow of business value to your customers.
                                </p>
                            </BlockContent>
                        </div>

                        <Spacer height="200px" />

                        <Title  title1="They Trusted"
                                title2="Us"
                                color1={this.props.color}
                                color2="#3D9842"/>
                    
                        <Companies color={this.props.color} color2="#3D9842" />

                        <Spacer height="200px" />

                        <Services 
                                color={this.props.color} 
                                ReactRef={this.servicesRef} 
                                color2="#3D9842" 
                                gradient1={this.props.riseUpBlue}
                                gradient2={this.props.riseUpGreen}
                                isMobile={this.props.isMobile}/>

                        <Spacer height="100px" />

                        <Team 
                                color={this.props.color} 
                                color2="#3D9842" 
                                ReactRef={this.teamRef}
                                isMobile={this.props.isMobile}/>
                    </div>
                </div>
            </ScrollHandler>
        );
    }
        
}

const mapStateToProps = state => {
    return {
        color: state.textColor,
        riseUpGreen: state.riseUpGreen,
        riseUpBlue: state.riseUpBlue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowModal: () => dispatch(actions.showModal()),
        setTextColor: () => dispatch(actions.setTextColor("rgb(7, 87, 119)"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);