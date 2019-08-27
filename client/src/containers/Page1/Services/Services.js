import React, { useState } from 'react';
import tinycolor from 'tinycolor2';

import classes from './Services.css';

import AnimatedMask from '../../../components/Animated/Mask/AnimatedMask';
import AnimatedText from '../../../components/Animated/Text/AnimatedText';
import AnimatedImages from '../../../components/Animated/Image/AnimatedImages';
import Service from './Service/Service';
import AnimatedScale from '../../../components/Animated/Scale/AnimatedScale';
import ParallaxImage from '../../../components/ParallaxImage/ParallaxImage';

import Service_Web from '../../../assets/images/services_website.jpg';
import Service_Mobile from '../../../assets/images/services_mobile.jpg';
import Service_Design from '../../../assets/images/services_design.jpg';
import Service_marketing from '../../../assets/images/services_marketing.jpg';

const Services = props => {

    const defaultAlpha = .4;
    const defaultColor = "#c8c8c8";
    const images = [Service_Web, Service_Mobile, Service_Design, Service_marketing];


    const [currentColor, setCurrentColor] = useState( defaultColor );
    const [currentImage, setCurrentImage] = useState( Service_Web );

    const getRGBAColor = ( color, alpha ) => {
        const shadowColor = tinycolor(color ? color : defaultColor);
        return shadowColor.setAlpha( alpha? alpha : defaultAlpha );
    }

    const setServiceCallBack = ( color, image ) => {
        // requestAnimationFrame(() =>setCurrentColor( color ));
        // requestAnimationFrame(() => setCurrentImage( image ));
        setCurrentColor( color );
        setCurrentImage( image );
    }

    return (
        <div className={classes.Services} data-clippath={classes.SwitchColor} id="services">
            
            <AnimatedMask className={classes.Mask} style={{background: "black", position: "absolute", zIndex: "300"}} delay="0.5s" start="100"/>
            
            <AnimatedText className={classes.Header}>
                <div className={props.contentStyle}>What We Do</div>
            </AnimatedText>

            <div className={classes.Content}>

                <div className={classes.FlexRow}>

                    <div className={classes.Right} style={{backgroundColor: getRGBAColor( currentColor, 0.5 )}}>
            
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
                                        svgColor="#3778C2"
                                        callBack={setServiceCallBack}
                                        shadowColor={getRGBAColor( "#3778C2" )}>
                                        
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
                                        svgColor="#293E56"
                                        callBack={setServiceCallBack}
                                        shadowColor={getRGBAColor( "#293E56" )}>
                                        
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
                                        svgColor="#d46935"
                                        callBack={setServiceCallBack}
                                        shadowColor={getRGBAColor( "#d46935" )}>
                                        
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
                                        svgColor="#BECB73"
                                        callBack={setServiceCallBack}
                                        shadowColor={getRGBAColor( "#BECB73" )}>
                            </Service>
                            
                        </div>
                    </div>
                
                    <div className={classes.ImageWrapper} style={{boxShadow: "0 100px 200px " + getRGBAColor( currentColor ).toRgbString(), background: currentColor}}>
                        <div>
                            <ParallaxImage>
                                <AnimatedImages images={images} currentImage={currentImage} />
                            </ParallaxImage>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default Services;