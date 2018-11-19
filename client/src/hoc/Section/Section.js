import React, { Component } from 'react';
import { connect } from 'react-redux';
import IntersectionVisible from 'react-intersection-visible';
import { withRouter } from 'react-router-dom';

import * as actions from '../../store/actions';


class Section extends Component {

    componentDidMount () {
        console.log(this.props.link + " : MOUNTED");
    }

    componentWillUnmount () {
        console.log(this.props.link + " : UNMOUNTED");
    }

    onInViewPort = () => {
        const current = window.location.pathname + window.location.hash ;
        
        if (this.props.link !== current) {
            window.history.pushState(this.props.location.state,null,this.props.link);
        }

        if (this.props.currentMainSection !== this.props.mainSection) {
            this.props.setCurrentMainSection(this.props.mainSection);
        }
        console.log("IN VIEWPORT" + this.props.link, this.props.mainSection, this.props.currentMainSection);
    }

    onOutViewPort = () => {
      //  this.setState({locked: false});
        console.log("OUT VIEWPORT" + this.props.link);
    }

    render() {

        return (
            <IntersectionVisible 
                                onShow={() => this.onInViewPort()} 
                                onHide={() => this.onOutViewPort()} 
                                className={this.props.className}
                                options={{threshold: [0.3, 0.5]}}>
                
                
                
                {this.props.children}
            </IntersectionVisible>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentMainSection: state.currentMainSection
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentMainSection: (section) => dispatch(actions.setCurrentMainSection(section))
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Section));