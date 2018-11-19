import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Section from '../../../hoc/Section/Section';

import classes from './BlockContent.css';

class BlockContent extends Component {
    // state = {
    //     blockClasses: classes.BlockLeft,
    //     titleClasses: [classes.Title],
    //     bodyClasses: [classes.BodyLeft],
    //     imageClasses: [classes.ImageRight],
    //     mainClass: classes.MainLeft
    // }

    // componentDidMount = () => {
    //     if (this.props.right) {
    //         this.setState({
    //             blockClasses: classes.BlockRight,
    //             bodyClasses: [classes.BodyRight], 
    //             imageClasses: [classes.ImageLeft],
    //             mainClass: classes.MainRight
    //         });
    //     }
    // } 

    // onInViewPort = (component) => {
    //     let newClasses = [...this.state[component]];

    //     if (newClasses.length === 1) {
    //         newClasses.push(classes.OnScreen);
        
    //         this.setState({
    //             ...this.state,
    //             [component]: newClasses
    //         });
    //     }
    // }

    // onOutViewPort = (component) => {

    //     if (this.state[component].length > 1) {
        
    //         this.setState({
    //             ...this.state,
    //             [component]: this.state[component].splice(0,1)
    //         }); 
    //     }
    // }

    render () {
 
        return (
            
            <div className={classes.Block} style={{background: this.props.bgColor, color: this.props.color}}> 
                <Section link={this.props.hash} mainSection={this.props.mainSection}>
                    <Parallax
                            className={classes.Title}
                            offsetYMax={0}
                            offsetYMin={-50}
                            
                            tag="figure">
                        
                            <div>
                                <h1>{this.props.title}</h1>
                            </div>
                    </Parallax>
                    
                    <div className={classes.ImageLeft}>
                        <img src={this.props.image[0]}/>
                    </div>

                    <div className={classes.ImageRight}>
                        <img src={this.props.image[1]}/>
                    </div>

                    <Parallax
                            className={classes.OverviewOuter}
                            offsetYMax={0}
                            offsetYMin={-50}
                            
                            tag="figure">
                        <div className={classes.OverviewInner} style={{background: this.props.frameColor}}>
                            {this.props.overviewItems ? 
                                this.props.overviewItems.map((item, i) => {
                                return <div key={i} className={classes.Item}>&#8594; {item}</div> 
                                })
                                : null
                            }
                        </div>
                    </Parallax>
                    <div className={classes.Text}>
                        {this.props.children}
                    </div>
                </Section>
            </div>
            
        );
    }
        
}

export default BlockContent;