import React, { useState } from 'react';
import IntersectionVisible from 'react-intersection-visible';

const OnScreen = props => {

    const [attachedClass, setAttachedClass] = useState( null );

    const onInViewPort = () => {
        setAttachedClass( props.OnClass );
    }

    const onOutViewPort = () => {
        setAttachedClass( null );
    }

    return (
        <IntersectionVisible 
                            onShow={onInViewPort} 
                            onHide={onOutViewPort} 
                            className={[props.className, attachedClass].join(' ')}
                            options={{threshold: [0.3, 0.5]}}>
                
                {props.children}
        </IntersectionVisible>
    );
}

export default OnScreen;