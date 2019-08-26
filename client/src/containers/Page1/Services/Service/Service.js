import React from 'react';
import tinycolor from 'tinycolor2';

import classes from './Service.css';

import TextSVG from '../../../../components/TextSVG/TextSVG';
import Button from '../../../../components/UI/Button/Button';
import AnimatedMask from '../../../../components/Animated/Mask/AnimatedMask';
import AnimatedScale from '../../../../components/Animated/Scale/AnimatedScale';
import AnimatedText from '../../../../components/Animated/Text/AnimatedText';
import ParallaxImage from '../../../../components/ParallaxImage/ParallaxImage';

const service = props => {

    const alpha = .2;
    const defaultColor = "#c8c8c8";

    const shadowColor = tinycolor(props.svgColor? props.svgColor : defaultColor);
    shadowColor.setAlpha(alpha);

    return (
        <div className={classes.Service}>
            <div className={classes.Right} style={{background: props.svgColor, opacity: '0.7'}}>
                <div className={classes.ImageWrapper} style={{boxShadow: "0 100px 200px " + shadowColor.toRgbString(), background: props.svgColor}}>
                    <AnimatedScale>
                        <ParallaxImage>
                            <img src={props.image} />
                        </ParallaxImage>
                    </AnimatedScale>
                </div>
            </div>

            <div className={classes.Content}>
                <div className={classes.Text}>
                    <AnimatedText>
                        <div>
                            <p className={classes.Header}>{props.header}</p>
                        </div>
                    </AnimatedText>
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
                        <Button clicked={props.clicked}
                                color={"black"}
                                bgColor1={shadowColor}>{props.buttonText}</Button>
                    </div>
                </div>
                <div className={classes.Title}>
                    <TextSVG className={classes.TextSVG} svgColor={props.svgColor}>
                        {props.title}
                    </TextSVG>
                </div>
            </div>

        </div>
    );
}

export default service;