import React from 'react';
import SVG from 'react-inlinesvg';

import classes from './Services.css';

import AnimatedMask from '../../../components/Animated/Mask/AnimatedMask';
import AnimatedText from '../../../components/Animated/Text/AnimatedText';
import Service from './Service/Service';

import Service_Web from '../../../assets/images/services_website.jpg';
import Service_Mobile from '../../../assets/images/services_mobile.jpg';
import Service_Design from '../../../assets/images/services_design.jpg';
import Service_marketing from '../../../assets/images/services_marketing.jpg';

const services = props => {
    return (
        <div className={classes.Services} data-clippath={classes.SwitchColor}>
            
            <AnimatedMask className={classes.Mask} style={{background: "black", position: "absolute", zIndex: "300"}} delay="0.5s" start="100"/>
            
            <AnimatedText className={classes.Header}>
                <div className={props.contentStyle}>What We Do</div>
            </AnimatedText>

            <div className={classes.Content + " " + props.contentStyle}>
                
                <div className={classes.ServicesItems}>
                        <Service    image={Service_Web}
                                    buttonText={"Start your website"}
                                    title="WebSites"
                                    svgColor="#3778C2">
                                    <AnimatedText><p className={classes.ItemHeader}>Empowering your web identity</p></AnimatedText>
                                    <AnimatedText><p>It's how the world sees you!</p></AnimatedText>
                                    <AnimatedText><p>We build modern responsive websites with great design that ignite your business. </p></AnimatedText>
                                    <AnimatedText><p>Intelligent websites. Real results.</p></AnimatedText>
                                    
                        </Service>
                        <Service    image={Service_Mobile}
                                    buttonText={"Get your Application"}
                                    title="Mobile"
                                    svgColor="#293E56">
                                    <AnimatedText><p className={classes.ItemHeader}>Experience digital innovation</p></AnimatedText>
                                    <AnimatedText><p>It's how the world sees you!</p></AnimatedText>
                                    <AnimatedText><p>We build modern responsive websites with great design to provide the best user experience and conversion rate as possible. </p></AnimatedText>
                                    <AnimatedText><p>Intelligent websites. Real results.</p></AnimatedText>
                                    
                        </Service>
                        <Service    image={Service_Design}
                                    buttonText={"Improve your business"}
                                    title="Design"
                                    svgColor="#d46935">
                                    <AnimatedText><p className={classes.ItemHeader}>Design is intelligence made visible</p></AnimatedText>
                                    <AnimatedText><p>It's how the world sees you!</p></AnimatedText>
                                    <AnimatedText><p>We build modern responsive websites with great design to provide the best user experience and conversion rate as possible. </p></AnimatedText>
                                    <AnimatedText><p>Intelligent websites. Real results.</p></AnimatedText>
                                    
                        </Service>
                        <Service    image={Service_marketing}
                                    buttonText={"Get Results Now"}
                                    title="Marketing"
                                    svgColor="#BECB73">
                                    <AnimatedText><p className={classes.ItemHeader}>Revenue through results</p></AnimatedText>
                                    <AnimatedText><p>Let us show you the power of the modern digital marketing</p></AnimatedText>
                                    <AnimatedText><p>Facebook advertising, Google Ads, SEO... We can help you to focus on targeted audience to maximize your advertising results </p></AnimatedText>
                                    {/* <SVG style={{position:"absolute", width: "100%"}} src={Fiancial} /> */}
                        </Service>
                        
                    </div>
            </div>
            
        </div>
    );
}

export default services;