import React, { Component } from 'react';
import SVG from 'react-inlinesvg';
import ScrollTo from '../../../hoc/scrollToComponent';

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
        text: "Scroll down",
        svgImage: ArrowDown,
        scrollDest: this.props.element,
        toTop: false,
        textTop: null,
        textBottom: null,
        arrowTop: null,
        arrowBottom: null
    }

    componentDidMount (prevState) {
        if (prevState !== this.state){

            this.setState({
                ...prevState,
                textTop: this.textRef.current.getBoundingClientRect().top,
                textBottom: this.textRef.current.getBoundingClientRect().bottom,
                arrowTop: this.arrowRef.current.getBoundingClientRect().top,
                arrowBottom: this.arrowRef.current.getBoundingClientRect().bottom
            })
        }
    }

    componentDidUpdate(prevProps){
        if (prevProps.up !== this.props.up){
            if(this.props.up){
                this.setState({
                    text: "To the top", 
                    svgImage: ArrowUp,
                    scrollDest: "/",
                    toTop: true
                });
            } else {
                this.setState({
                    text: "Scroll down",
                    svgImage: ArrowDown,
                    scrollDest: this.props.element,
                    toTop: false
                });
            }
        }
        
    }

    render(){
        
        let changeColorAt = [0,0];

        if (this.props.changeColorAt) {
            changeColorAt = this.props.changeColorAt;
        }


        return (
            <ScrollTo element={this.state.scrollDest} toTop={this.state.toTop} className={this.props.className}>

                <div className={classes.ScrollDiv}>
                    <div className={classes.TextDiv} ref={this.textRef}>
                        <div 
                            className={classes.Text} 
                            style={{
                                color: (this.state.textTop +20 < changeColorAt[0]) || (this.state.textBottom -20 > changeColorAt[1]) ? this.props.color : this.props.color2
                                }}>
                            {this.state.text}
                        </div>
                    </div>
                    <div className={classes.Arrow} ref={this.arrowRef}>
                        <SVG 
                            src={this.state.svgImage}
                            style={{
                                stroke: (this.state.arrowTop +50 < changeColorAt[0]) || (this.state.arrowBottom -20 > changeColorAt[1]) ? this.props.color : this.props.color2
                                }}>
                        </SVG>
                    </div>
                </div>
            </ScrollTo>
        );
    }
}

export default SideScroll;