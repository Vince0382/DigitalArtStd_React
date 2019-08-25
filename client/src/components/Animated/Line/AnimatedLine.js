import React, { useState } from 'react';
import IntersectionVisible from 'react-intersection-visible';

const AnimatedLine = props => {


    const currentHeight = props.start ? props.start : 0;

    const [height, setHeight] = useState( currentHeight );

    const onInViewPort = () => {
        setHeight( currentHeight - 100 );
    }

    const onOutViewPort = () => {
        setHeight( currentHeight );
    }

    const delay = props.delay ? props.delay : "0.3s";
    const duration = props.duration ? props.duration : "0.9s";
    
    return (
        <IntersectionVisible 
        onIntersect={(entries) => console.log(entries)}
        onShow={onInViewPort} 
        onHide={onOutViewPort}
        className={props.className}>
            
            <div style={{...props.style, height: height + "% ", transition: duration + " " + delay + " all ease-out"}}>
            </div>

        </IntersectionVisible>
    );
}

export default AnimatedLine;