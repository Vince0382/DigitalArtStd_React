import React, { PureComponent } from 'react';
import IntersectionVisible from 'react-intersection-visible';

class AnimatedLine extends PureComponent {

    constructor (props) {
        super(props);
        this.height = this.props.start? this.props.start : 0
    }

    state = {
        height: this.height
    }

    onInViewPort = () => {
        this.setState({height: - (this.height - 100)});
    }

    onOutViewPort = () => {
        this.setState({height: this.height});
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
                
                <div style={{...this.props.style,height: this.state.height + "% ", transition: duration + " " + delay + " all ease-out"}}>
                </div>

            </IntersectionVisible>
        );
    }
}

export default AnimatedLine;