import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';

import * as actions from '../../store/actions';

import classes from './Footer.css';
import SocialBar from '../../components/SocialBar/SocialBar';
import logo from '../../assets/images/Digital_small.svg';


const footer = props => {
    const color = "white";

    return (
        <div className={classes.Footer} style={{color: color}} id="footer">

            <div className={classes.Logo}>
                <SVG src={logo} />
            </div>
            <div className={classes.Container}>
               
            </div>
            
            <SocialBar className={classes.SocialBar} size="20px"/>

            <div className={classes.MobileNav}>
                <Link style={{color: color }} to="/terms">Terms and Services</Link>
                <Link style={{color: color}} to="/privacy">Privacy Policy</Link>
            </div>

            <div className={classes.Copyright}>© Digital Art Studio - All Rights Reserved {(new Date()).getFullYear()}</div>
        </div>

    );
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(footer);