import React, { useState } from 'react';
import IntersectionVisible from 'react-intersection-visible';

const AnimatedMask = props => {

    const currentWidth = props.start ? props.start : 0;

    const [width, setWidth] = useState ( currentWidth )

    const onInViewPort = () => {
        setWidth( - ( currentWidth - 100 ));
    }

    const onOutViewPort = () => {
        setWidth( currentWidth );
    }

    const delay = props.delay ? props.delay : "0.3s";
    const duration = props.duration ? props.duration : "0.9s";

    const style = {
        ...props.style, 
        width: `${width}%`, 
        height: "100%", 
        transition: `${duration} ${delay} all cubic-bezier(0.165, 0.840, 0.440, 1.000)`, 
        overflow: "hidden",
    }

    
    return (
        <IntersectionVisible 
            onIntersect={(entries) => console.log(entries)}
            onShow={onInViewPort} 
            onHide={onOutViewPort}
            className={props.className}>
            
                <div style={style}>
                    {props.children}
                </div>

        </IntersectionVisible>
    );
}

export default AnimatedMask;