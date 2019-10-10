import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './Service.css';
import * as actions from '../../../../store/actions';

const CONTROLS_COLOR = 'black';

const Service = props => {

    useEffect(() => {
        props.onChangeColor();
    }, []);

    return (
        <div data-clippath={classes.SwitchColor}>
            <div className={classes.Back} onClick={() => props.history.goBack()}>&#8592; Go back</div>
            <div className={classes.Content}>   
                {props.children}
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeColor: () => dispatch( actions.changeControlsColor( CONTROLS_COLOR ) )
    }
}

export default connect( null, mapDispatchToProps)( withRouter( Service ));