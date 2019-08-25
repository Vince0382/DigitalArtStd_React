import React, { useState, useEffect } from 'react';
import {CSSTransition} from 'react-transition-group';

import classes from './TransitionWrapper.css';

const TransitionWrapper = props => {

    const [active, setActive] = useState( false );

    useEffect(() => {
        setActive( true );
    },[]);

    return (
            <CSSTransition 
                            in={active}
                            timeout={{ enter: 700, exit: 700 }}
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
    );
}

export default TransitionWrapper;