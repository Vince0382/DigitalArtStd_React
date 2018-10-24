import React from 'react';

import classes from './Input.css';

const input = ( props ) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    const style = {
        borderBottom : '1px solid ' + props.borderColor
    }

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    const labelClasses = [classes.Label];
    if (props.touched) {
        labelClasses.push(classes.LabelActive);
    }


    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                style={style}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                style={style}
                onChange={props.changed} />;
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                style={style}
                onChange={props.changed} />;
    }

    return (
        <div className={classes.Input}>
            <label className={labelClasses.join(' ')}>{props.elementConfig.placeholder}</label>
            {inputElement}
        </div>
    );

};

export default input;