import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import classes from './AboutContact.css';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import About from '../../components/About/About';
import Contact from '../Contact/Contact';
import * as actions from '../../store/actions';
import CloseButton from '../../components/UI/Button/CloseButton/CloseButton';

 

class AboutContact extends Component {

    render () {

        return (
            <div>
                <Backdrop show={this.props.showModal} clicked={this.props.onShowModal} />
                <CSSTransition
                            mountOnEnter
                            unmountOnExit
                            in={this.props.showModal}
                            timeout={500}
                            classNames={{
                                enter: classes.OpenCloseEnter,
                                enterActive: classes.OpenCloseEnterActive,
                                exit: '',
                                exitActive: classes.OpenCloseExitActive
                            }}>
                    <div className={classes.AboutContact}>
                                <div className={classes.Contact}>
                                    <div className={classes.Close}>
                                        <CloseButton 
                                                    clicked={this.props.onShowModal} 
                                                    cross={this.props.showModal}
                                                    color="white"/>
                                    </div>
                                    <div className={classes.Content}>
                                        <Contact show={this.props.showModal}/>
                                    </div>
                                </div>
                                <div className={classes.About}>
                                    <About  show={this.props.showModal}
                                            clicked={this.props.onShowModal}
                                            color={this.props.textColor}/>
                                </div>
                    </div>
                </CSSTransition>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        showModal: state.showModal,
        textColor: state.textColor
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowModal: () => dispatch(actions.showModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContact);