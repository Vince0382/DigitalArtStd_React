import React, { Component } from 'react';

import classes from './Services.css';
import BackImage from '../../components/BackImg/BackImg';
import Img from '../../assets/images/img5.jpg';
import Spacer from '../../components/Spacer/Spacer';
import BlockContent from '../../components/BlockContent/Services/BlockContent';
import Block from '../../components/BlockContent/Services/Block';
import Section from '../../hoc/Section/Section';
import AgileImg from '../../assets/images/agile.svg';
import ProjectImg from '../../assets/images/project.svg';
import ArchitectureImg from '../../assets/images/architecture.svg';
import WebImg from '../../assets/images/laptop.svg';
import MobileImg from '../../assets/images/phone.svg';
import AgileBackground from '../../assets/images/agileBg.svg';
import ProjectBackground from '../../assets/images/projectBg.svg';
import ArchitectureBackground from '../../assets/images/architectureBg.svg';
import WebBackground from '../../assets/images/webBg.svg';
import MobileBackground from '../../assets/images/mobileBg.svg';

class Services extends Component {

    state = {
        blockComponent: null
    }

    onClickHandler = (component) => {
        this.setState({blockComponent: component});
        console.log(this.state.blockComponent);
    }

    render (){


        // const agileBlock = (
        //     <SkillCircles in>
        //         <SkillCircle color="white" percent="90" radius="60" stroke="8" strokeColor={this.props.fixedColor}>Agile Coaching</SkillCircle>
        //         <SkillCircle color="white" percent="70" radius="60" stroke="8" strokeColor={this.props.fixedColor}>Lean</SkillCircle>
        //         <SkillCircle color="white" percent="95" radius="60" stroke="8" strokeColor={this.props.fixedColor}>Scrum</SkillCircle>
        //         <SkillCircle color="white" percent="90" radius="60" stroke="8" strokeColor={this.props.fixedColor}>Kanban</SkillCircle>
        //         <SkillCircle color="white" percent="95" radius="60" stroke="8" strokeColor={this.props.fixedColor}>Visual Management</SkillCircle>
        //         <SkillCircle color="white" percent="80" radius="60" stroke="8" strokeColor={this.props.fixedColor}>SAFe</SkillCircle>
        //         <SkillCircle color="white" percent="95" radius="60" stroke="8" strokeColor={this.props.fixedColor}>People Coaching</SkillCircle>
        //         <SkillCircle color="white" percent="50" radius="60" stroke="8" strokeColor={this.props.fixedColor}>Lean Startup</SkillCircle>
        //     </SkillCircles>
        // );

        // const projectBlock = (
        //     <SkillCircles in>
        //         <SkillCircle color="white" percent="70" radius="60" stroke="8" strokeColor={this.props.fixedColor}>Waterfall</SkillCircle>
        //         <SkillCircle color="white" percent="90" radius="60" stroke="8" strokeColor={this.props.fixedColor}>V Cycle</SkillCircle>
        //         <SkillCircle color="white" percent="80" radius="60" stroke="8" strokeColor={this.props.fixedColor}>Prince 2</SkillCircle>
        //         <SkillCircle color="white" percent="95" radius="60" stroke="8" strokeColor={this.props.fixedColor}>People Management</SkillCircle>
        //     </SkillCircles>
        // );

        // const architectureBlock = (
        //     <SkillCircles in></SkillCircles>
        // );

        // const webBlock = (
        //     <SkillCircles in>
        //         <SkillCircle color="white" percent="85" radius="60" stroke="8" strokeColor={this.props.fixedColor}>ASP .NET</SkillCircle>
        //         <SkillCircle color="white" percent="90" radius="60" stroke="8" strokeColor={this.props.fixedColor}>netCore</SkillCircle>
        //         <SkillCircle color="white" percent="95" radius="60" stroke="8" strokeColor={this.props.fixedColor}>React</SkillCircle>
        //     </SkillCircles>
        // );

        // const mobileBlock = (
        //     <SkillCircles in>
        //         <SkillCircle color="white" percent="85" radius="60" stroke="8" strokeColor={this.props.fixedColor}>Xamarin</SkillCircle>
        //         <SkillCircle color="white" percent="95" radius="60" stroke="8" strokeColor={this.props.fixedColor}>React Native</SkillCircle>
        //     </SkillCircles>
        // );


        return (
            <div key="services" className={classes.Main} id="services">
                <BackImage image={Img} isMobile={this.props.isMobile}/>

                <div className={classes.SkillDiv} ref={this.props.ReactRef}>
                    <div className={classes.SkillTitle} style={{color: "white"}}>
                        <h2>Answer to a specific need by a specific skill</h2>
                    </div>

                    <Section link="/#services" mainSection="/#services"/>

                    <div className={classes.SkillOverview}>
                        <Block 
                            image={AgileImg} 
                            textColor={this.props.color}
                            imageColor={this.props.color2}
                            inactiveColor={"darkgray"}
                            isMobile={this.props.isMobile}
                            title={"Agile Management"}
                            link={"/#agiles"}>
                            
                            <p>Be flexible and faster with Agile project management</p>
                        </Block>

                        <Block 
                            image={ProjectImg} 
                            textColor={this.props.color}
                            imageColor={this.props.color2}
                            inactiveColor={"darkgray"}
                            isMobile={this.props.isMobile} 
                            title={"Project Management"}
                            link={"/#project"}>
                            
                            <p>Let us follow you all along your project to ensure a success story</p>
                        </Block>

                        <Block 
                            image={ArchitectureImg} 
                            textColor={this.props.color}
                            imageColor={this.props.color2}
                            inactiveColor={"darkgray"}
                            isMobile={this.props.isMobile} 
                            title={"Software Architecture"}
                            link={"/#architecture"}>
                            
                            <p>Our expert will guide you through the entire modeling process of your application project by providing guidance regarding the perfect software architecture for your needs</p>    
                        </Block>

                        <Block 
                            image={WebImg} 
                            textColor={this.props.color}
                            imageColor={this.props.color2}
                            inactiveColor={"darkgray"}
                            isMobile={this.props.isMobile} 
                            title={"Web Development"}
                            link={"/#web"}>
                            
                            
                            <p>Fully responsive web application</p>
                            <p>Cross-platform hosting by using non proprietary framework (except for Microsoft ASP .NET)</p>
                            <p>Secured, highly avalaible, flexible and affordable web hosting</p>    
                        </Block>

                        <Block 
                            image={MobileImg} 
                            textColor={this.props.color}
                            imageColor={this.props.color2}
                            inactiveColor={"darkgray"}
                            isMobile={this.props.isMobile} 
                            title={"Mobile Development"}
                            link={"/#mobile"}>
                            
                            <p>By using the last and industry leading technologies we are able to provide in one shot cross-platform appliactions to fit your needs</p>    
                        </Block>
                        
                    </div>
                        {/* 
                            <SkillBar percent="60%" bgColor={"black"} color={"white"} clicked={() => this.onClickHandler(agileBlock)}>Agile Services</SkillBar>
                            <SkillBar percent="75%" bgColor={"black"} color={"white"} clicked={() => this.onClickHandler(projectBlock)}>Project Managment</SkillBar>
                            <SkillBar percent="50%" bgColor={"black"} color={"white"} clicked={() => this.onClickHandler(architectureBlock)}>Architecture</SkillBar>
                            <SkillBar percent="80%" bgColor={"black"} color={"white"} clicked={() => this.onClickHandler(webBlock)}>Web Development</SkillBar>
                            <SkillBar percent="60%" bgColor={"black"} color={"white"} clicked={() => this.onClickHandler(mobileBlock)}>Mobile Development</SkillBar>
                        
                        
                        
                            <div className={classes.SkillDivCircles}>
                                {this.state.blockComponent ? this.state.blockComponent : (
                                    <SkillCircles in noBg>
                                        <div style={{textAlign: "center", fontWeight: "100", color: this.props.color}}>Please click or over a service to see details</div>
                                    </SkillCircles>
                                    )
                                }
                            </div> 
                        */}
                </div>
                
                <Spacer height='100px' />

                <div className={classes.Content} id="agiles">
                    <BlockContent 
                        title="Agiles Services"
                        hash="/#agiles"
                        mainSection="/#services"
                        image={[AgileBackground, AgileImg]}
                        bgColor="white"
                        color={this.props.color}
                        frameColor={this.props.gradient}
                        isMobile={this.props.isMobile}
                        overviewItems={["Agile Coaching", "Lean", "Scrum", "Kanban", "SAFe"]}>
                        
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

                <Spacer height='100px' />

                <div className={classes.Content} id="project">
                    <BlockContent 
                        title="Project Management"
                        hash="/#project"
                        mainSection="/#services"
                        image={[ProjectBackground, ProjectImg]}
                        bgColor="white"
                        color={this.props.color}
                        frameColor={this.props.gradient}
                        isMobile={this.props.isMobile}
                        overviewItems={["Waterfall", "V Cycle", "Prince 2", "People Management"]}>
                        
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

                <Spacer height='100px' />

                <div className={classes.Content} id="architecture">
                    <BlockContent 
                        title="Software Architecture"
                        hash="/#architecture"
                        mainSection="/#services"
                        image={[ArchitectureBackground, ArchitectureImg]}
                        bgColor="white"
                        color={this.props.color}
                        frameColor={this.props.gradient}
                        isMobile={this.props.isMobile}
                        overviewItems={["Some Skill", "Some Skill"]}>
                        
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

                <Spacer height='100px' />

                <div className={classes.Content} id="web">
                    <BlockContent 
                        title="Web Development"
                        hash="/#web"
                        mainSection="/#services"
                        image={[WebBackground, WebImg]}
                        bgColor="white"
                        color={this.props.color}
                        frameColor={this.props.gradient}
                        isMobile={this.props.isMobile}
                        overviewItems={["ASP .NET", "netCore", "React", "Javascript", "UI/UX", "Responsive"]}>
                        
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

                <Spacer height='100px' />

                <div className={classes.Content} id="mobile">
                    <BlockContent 
                        title="Mobile Development"
                        hash="/#mobile"
                        mainSection="/#services"
                        image={[MobileBackground, MobileImg]}
                        bgColor="white"
                        color={this.props.color}
                        frameColor={this.props.gradient}
                        isMobile={this.props.isMobile}
                        overviewItems={["Xamarin", "React Native", "Cross-platform"]}>
                        
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
            </div>
        );
    }
}

export default Services;