import React, { Component } from 'react';
import IntersectionVisible from 'react-intersection-visible';

import classes from './BlockContent.css';

class BlockContent extends Component {
    state = {
        blockClasses: classes.BlockLeft,
        titleClasses: [classes.Title],
        bodyClasses: [classes.BodyLeft],
        imageClasses: [classes.ImageLeft],
        mainClass: classes.MainLeft
    }

    componentDidMount = () => {
        if (this.props.orientation === "right") {
            this.setState({
                blockClasses: classes.BlockRight,
                bodyClasses: [classes.BodyRight], 
                imageClasses: [classes.ImageRight],
                mainClass: classes.MainRight
            });
        }
    } 

    onInViewPort = (component) => {
        let newClasses = [...this.state[component]];

        if (newClasses.length === 1) {
            newClasses.push(classes.OnScreen);
        
            this.setState({
                ...this.state,
                [component]: newClasses
            });
        }
    }

    onOutViewPort = (component) => {

        if (this.state[component].length > 1) {
        
            this.setState({
                ...this.state,
                [component]: this.state[component].splice(0,1)
            }); 
        }
    }

    render () {
 
    
        return (
            <div className={this.state.mainClass} style={{background: this.props.bgColor}}> 
                <IntersectionVisible 
                            onShow={() => this.onInViewPort("imageClasses")}
                            onHide={()=> this.onOutViewPort("imageClasses")}
                            className={this.state.imageClasses.join(' ')}>
                    
                        <img src={this.props.image}/>
                   
                </IntersectionVisible>
                <div className={this.state.blockClasses}>
                    <IntersectionVisible 
                                onShow={() => this.onInViewPort("titleClasses")}
                                onHide={()=> this.onOutViewPort("titleClasses")}
                                className={this.state.titleClasses.join(' ')}>
                        <div>
                            <h1>{this.props.title}</h1>
                        </div>
                    </IntersectionVisible>
                    <div className={classes.MobileOnly}>
                        <IntersectionVisible 
                                    onShow={() => this.onInViewPort("bodyClasses")}
                                    onHide={()=> this.onOutViewPort("bodyClasses")}
                                    className={this.state.bodyClasses.join(' ')}>
                            <div>{this.props.children}</div>
                        </IntersectionVisible>
                    </div>
                </div>

            </div>
            
        );
    }
        
}

export default BlockContent;