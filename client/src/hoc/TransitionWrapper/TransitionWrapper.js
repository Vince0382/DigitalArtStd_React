import React, { Component } from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import classes from './TransitionWrapper.css';

class TransitionWrapper extends Component {
    constructor (props){
        super(props);
        this.sectionRef = React.createRef();
        this.state = {
            style : {
                height: '0'
            }
        }
    }

    updateSectionHeight = () => {
        if (this.sectionRef.current){
            if (this.state.style.height != this.sectionRef.current.clientHeight) {
                this.setState({
                    style: {
                        height: this.sectionRef.current.clientHeight
                    }
                });
            }
        } 
    }

    componentDidUpdate = () => {
        this.updateSectionHeight();
    }

    componentDidMount = () => {
        this.updateSectionHeight();

    }

    render () {

        
        return (
            <TransitionGroup className={classes.TransitionGroup} style={this.state.style}>
                <CSSTransition 
                              key={this.props.location.key}
                              timeout={{ enter: 500, exit: 500 }}
                              classNames={{
                                enter: classes.Enter,
                                enterActive: classes.EnterActive,
                                exit: classes.Exit,
                                exitActive: classes.ExitActive
                              }}
                              mountOnEnter
                              unmountOnExit>
                    <div className={classes.SectionRoute} ref={this.sectionRef}>
                        {this.props.children}
                    </div>
                </CSSTransition>
              </TransitionGroup>
        );
    }
}

export default TransitionWrapper;