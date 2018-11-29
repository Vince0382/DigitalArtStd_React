import React, { Component } from 'react';
import {connect} from 'react-redux';

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


import * as actions from '../../store/actions';
import Team from '../Team/Team';

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
        servicesOffsetTop: 0,
        servicesOffsetBottom: 0,
        teamOffsetTop: 0,
        teamOffsetBottom: 0,
        boundaries: [
            [0,0],
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
            const updatedBoundaries = this.state.boundaries.slice();
            updatedBoundaries[0] = [ this.servicesRef.current.getBoundingClientRect().top, this.servicesRef.current.getBoundingClientRect().bottom ];
            updatedBoundaries[1] = [ this.teamRef.current.getBoundingClientRect().top, this.teamRef.current.getBoundingClientRect().bottom ];
    
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
                        <Spacer height='100px' />
                        
                        <div className={classes.Text} style={{color: this.props.color}}>
                            {/* <SVG src={animatedText} style={{fill: this.props.color}} /> */}
                            <p><i>“There are no secrets to success. It is the result of preparation, hard work, and learning from failure.”</i></p>
                            <p>– Colin Powell</p>
                        </div>

                    </div>
                    
                    <Spacer height="100px" />

                    <div className={classes.Content} id="whoweare">
                        <BlockContent 
                            title="Who We Are"
                            hash="/#whoweare"
                            mainSection="/"
                            image={Professional}
                            bgColor="white"
                            color={this.props.color}
                            frameColor={this.props.riseUpGreen}
                            overviewItems={["Customer Oriented", "Agile Expert", "Certified Partner"]}>
                            
                            <p style={{fontSize: "24px"}}>RiseUp! A young and innovative start-up at the cutting edge of technology</p>
                            <p>Our expertise is focused on agile management and development of innovative cross-platform and fully responsive mobile and web applications</p>
                        </BlockContent>
                    </div>
                    

                    <Spacer height="50px" />

                    <BannerItems isMobile={this.props.isMobile}/>

                    <Spacer height="50px" />

                    
                    <div className={classes.Content} id="whatwedo">
                        <BlockContent 
                            title="What We Do"
                            hash="/#whatwedo"
                            mainSection="/"
                            image={Inovative}
                            bgColor="white"
                            color={this.props.color}
                            frameColor={this.props.riseUpGreen}
                            overviewItems={["Consulting", "Coaching", "Software Developement", "Agile Services", "Project Management"]}>
                            
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

                    <Spacer height="100px" />

                    <Services 
                            color={this.props.color} 
                            ReactRef={this.servicesRef} 
                            color2="#3D9842" 
                            gradient={this.props.riseUpGreen}
                            isMobile={this.props.isMobile}/>

                    <Spacer height="100px" />

                    <Team 
                            color={this.props.color} 
                            color2="#3D9842" 
                            ReactRef={this.teamRef}
                            isMobile={this.props.isMobile}/>

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