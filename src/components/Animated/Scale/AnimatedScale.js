import React, { useState } from 'react';
import IntersectionVisible from 'react-intersection-visible';

const AnimatedScale = props => {

    const [scale, setScale] = useState ( 0 )

    const onInViewPort = () => {
        setScale( 1 );
    }

    const onOutViewPort = () => {
        setScale( 0 );
    }

    const style = {
        ...props.style, 
        width: "100% ", 
        height: "100%", 
        transform: `scale(${scale})`,
        transition: "all .5s cubic-bezier(0.165, 0.840, 0.440, 1.000)", 
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

export default AnimatedScale;