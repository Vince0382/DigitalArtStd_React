import React, { useState } from 'react';
import IntersectionVisible from 'react-intersection-visible';

const AnimatedRoundedMask = props => {

    const [style, setStyle] = useState( {
        scale: 1,
        opacity: 1
    });

    const onInViewPort = () => {
        setStyle( {scale: 0, opacity: 0} );
    }

    const onOutViewPort = () => {
        setStyle( {scale: 1, opacity: 1} );
    }

    const delay = props.delay ? props.delay : "0.3s";
    const duration = props.duration ? props.duration : "0.9s";
    
    return (
        <IntersectionVisible 
        onIntersect={(entries) => console.log(entries)}
        onShow={onInViewPort} 
        onHide={onOutViewPort}
        className={props.className}>
            
            <div style={{
                    ...props.style, 
                    transform: "scaleY(" + style.scale + ")" , 
                    transition: duration + " " + delay + " all cubic-bezier(0.550, 0.085, 0.680, 0.530)", 
                    transformOrigin: "center",
                    width: "100%",
                    height: "100%",
                    opacity: style.opacity,
                    position: "absolute",
                    top: 0,
                    left: 0
                    }}>
                    
            </div>

            {props.children}

        </IntersectionVisible>
    );
}

export default AnimatedRoundedMask;