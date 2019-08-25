import React from 'react';
import { Loader } from 'semantic-ui-react';
import { CSSTransition } from 'react-transition-group';

import classes from './Spinner.css';

const spinner = (props) => (
    <div className={[classes.Spinner, props.className].join(' ')} style={props.style}>
        <CSSTransition 
                in={true}
                unmountOnExit
                timeout={200}
                classNames={{
                    enter: classes.Enter,
                    enterActive: classes.EnterActive,
                    exit: classes.Exit,
                    exitActive: classes.ExitActive
                }}
                >
            
                <Loader active inline='centered'>{props.children}</Loader>

        </CSSTransition>
    </div>
    
);

export default spinner;