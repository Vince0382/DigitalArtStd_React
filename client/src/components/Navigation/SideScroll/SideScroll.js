import React, { Component } from 'react';
import SVG from 'react-inlinesvg';
import ScrollTo from '../../../hoc/scrollToComponent';

import { isBetween } from '../../../shared/utility';

import classes from './SideScroll.css';
import ArrowDown from '../../../assets/images/arrow_down.svg';
import ArrowUp from '../../../assets/images/arrow_up.svg';


class SideScroll extends Component{
    constructor (props) {
        super(props);
        this.textRef = React.createRef();
        this.arrowRef = React.createRef();
    }
    state = {
        textTop: null,
        textBottom: null,
        arrowTop: null,
        arrowBottom: null
    }

    componentDidMount (prevState) {
        this.setState({
            ...prevState,
            textTop: this.textRef.current.getBoundingClientRect().top,
            textBottom: this.textRef.current.getBoundingClientRect().bottom,
            arrowTop: this.arrowRef.current.getBoundingClientRect().top,
            arrowBottom: this.arrowRef.current.getBoundingClientRect().bottom
        });
    }


    render(){
        
        const changeColorAt = this.props.changeColorAt? this.props.changeColorAt : [[0,0]];

        return (
            <ScrollTo element={this.props.up? window.location.pathname : this.props.element} toTop={this.props.up} className={this.props.className}>

                <div className={classes.ScrollDiv}>
                    <div className={classes.TextDiv} ref={this.textRef}>
                        <div 
                            className={classes.Text} 
                            style={{
                                color: isBetween(this.state.textTop, this.state.textBottom, changeColorAt, 20, -20 )? this.props.color2 : this.props.color
                                }}>
                            {this.props.up? "To the top" : "Scroll down"}
                        </div>
                    </div>
                    <div className={classes.Arrow} ref={this.arrowRef}>
                        <SVG 
                            src={this.props.up? ArrowUp : ArrowDown}
                            style={{
                                stroke: isBetween(this.state.arrowTop, this.state.arrowBottom, changeColorAt, 50, -20 )? this.props.color2 : this.props.color
                                }}>
                        </SVG>
                    </div>
                </div>
            </ScrollTo>
        );
    }
}

export default SideScroll;