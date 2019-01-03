import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';

import * as actions from '../../store/actions';

import classes from './Footer.css';
import Logo from '../../components/Logo/Logo';
import SiteMapItem from '../../components/Navigation/SiteMap/SiteMapItem';
import SocialBar from '../../components/SocialBar/SocialBar';

import Map from '../../assets/images/map.svg';
import About from '../../assets/images/about_footer.svg';
import Services from '../../assets/images/service.svg';
import Legal from '../../assets/images/legal_footer.svg';

const footer = (props) => {
    const color = "white";

    return (
        <div className={classes.Footer} style={{color: color}} id="footer">

            <div className={classes.Logo}>
                <Logo />
            </div>
            <div className={classes.Container}>
                <div className={classes.Text}>

                    <div className={classes.Nav}>
                        <div className={classes.Title}>
                            <SVG src={About} style={{fill: color, paddingRight: "5px"}}/>
                            <p>About Us</p>
                        </div>
                        <ul className={classes.SiteMapItems}>
                            <SiteMapItem color={color} link="/#whoweare" >Who We Are</SiteMapItem>
                            <SiteMapItem color={color} link="/#whatwedo" >What We Do</SiteMapItem>
                            <SiteMapItem color={color} link="/#team">Team</SiteMapItem>
                            <SiteMapItem color={color} type="function" link="#" clickHandler={props.clickHandler} >Contact</SiteMapItem>
                        </ul>
                    </div>

                    <div className={classes.Nav}>
                    <div className={classes.Title}>
                            <SVG src={Services} style={{fill: color, paddingRight: "5px"}}/>
                            <p>Services</p>
                        </div>
                        <ul className={classes.SiteMapItems}>
                            <SiteMapItem link="/#services" color={color}>Our Practice Areas</SiteMapItem>
                        </ul>
                    </div>

                    <div className={classes.Nav}>
                    <div className={classes.Title}>
                            <SVG src={Legal} style={{fill: color, paddingRight: "5px"}}/>
                            <p>Legal</p>
                        </div>
                        <ul className={classes.SiteMapItems}>
                            <SiteMapItem link="/terms" color={color} toTop>Terms and Conditions</SiteMapItem>
                            <SiteMapItem link="/privacy" color={color} toTop>Privacy Policy</SiteMapItem>
                        </ul>
                    </div>

                    {/* <div className={classes.Nav}>
                    <div className={classes.Title}>
                            <SVG src={Social} style={{fill: color, paddingRight: "5px"}}/>
                            <p>Social</p>
                        </div>
                        <ul className={classes.SiteMapItems}>
                            <SiteMapItem color={color} callBack={props.callBack} link="/blog" toTop>Blog</SiteMapItem>
                            <SiteMapItem color={color} type="external" link="https://www.linkedin.com/company/rise-up-luxebmourg">LinkedIn</SiteMapItem>
                        </ul>
                    </div> */}


                </div>

                <div className={classes.Map}>
                    <div className={classes.Left}>
                        <div>
                            <p>RiseUp S.A.R.L.</p>
                            <p>14, Rue des Romains</p>
                            <p>L-8537 Hostert</p>
                            <p>Luxembourg</p>
                        </div>
                    </div>
                    <div className={classes.Right}>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.google.lu/maps/place/Rise+Up+sarl/@49.725357,5.7572419,9.47z/data=!4m5!3m4!1s0x47eaa921a3e697c1:0xeebf7a40f12a8842!8m2!3d49.8065337!4d5.8703319">
                            <SVG src={Map} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={classes.SocialBar}>
                <SocialBar color={color} size="25px"/>
            </div>

            <div className={classes.MobileNav}>
                <Link style={{color: color }} to="/terms">Terms and Services</Link>
                <Link style={{color: color}} to="/privacy">Privacy Policy</Link>
            </div>

            <div className={classes.Copyright}>© RiseUp S.A.R.L - All Rights Reserved {(new Date()).getFullYear()}</div>
        </div>

    );
}

const mapStateToProps = state => {
    return {
        showModal: state.showModal,
        color: state.textColor,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowModal: () => dispatch(actions.showModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(footer);