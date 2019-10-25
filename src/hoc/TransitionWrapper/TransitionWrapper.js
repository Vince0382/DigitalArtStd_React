import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Spinner } from 'reactstrap';

import classes from './TransitionWrapper.css';

const transitionWrapper = props => {   

    // let childElement = useRef( false );

    // useEffect(() => {
    //     console.log(childElement.current.offsetHeight)
    // }, [props.location.pathname]);

    return (
        <TransitionGroup>
            <CSSTransition 
                            key={props.location.pathname}
                            timeout={1100}
                            classNames={{
                            enter: classes.Enter,
                            enterActive: classes.EnterActive,
                            exit: classes.Exit,
                            exitActive: classes.ExitActive
                            }}
                            >
                <div className={classes.Wrapper}>
                    <div className={classes.Spinner}>
                        <Spinner style={{ width: '25rem', height: '25rem' }} type="grow" />
                    </div>
                    {/* <div className={`${classes.LeftLayer} ${classes.LeftLayer2}`}></div>
                    <div className={`${classes.LeftLayer} ${classes.LeftLayer3}`}></div>
                    <div className={`${classes.LeftLayer} ${classes.LeftLayer4}`}></div>
                    <div className={`${classes.LeftLayer} ${classes.LeftLayer5}`}></div> */}
                    {props.children}
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default transitionWrapper;