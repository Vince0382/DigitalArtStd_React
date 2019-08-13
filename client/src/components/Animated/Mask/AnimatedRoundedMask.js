import React, { PureComponent } from 'react';
import IntersectionVisible from 'react-intersection-visible';

class AnimatedRoundedMask extends PureComponent {

    state = {
        scale: 1,
        opacity: 1
    }

    onInViewPort = () => {
        this.setState({scale: 0, opacity: 0});
    }

    onOutViewPort = () => {
        this.setState({scale: 1, opacity: 1});
    }

    render () {
        const delay = this.props.delay ? this.props.delay : "0.3s";
        const duration = this.props.duration ? this.props.duration : "0.9s";
        
        return (
            <IntersectionVisible 
            onIntersect={(entries) => console.log(entries)}
            onShow={() => this.onInViewPort()} 
            onHide={() => this.onOutViewPort()}
            className={this.props.className}>
                
                <div style={{
                        ...this.props.style, 
                        transform: "scaleY(" + this.state.scale + ")" , 
                        transition: duration + " " + delay + " all cubic-bezier(0.550, 0.085, 0.680, 0.530)", 
                        transformOrigin: "center",
                        width: "100%",
                        height: "100%",
                        opacity: this.state.opacity,
                        position: "absolute",
                        top: 0,
                        left: 0
                        }}>
                        
                </div>

                {this.props.children}

            </IntersectionVisible>
        );
    }
}

export default AnimatedRoundedMask;