import React from "react";

// reactstrap components
import { Button, UncontrolledTooltip } from "reactstrap";

const ButtonWithTooltip = props => {

    return (
        <React.Fragment>
            <Button
                className="btn-just-icon btn-neutral mr-1"
                id={props.id}
                color="link"
                onClick={e => e.preventDefault()}>
                
                {props.children}
            </Button>
            <UncontrolledTooltip placement={'bottom'} target={props.id}>
                {props.tooltip}
            </UncontrolledTooltip>
        </React.Fragment>
    );
}

export default ButtonWithTooltip;