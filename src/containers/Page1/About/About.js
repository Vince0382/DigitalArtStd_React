import React from 'react';

import Button from '../../../components/UI/Button/Button';
import AnimatedText from '../../../components/Animated/Text/AnimatedText';
import ScrollTo from '../../../hoc/scrollToComponent';

import classes from './About.css';

const about = props  => {
    return (
        <div className={classes.About} id='whoweare'>
            <div className={classes.Content + " " + props.contentStyle}>
                <AnimatedText className={classes.Header}>Design. Innovate. Create.</AnimatedText>
                <AnimatedText delay="0.3s"><p>We are a young and innovative company at the cutting edge of technology.</p></AnimatedText>
                <AnimatedText delay="0.4s"><p>We aim to provide the best quality in terms of design, development and performance to insure the best user experience as possible and help you to improve your business.</p></AnimatedText>
                <AnimatedText delay="0.5s"><p>All our final products are cross-platform and fully responsive!</p></AnimatedText>
                <AnimatedText delay="0.6s">
                    <div className={classes.Button}>  
                        <ScrollTo element="#contact-us">
                            <Button clicked=""
                                color="white"
                                bgColor1="#1E1D1C">Contact Us
                            </Button> 
                        </ScrollTo>
                    </div>
                </AnimatedText>
            </div>
        </div>
    );
}

export default about;