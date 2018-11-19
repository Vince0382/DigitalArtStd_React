import React from 'react';
import { Link } from 'react-router-dom';

import ScrollTo from '../../hoc/scrollToComponent';
import classes from './About.css';
import AboutImg from '../../assets/images/aboutus.svg';
import Sticker from '../Sticker/Sticker';
import Button from '../UI/Button/Button';

const about = (props) => {
    const localTextColor = "rgb(7, 87, 119)";

    return (
        <div className={classes.MainDiv}>
            <div className={classes.Image}>
                <img src={AboutImg}/>   
            </div>
            <div className={classes.Content} style={{color: localTextColor}}>
                <h2>RiseUp! A young and innovative start-up at the cutting edge of technology</h2>
                <p>Our expertise is focused on IT Services and development of innovative cross-platform and fully responsive mobile and web applications</p>

                <h2>What we do:</h2>
                <ul className={classes.Stickers}>
                    <li><Sticker color="white" bgColor={localTextColor}>IT Services (Microsoft Technologies)</Sticker></li>
                    <li><Sticker color="white" bgColor={localTextColor}>Project Management</Sticker></li>
                    <li><Sticker color="white" bgColor={localTextColor}>People Management</Sticker></li>
                    <li><Sticker color="white" bgColor={localTextColor}>Mobile Applications</Sticker></li>
                    <li><Sticker color="white" bgColor={localTextColor}>Web Applications</Sticker></li>
                    <li><Sticker color="white" bgColor={localTextColor}>Application Lifecycle Management</Sticker></li>
                    <li><Sticker color="white" bgColor={localTextColor}>Architecture of Entreprise Applications</Sticker></li>
                </ul>
                <div className={classes.NavigationItem}>
                    <Button color={localTextColor}
                            borderColor={localTextColor}
                            bgColor2={localTextColor}
                            bgColor1="#3D9842"
                            clicked={props.clicked}>
                        <ScrollTo style={{color: 'inherit', textDecoration: 'none'}} element="/#services">Learn More</ScrollTo>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default about;