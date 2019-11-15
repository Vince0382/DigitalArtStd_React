import React from 'react';
import SVG from 'react-inlinesvg';

import classes from './Home.css';

import SocialBar from '../../../components/SocialBar/SocialBar';
import Button from '../../../components/UI/Button/Button';
import ScrollTo from '../../../hoc/scrollToComponent';

import backImg from '../../../assets/img/home/back.jpg';
import logo from '../../../assets/img/home/Digital_small_reverse.svg';

const home = props  => {

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
            <img className={classes.BackImg} src={backImg} alt=''/>

            <div className={classes.Content}>
                <div className={classes.Logo + ' ' + logoClass}><SVG src={logo} /></div>
            
                <div className={classes.Services}>
                        <h2 className={classes.Item + ' ' + itemClass}>Inspired</h2>
                        <h2 className={classes.Item + ' ' + itemClass}>Digital</h2>
                        <h2 className={classes.Item + ' ' + itemClass}>Solutions.</h2>
                        <h3 className={classes.Item + ' ' + itemClass}>We are creative, passionated and innovative designers and developpers</h3>
                        <div className={classes.ButtonMask + ' ' + buttonClass}>
                            <div className={classes.Button}>
                                <ScrollTo element="/#whoweare">
                                    <Button clicked={props.clicked}
                                        color={"white"}
                                        bgColor1="#1E1D1C">See who we are
                                    </Button> 
                                </ScrollTo>
                            </div>
                        </div>
                </div>
            </div>
            <SocialBar className={classes.SocialBar + ' ' + socialClass} size="30px"/>
        </div>
    );
}

export default home;