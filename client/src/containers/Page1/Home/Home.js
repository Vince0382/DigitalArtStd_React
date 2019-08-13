import React from 'react';
import SVG from 'react-inlinesvg';

import classes from './Home.css';

import SocialBar from '../../../components/SocialBar/SocialBar';
import Button from '../../../components/UI/Button/Button';

import backImg from '../../../assets/images/back.jpg';
import logo from '../../../assets/images/Digital_small_reverse.svg';

const home = ( props ) => {

    let logoClass = classes.LogoShow;
    let itemClass = classes.ItemShow;
    let socialClass = classes.SocialBarOpen;
    let buttonClass = classes.ButtonMaskVisible;

    if (props.scrolled) {
        logoClass = classes.LogoHide;
        itemClass = classes.ItemHide;
        socialClass = classes.SocialBarClose;
        buttonClass = "";
    }

    return (
        <div className={classes.Home}>
            <img className={classes.BackImg} src={backImg} />

            <div className={classes.Content}>
                <div className={classes.Logo + ' ' + logoClass}><SVG src={logo} /></div>

                <div className={classes.Services}>
                        <div className={classes.Item + ' ' + itemClass}>Inspired</div>
                        <div className={classes.Item + ' ' + itemClass}>Digital</div>
                        <div className={classes.Item + ' ' + itemClass}>Solutions.</div>
                        <div className={classes.Item + ' ' + itemClass}>We are creative, passionated and innovative designers and developpers</div>
                        <div className={classes.ButtonMask + ' ' + buttonClass}>
                            <div className={classes.Button}>
                                <Button clicked={props.clicked}
                                    color={"white"}
                                    bgColor1="#1E1D1C">See who we are
                                </Button> 
                            </div>
                        </div>
                </div>
            </div>
            <SocialBar className={classes.SocialBar + ' ' + socialClass} size="30px"/>
        </div>
    );
}

export default home;