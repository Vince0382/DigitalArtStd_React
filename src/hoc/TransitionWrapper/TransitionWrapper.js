import React, { useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import classes from './TransitionWrapper.css';

const transitionWrapper = props => {   

    let childElement = useRef( false );

    useEffect(() => {
        console.log(childElement.current.offsetHeight)
    }, [props.location.pathname]);

    return (
        <TransitionGroup className={classes.OuterDiv}>
            <CSSTransition 
                            key={props.location.pathname}
                            timeout={300}
                            classNames={{
                            enter: classes.Enter,
                            enterActive: classes.EnterActive,
                            exit: classes.Exit,
                            exitActive: classes.ExitActive
                            }}
                            >

                    <div 
                        ref={childElement}
                        className={classes.InnerDiv}>
                        
                        { props.children }
                    </div>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default transitionWrapper;