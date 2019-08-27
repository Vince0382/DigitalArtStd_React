import React from 'react';
import IntersectionVisible from 'react-intersection-visible';
import tinycolor from 'tinycolor2';

import classes from './Service.css';

import TextSVG from '../../../../components/TextSVG/TextSVG';
import Button from '../../../../components/UI/Button/Button';
import AnimatedMask from '../../../../components/Animated/Mask/AnimatedMask';
import AnimatedScale from '../../../../components/Animated/Scale/AnimatedScale';
import AnimatedText from '../../../../components/Animated/Text/AnimatedText';
import ParallaxImage from '../../../../components/ParallaxImage/ParallaxImage';

const service = props => {

    return (
        <div className={classes.Content}>

            {/* Mobile Only */}
            <div className={classes.ImageWrapper} style={{background: props.shadowColor}}>
                <div>
                    <ParallaxImage>
                        <img src={props.image} />
                    </ParallaxImage>
                </div>
            </div>
            
            <div className={classes.Text}>

                <IntersectionVisible onShow={() => props.callBack( props.svgColor, props.image )}> 
                    <AnimatedText>
                        <div>
                            <p className={classes.Header}>{props.header}</p>
                        </div>
                    </AnimatedText>
                </IntersectionVisible>

                {
                    props.content 
                        ?   props.content.map( paragraph => (
                                <AnimatedText>
                                    <p className={classes.Paragraph}>
                                        {paragraph}
                                    </p>
                                </AnimatedText>
                        ))
                        :   null
                }
                <div className={classes.Button}>
                    <Button type={"link"}
                            element={"#contact"}
                            color={"black"}
                            bgColor1={props.shadowColor}>{props.buttonText}</Button>
                </div>
                
            </div>
            <div className={classes.Title}>
                <div className={classes.TextSVG} style={{color: props.svgColor}}>
                    {props.title}
                </div>
            </div>
            
        </div>


    );
}

export default service;