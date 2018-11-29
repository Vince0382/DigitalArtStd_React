import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';

import classes from './TransitionWrapper.css';

class TransitionWrapper extends Component {
    constructor (props){
        super(props);
        this.sectionRef = React.createRef();
        this.state = {
            active: false
        }
    }

    componentDidMount () {
        this.setState({active: true});
    }

    componentWillUnmount () {
        this.setState({active: false});
    }

    render () {
        
        return (
                <CSSTransition 
                              in={this.state.active}
                              timeout={{ enter: 700, exit: 700 }}
                              classNames={{
                                enter: classes.Enter,
                                enterActive: classes.EnterActive,
                                exit: classes.Exit,
                                exitActive: classes.ExitActive
                              }}
                              mountOnEnter
                              unmountOnExit>

                        { this.props.children }
                </CSSTransition>
        );
    }
}

export default TransitionWrapper;