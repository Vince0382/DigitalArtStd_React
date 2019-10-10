import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import classes from './TransitionWrapper.css';

const transitionWrapper = props => {   

    return (
        <TransitionGroup>
            <CSSTransition 
                            key={props.location.key}
                            timeout={{ enter: 500, exit: 500 }}
                            classNames={{
                            enter: classes.Enter,
                            enterActive: classes.EnterActive,
                            exit: classes.Exit,
                            exitActive: classes.ExitActive
                            }}
                            mountOnEnter
                            unmountOnExit>

                    { props.children }
            </CSSTransition>
        </TransitionGroup>
    );
}

export default transitionWrapper;