import React, { useState } from 'react';
import IntersectionVisible from 'react-intersection-visible';

const AnimatedText = props => {

    const [style, setStyle] = useState({
        transform: "translateY(100%)",
        opacity: "0"
    });

    const onInViewPort = () => {
        const newStyle = {transform: "translateY(0)", opacity: "1" }
        setStyle( newStyle );
    }

    const onOutViewPort = () => {
        const newStyle = {transform: "translateY(100%)", opacity: "0" }
        setStyle( newStyle );
    }

    const delay = props.delay ? props.delay : "0.2s";
    const duration = props.duration ? props.duration : "0.8s";

    return (
        <IntersectionVisible 
        onShow={onInViewPort} 
        onHide={onOutViewPort}
        className={props.className}>
            
            <div style={{...style, ...props.style, transition: `${duration} ${delay} all ease-out`}}>
                {props.children}
            </div>

        </IntersectionVisible>
    );
}

export default AnimatedText;