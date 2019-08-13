import React, { Component } from 'react';
import IntersectionVisible from 'react-intersection-visible';

class OnScreen  extends Component {

    state = {
        attachedClass: null
    }

    onInViewPort = () => {
        this.setState({attachedClass: this.props.OnClass});
    }

    onOutViewPort = () => {
        this.setState({attachedClass: null});
    }

    render() {

        return (
            <IntersectionVisible 
                                onShow={() => this.onInViewPort()} 
                                onHide={() => this.onOutViewPort()} 
                                className={this.props.className + ' ' + this.state.attachedClass}
                                options={{threshold: [0.3, 0.5]}}>
                   
                    {this.props.children}
            </IntersectionVisible>
        );
    }
}

export default OnScreen;