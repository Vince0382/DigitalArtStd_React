import React, { Component } from 'react';
import ScrollTo from '../../../../hoc/scrollToComponent';

import classes from './SideNavItem.css';

class SideNavItem extends Component {
    constructor (props) {
        super(props);
        this.navRef = React.createRef();
    }

    state = {
        navTop: null,
        navBottom: null
    }

    componentDidMount (prevState) {
        if (prevState !== this.state){
            this.setState({
                ...prevState,
                navTop: this.navRef.current.getBoundingClientRect().top,
                navBottom: this.navRef.current.getBoundingClientRect().bottom,
            })
        }
    }

    render(){

        let color = (this.state.navTop < this.props.changeColorAt[0]) || (this.state.navBottom > this.props.changeColorAt[1]) ? this.props.color : this.props.color2;
        return (
            <div className={classes.SideNavContainer} ref={this.navRef}>
                <ScrollTo 
                        element={this.props.link}
                        exact={this.props.exact}
                        fixed={this.props.fixed}
                        active={classes.Active} 
                        toTop={this.props.toTop}>
                    <div 
                        className={classes.SideNavItem} 
                        style={{ background: color, borderColor: color}}>
                    </div>
                </ScrollTo>
            </div>
        );
    }
}

export default SideNavItem;
