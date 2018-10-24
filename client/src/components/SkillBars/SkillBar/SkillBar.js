import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import IntersectionVisible from 'react-intersection-visible';

import classes from './SkillBar.css';

class SkillBar extends Component {
    state = {
        style: {
            color: this.props.bgColor, 
            background: this.props.color,
            width: 0
        }
    }

    onInViewPort = () => {
        const newStyle = {...this.state.style};
        newStyle.width= this.props.percent;

        this.setState({style: newStyle});
    }

    onOutViewPort = () => {
        const newStyle = {...this.state.style};
        newStyle.width= 0;

        this.setState({style: newStyle});
    }

    render() {
        console.log(this.state);
        return (
            <div className={classes.SkillBar}>
                <div className={classes.SkillBarTitle} style={{color: this.props.color}}>
                    {this.props.children}
                </div>
                <div className={classes.SkillBarBar} style={{borderColor: this.props.color}}>
                    <IntersectionVisible 
                                onShow={() => this.onInViewPort()}
                                onHide={()=> this.onOutViewPort()}>
                        <div className={classes.SkillBarPercent} style={this.state.style}>
                            {this.props.percent}
                        </div>
                    </IntersectionVisible>    
                </div>              
        </div>
        );
    }
}

export default SkillBar;