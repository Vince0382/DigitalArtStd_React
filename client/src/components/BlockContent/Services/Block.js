import React, { Component }  from 'react';
import SVG from 'react-inlinesvg';

import { scrollTo } from '../../../shared/utility';
import classes from './Block.css';
import ArrowDown from '../../../assets/images/arrow_down.svg';

class BlockContent extends Component {
    state = {
        fill: this.props.inactiveColor,
        color: this.props.inactiveColor
    }

    onHoverEnter = () => {
        const curState = {...this.state};
        curState.color = this.props.textColor;
        curState.fill = this.props.imageColor;
        
        this.setState(curState);
    }

    onHoverExit = () => {
        const curState = {...this.state};

        curState.color = this.props.inactiveColor;
        curState.fill = this.props.inactiveColor;
        
        this.setState(curState);
    }

    render(){

        return (
            
            <div 
                className={classes.Main} 
                onMouseEnter={this.props.isMobile? !this.props.isMobile()? this.onHoverEnter : null : null} 
                onMouseLeave={this.props.isMobile? !this.props.isMobile()?this.onHoverExit : null : null} 
                onClick={(event) => scrollTo(event, this.props.link, 70, false)}>

                <div className={classes.Image}>
                    <SVG src={this.props.image} style={{fill: this.state.fill}} />
                </div>
                <div className={classes.Block}>
                    <div className={classes.Title} style={{color: this.state.color}}>
                        {this.props.title}
                    </div>
                    <div className={classes.Text} style={{color: this.state.color}}>
                        {this.props.children}
                    </div>
                </div>
            
                <div className={classes.Arrow}>
                    <SVG src={ArrowDown} style={{stroke: this.state.fill}} />
                </div>
            </div>
            
        );
    }
} 

export default BlockContent;