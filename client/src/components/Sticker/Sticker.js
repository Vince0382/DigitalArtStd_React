import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

import classes from './Sticker.css';
import ScrollTo from '../../hoc/scrollToComponent';

class Sticker extends Component {

    state = {
        fill: this.props.inactiveColor,
        color: this.props.inactiveColor
    }

    mouseEnterHandler = () => {
        let curState = {...this.state};
        curState.fill = this.props.color2;
        curState.color = this.props.color;

        this.setState(curState);
    }

    mouseLeaveHandler = () => {
        let curState = {...this.state};
        curState.fill = this.props.inactiveColor;
        curState.color = this.props.inactiveColor;

        this.setState(curState);
    }

    render() {        
        return (
                <div 
                    className={this.props.className}
                    onMouseEnter={this.props.isMobile? !this.props.isMobile()? () => this.mouseEnterHandler() : null : null}
                    onMouseLeave={this.props.isMobile? !this.props.isMobile()? () => this.mouseLeaveHandler() : null : null}>

                    <div className={classes.Content}>
                        <ScrollTo element={this.props.link} style={{textDecoration: "none", color: this.state.color}} callBack={this.props.clicked}>
                            <SVG src={this.props.image} style={{fill: this.state.fill}} className={classes.Image}/>
                            <p style={{color: this.state.color}} className={classes.Text}>{this.props.title}</p>
                        </ScrollTo>
                    </div>
                </div>
            );
    }

}

export default Sticker;