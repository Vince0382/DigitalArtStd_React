import React from 'react';

import classes from './Portfolio.css';

import AnimatedRoundedMask from '../../../components/Animated/Mask/AnimatedRoundedMask';
import AnimatedLine from '../../../components/Animated/Line/AnimatedLine';
import Project from './Project/Project';
import Button from '../../../components/UI/Button/Button';

import Riseup1 from '../../../assets/images/Project/RiseUp/Riseup_1.png';
import Riseup2 from '../../../assets/images/Project/RiseUp/Riseup_2.png';
import Riseup3 from '../../../assets/images/Project/RiseUp/Riseup_3.png';
import Riseup4 from '../../../assets/images/Project/RiseUp/Riseup_4.png';
import Riseup5 from '../../../assets/images/Project/RiseUp/Riseup_5.png';
import Riseup6 from '../../../assets/images/Project/RiseUp/Riseup_6.png';
import Riseup7 from '../../../assets/images/Project/RiseUp/Riseup_7.png';
import Riseup8 from '../../../assets/images/Project/RiseUp/Riseup_8.png';
import Riseup9 from '../../../assets/images/Project/RiseUp/Riseup_9.png';
import Riseup10 from '../../../assets/images/Project/RiseUp/Riseup_10.png';
import Riseup11 from '../../../assets/images/Project/RiseUp/Riseup_11.png';

import Departuretime1 from '../../../assets/images/Project/DepartureTime/Departuretime_1.png';
import Departuretime2 from '../../../assets/images/Project/DepartureTime/Departuretime_2.png';
import Departuretime3 from '../../../assets/images/Project/DepartureTime/Departuretime_3.png';


const portfolio = props => {

    return (
        <div className={classes.Portfolio} id="portfolio">
            <AnimatedRoundedMask className={classes.Mask} style={{background: "White", position: "absolute", zIndex: "300"}} delay="0.5s">
                
                <div className={classes.Header}>
                    <div className={props.contentStyle}>Our Work</div>
                </div>

                <div className={classes.Content + " " + props.contentStyle}>

                    {/* <AnimatedLine className={classes.Line} style={{background: "#f7f7f7"}} delay="1.2s" /> */}

                    <Project className={classes.Project} images={[Riseup1, Riseup2, Riseup3, Riseup4, Riseup5, Riseup6, Riseup7, Riseup8, Riseup9, Riseup10, Riseup11]}>
                        <div className={classes.ProjectDesc}>
                            <h1>RiseUp</h1>
                            <h2>Project Description</h2>
                            <p>Consultancy services company showcase website</p>
                            <h2>Work</h2>
                            <p>Design, Development and Hosting</p>
                            <h2>Technology</h2>
                            <p>React.JS - Node.JS</p>
                            <h2>Hosting platform</h2>
                            <p>Google Firebase</p>
                            <Button clicked={props.clicked}
                            color={"white"}
                            bgColor1={"#c8c8c8"}>Go to the website</Button>
                        </div>
                    </Project>

                    <Project className={classes.Project} images={[Departuretime1, Departuretime2, Departuretime3]} Mobile>
                        <div className={classes.ProjectDesc}>
                            <h1>Departure Time</h1>
                            <h2>Project Description</h2>
                            <p>Mobile application to manage work & life balance</p>
                            <h2>Work</h2>
                            <p>Design and Development</p>
                            <h2>Technology</h2>
                            <p>Xamarin</p>
                            <h2>Hosting platform</h2>
                            <p>App Store</p>
                            <Button clicked={props.clicked}
                            color={"white"}
                            bgColor1={"#c8c8c8"}>View on AppStore</Button>
                        </div>
                    </Project>
                        
                </div>
            </AnimatedRoundedMask>
        </div>
    );
}

export default portfolio;