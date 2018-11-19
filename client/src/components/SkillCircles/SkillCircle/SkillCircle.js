import React, { Component } from 'react';
import IntersectionVisible from 'react-intersection-visible';

import classes from './SkillCircle.css';

class SkillCircle extends Component {
    constructor(props) {
        super(props);
    
        const { radius, stroke } = this.props;
    
        this.circleRadius = radius - stroke * 2;
        this.circumference = this.circleRadius * 2 * Math.PI;

        this.state = {
            strokeDashoffset: this.circumference
        }

    }

    onInViewPort = () => {
        this.setState({strokeDashoffset: this.circumference - this.props.percent / 100 * this.circumference});
    }

    onOutViewPort = () => {
        this.setState({strokeDashoffset: this.circumference});
    }


    render () {   

        const { radius, stroke, strokeColor, color, percent } = this.props;

        return (
            <div style={{ textAlign: "center", color: color, padding: "1vw" }}>
                {this.props.children}
                <IntersectionVisible 
                                onShow={() => this.onInViewPort()}
                                onHide={() => this.onOutViewPort()}>
                        <svg
                            height={radius * 2}
                            width={radius * 2}
                            shape-rendering="geometricPrecision"
                        >
                            <filter id="blurFilter">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                            </filter>
                            {/* <circle
                                stroke={color}
                                fill="transparent"
                                strokeWidth={ stroke }
                                r={ this.circleRadius }
                                cx={ radius }
                                cy={ radius }
                                /> */}
                            <circle
                                stroke={color}
                                fill="transparent"
                                filter="url(#blurFilter)"
                                strokeWidth={ stroke }
                                strokeDasharray={ this.circumference + ' ' + this.circumference}
                                style={{ strokeDashoffset: this.state.strokeDashoffset }}
                                stroke-linecap="round"
                                r={ this.circleRadius }
                                cx={ radius }
                                cy={ radius }
                                />
                                {/* <text 
                                    x="50%" 
                                    y="50%" 
                                    textAnchor="middle" 
                                    fill={color} 
                                    dy=".3em">
                                    {percent + " %"}
                                </text> */}
                        </svg>
                    </IntersectionVisible>
            </div>
        );
    }
}

export default SkillCircle;