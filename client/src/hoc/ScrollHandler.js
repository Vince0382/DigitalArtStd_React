import React, { useEffect } from 'react';

const ScrollHandler = props => {

    let scrollTimeout = null;
    const timeOut = 16; // 16ms to allow 60fps rendering

    const handleScroll = ( event ) => {
        if ( scrollTimeout ) {
            // clear the timeout, if one is pending
            clearTimeout( scrollTimeout  );
            scrollTimeout = null;
        }
        scrollTimeout = setTimeout(() => {
            if ( props.onWindowScroll ) props.onWindowScroll( event );
        }, 16);
    }

    useEffect(() => {
        if (props.onWindowScroll) window.addEventListener( "scroll", handleScroll );
        return () => {
            if (props.onWindowScroll) window.removeEventListener( "scroll", handleScroll );
        }
    },[]);

    return props.children;
}

export default ScrollHandler;