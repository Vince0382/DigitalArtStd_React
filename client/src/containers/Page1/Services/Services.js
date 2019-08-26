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

            <div className={classes.Content}>
                
                <div className={classes.ServicesItems}>
                        <Service    image={Service_Web}
                                    buttonText={"Start your website"}
                                    title="WebSites"
                                    header="Empowering your web identity"
                                    content={[
                                        "It's how the world sees you!",
                                        "We build modern responsive websites with great design that ignite your business.",
                                        "Intelligent websites. Real results."
                                    ]}
                                    svgColor="#3778C2">
                                    
                        </Service>
                        <Service    image={Service_Mobile}
                                    buttonText={"Get your Application"}
                                    title="Mobile"
                                    header="Experience digital innovation"
                                    content={[
                                        "It's how the world sees you!",
                                        "We build modern responsive websites with great design to provide the best user experience and conversion rate as possible.",
                                        "Intelligent websites. Real results."
                                    ]}
                                    svgColor="#293E56">
                                    
                        </Service>
                        <Service    image={Service_Design}
                                    buttonText={"Improve your business"}
                                    title="Design"
                                    header="Design is intelligence made visible"
                                    content={[
                                        "It's how the world sees you!",
                                        "We build modern responsive websites with great design to provide the best user experience and conversion rate as possible.",
                                        "Intelligent websites. Real results."
                                    ]}
                                    svgColor="#d46935">
                                    
                        </Service>
                        <Service    image={Service_marketing}
                                    buttonText={"Get Results Now"}
                                    title="Marketing"
                                    header="Revenue through results"
                                    content={[
                                        "It's how the world sees you!",
                                        "We build modern responsive websites with great design to provide the best user experience and conversion rate as possible.",
                                        "Intelligent websites. Real results."
                                    ]}
                                    svgColor="#BECB73">
                        </Service>
                        
                    </div>
            </div>
            
        </div>
    );
}

export default services;