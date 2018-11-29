import { Component } from 'react';

class ScrollHandler extends Component{

    scrollTimeout = null;
    timeOut = 16; // 16ms to allow 60fps rendering

    handleScroll = (event) => {
        if (this.scrollTimeout) {
            // clear the timeout, if one is pending
            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = null;
        }
        this.scrollTimeout = setTimeout(() => {
            if (this.props.onWindowScroll) this.props.onWindowScroll(event);
        }, 16);
    }

    componentDidMount () {
        if (this.props.onWindowScroll) window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount () {
        if (this.props.onWindowScroll) window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        return this.props.children;
    }
}

export default ScrollHandler;