import React, { PureComponent } from 'react';
import IntersectionVisible from 'react-intersection-visible';

class AnimatedText extends PureComponent {

    state = {
        style:{
            transform: "translateY(100%)",
            opacity: "0"
        }
    }

    onInViewPort = () => {
        const newStyle = {transform: "translateY(0)", opacity: "1" }
        this.setState({style: newStyle});
    }

    onOutViewPort = () => {
        const newStyle = {transform: "translateY(100%)", opacity: "0" }
        this.setState({style: newStyle});
    }

    render () {
        const delay = this.props.delay ? this.props.delay : "0.2s";
        const duration = this.props.duration ? this.props.duration : "0.8s";

        return (
            <IntersectionVisible 
            onShow={() => this.onInViewPort()} 
            onHide={() => this.onOutViewPort()}
            className={this.props.className}>
                
                <div style={{...this.state.style, ...this.props.style, transition: duration + " " + delay + " all ease-out"}}>
                    {this.props.children}
                </div>

            </IntersectionVisible>
        );
    }
}

export default AnimatedText;