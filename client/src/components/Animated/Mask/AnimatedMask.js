import React, { PureComponent } from 'react';
import IntersectionVisible from 'react-intersection-visible';

class AnimatedMask extends PureComponent {

    constructor (props) {
        super(props);
        this.width = this.props.start? this.props.start : 0
    }

    state = {
        width: this.width
    }

    onInViewPort = () => {
        this.setState({width: - (this.width - 100)});
    }

    onOutViewPort = () => {
        this.setState({width: this.width});
    }

    render () {
        const delay = this.props.delay ? this.props.delay : "0.3s";
        const duration = this.props.duration ? this.props.duration : "0.9s";
        const zIndex = this.props.zIndex ? this.props.zIndex : null;
        
        return (
            <IntersectionVisible 
            onIntersect={(entries) => console.log(entries)}
            onShow={() => this.onInViewPort()} 
            onHide={() => this.onOutViewPort()}
            className={this.props.className}>
                
                <div style={{...this.props.style,width: this.state.width + "% ", height: "100%", transition: duration + " " + delay + " all cubic-bezier(0.165, 0.840, 0.440, 1.000)", overflow: "hidden",}}>
                    {this.props.children}
                </div>

            </IntersectionVisible>
        );
    }
}

export default AnimatedMask;