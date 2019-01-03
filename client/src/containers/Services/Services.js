import React, { Component } from 'react';

import classes from './Services.css';
import Spacer from '../../components/Spacer/Spacer';
import Block from '../../components/BlockContent/Services/Block';
import Section from '../../hoc/Section/Section';
import Title from '../../components/Title/Title';

// import BackImage from '../../components/BackImg/BackImg';
// import Img from '../../assets/images/img5.jpg';
// import BlockContent from '../../components/BlockContent/Services/BlockContent';

import AgileImg from '../../assets/images/agile.svg';
import ProjectImg from '../../assets/images/project.svg';
import ArchitectureImg from '../../assets/images/architecture.svg';
import WebImg from '../../assets/images/laptop.svg';
import MobileImg from '../../assets/images/phone.svg';
import UXUI from '../../assets/images/uxui.svg';
// import AgileBackground from '../../assets/images/agileBg.svg';
// import ProjectBackground from '../../assets/images/projectBg.svg';
// import ArchitectureBackground from '../../assets/images/architectureBg.svg';
// import WebBackground from '../../assets/images/webBg.svg';
// import MobileBackground from '../../assets/images/mobileBg.svg';
// import Waterfall from '../../assets/images/waterfall.svg';
// import People from '../../assets/images/people.svg';
// import Asp from '../../assets/images/aspnet.svg';
// import Netcore from '../../assets/images/netcore.svg';
// import ReactImg from '../../assets/images/react.svg';
// import Javascript from '../../assets/images/js.svg';
// import Xamarin from '../../assets/images/xamarin.svg';
// import CrossPlatform from '../../assets/images/crossplatform.svg';
// import Responsive from '../../assets/images/responsive.svg';
// import Agilecoaching from '../../assets/images/agile_coaching.svg';

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
                {/* <BackImage image={Img} isMobile={this.props.isMobile}/> */}

                <div className={classes.SkillDiv}>
                    <div className={classes.SkillTitle} style={{color: "white", background: this.props.gradient1}} ref={this.props.ReactRef}>
                        <Title  title1="Answer To a Specific Need"
                                title2="By a Specific Skill"
                                subTitle="We aim to provide the best services in all areas we cover by providing guidance, support and high level of expertise"
                                color1="white"
                                color2={this.props.color2}/>
                    </div>

                    <Section link="/#services" mainSection="/#services"/>

                    <Spacer height="50px" />


                    <Title  title1="Our Practice"
                            title2="Areas"
                            color1={this.props.color}
                            color2={this.props.color2}/>


                    <Spacer height="50px" />

                    <div className={classes.SkillOverview}>
                        <Block 
                            image={AgileImg} 
                            textColor={this.props.color}
                            imageColor={this.props.color2}
                            title={"Agile Services"}>
                            
                            <p>Be flexible and faster with Agile project management</p>
                        </Block>

                        <Block 
                            image={ProjectImg} 
                            textColor={this.props.color}
                            imageColor={this.props.color2}
                            title={"Project Management"}>
                            
                            <p>Let us follow you all along your project to ensure a success story</p>
                        </Block>

                        <Block 
                            image={UXUI} 
                            textColor={this.props.color}
                            imageColor={this.props.color2}
                            title={"UX/UI Design"}>
                            
                            <p>Users centrics to bring the most valuable user experience by improving visual design, usability and users satisfaction</p>
                        </Block>

                        <Block 
                            image={ArchitectureImg} 
                            textColor={this.props.color}
                            imageColor={this.props.color2}
                            title={"Software Architecture"}>
                            
                            <p>Our expert will guide you through the entire modeling process of your application project by providing guidance regarding the perfect software architecture for your needs</p>    
                        </Block>

                        <Block 
                            image={WebImg} 
                            textColor={this.props.color}
                            imageColor={this.props.color2}
                            title={"Web Development"}>
                            
                            <p>Fully responsive web application</p>
                            <p>Secured, highly avalaible, flexible and affordable web hosting</p>    
                        </Block>

                        <Block 
                            image={MobileImg} 
                            textColor={this.props.color}
                            imageColor={this.props.color2}
                            title={"Mobile Development"}>
                            
                            <p>By using the last and industry leading technologies we are able to provide in one shot cross-platform appliactions to fit your needs</p>    
                        </Block>
                        
                    </div>
                </div>
                

                {/* 
                    <SkillBar percent="60%" bgColor={"black"} color={"white"} clicked={() => this.onClickHandler(agileBlock)}>Agile Services</SkillBar>
                    <SkillBar percent="75%" bgColor={"black"} color={"white"} clicked={() => this.onClickHandler(projectBlock)}>Project Managment</SkillBar>
                    <SkillBar percent="50%" bgColor={"black"} color={"white"} clicked={() => this.onClickHandler(architectureBlock)}>Architecture</SkillBar>
                    <SkillBar percent="80%" bgColor={"black"} color={"white"} clicked={() => this.onClickHandler(webBlock)}>Web Development</SkillBar>
                    <SkillBar percent="60%" bgColor={"black"} color={"white"} clicked={() => this.onClickHandler(mobileBlock)}>Mobile Development</SkillBar>
                
                
                
                    <Block 
                            image={AgileImg} 
                            textColor={this.props.color}
                            imageColor={this.props.color2}
                            inactiveColor={"darkgray"}
                            isMobile={this.props.isMobile}
                            title={"Agile Services"}
                            link={"/#agiles"}>
                            
                            <p>Be flexible and faster with Agile project management</p>
                        </Block>

                    <div className={classes.SkillDivCircles}>
                        {this.state.blockComponent ? this.state.blockComponent : (
                            <SkillCircles in noBg>
                                <div style={{textAlign: "center", fontWeight: "100", color: this.props.color}}>Please click or over a service to see details</div>
                            </SkillCircles>
                            )
                        }
                    </div> 
                
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
                        overviewItems={[["Agile Coaching", Agilecoaching], ["Lean"], ["Scrum"], ["Kanban"], ["SAFe"]]}>
                        
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
                        overviewItems={[["Waterfall", Waterfall], ["V Cycle"], ["Prince 2"], ["People Management", People]]}>
                        
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
                        overviewItems={[["Some Skill"], ["Some Skill"]]}>
                        
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
                        overviewItems={[["ASP .NET", Asp], ["netCore", Netcore], ["React", ReactImg], ["Javascript", Javascript], ["UI/UX", UiUx], ["Responsive", Responsive]]}>
                        
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
                        overviewItems={[["Xamarin", Xamarin], ["React Native", ReactImg], ["Cross-platform", CrossPlatform]]}>
                        
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
                </div> */}
            </div>
        );
    }
}

export default Services;