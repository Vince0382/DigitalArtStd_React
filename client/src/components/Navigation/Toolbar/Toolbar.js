import React from 'react';
import { withRouter } from 'react-router-dom';
import SVG from 'react-inlinesvg';

import classes from './Toolbar.css';
import Logo from '../../../assets/images/Digital_small.svg';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const Toolbar = props => {

    let attachedClasses = [classes.Toolbar];

    if (props.scrolled && !attachedClasses.includes(classes.Active)) {
        attachedClasses.push(classes.Active);
        if (window.location.pathname !== '/')
        {
            attachedClasses.push(classes.BgWhite);
        }
    }

    return (
        <header className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <SVG src={Logo}/>
            </div>
            {/* <nav className={classes.DesktopOnly}>
                {!bottom? <NavigationItems color={props.color}/> : null}
            </nav> */}
            <div className={classes.Controls}>
                {
                    window.location.pathname !== '/' 
                        ?   <div className={classes.BackButton} onClick={() => props.history.goBack()}>&#8592; Go back</div>
                        :   null
                }

                <DrawerToggle   style={{stroke: props.color}}
                                open={props.open}
                                clicked={props.clicked}/>
            </div>

        </header>
    );
}

export default withRouter( Toolbar );