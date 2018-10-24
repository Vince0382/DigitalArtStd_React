import React from 'react';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';

import classes from './SendButton.css';

const sendButton = (props) => {

    let title = '';
    if (props.disabled) {
        title = props.title;
    }
    return (
        <Tooltip title={title}>
            <span>
                <Button variant="contained" disabled={props.disabled} type="submit">
                    {props.children}
                    <Icon className={classes.Icon}>send</Icon>
                </Button>
            </span>
        </Tooltip>
    );


};

export default sendButton;