import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';

import classes from './Services.css';
import BackImage from '../../components/BackImg/BackImg';
import Img from '../../assets/images/img5.jpg';
import SkillBars from '../../components/SkillBars/SkillBars';
import * as actions from '../../store/actions';
import Mouse from '../../components/UI/Scroll/Mouse/Mouse';
import ScrollTo from '../../hoc/scrollToComponent';
import SkillImg from '../../assets/images/img6.png';

class Services extends Component {

    componentWillMount = () => {
        this.props.setTextColor();
    }

    render (){    
        return (
            <div key="services">
                <BackImage image={Img}/>
                <div className={classes.ServicesHead} style={{color: this.props.color}}>
                    <div className={classes.HeadTitle}>
                        <h1>'' Stop chasing the money and start chasing the passion. ''</h1>
                        <p>-- Tony Hsieh</p>
                    </div>  
                    <div className={classes.DivMouse}>
                        <ScrollTo element="serviceContent">
                            <Mouse borderColor="white" bgColor="white"/>
                        </ScrollTo>
                    </div>
                </div>


                <Element name="serviceContent">
                    <div className={classes.Main}>
                        <div className={classes.SkillDiv}>
                            <div className={classes.SkillBars}>
                                <SkillBars />
                            </div>
                            <div className={classes.SkillImage}>
                                <img src={SkillImg} />
                            </div>
                        
                        </div>

                    
                    </div>

                </Element>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        color: state.textColor
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTextColor: () => dispatch(actions.setTextColor("rgb(255, 255, 255)"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Services);