import React, { Component }  from 'react';
import SVG from 'react-inlinesvg';

import classes from './Block.css';

class BlockContent extends Component {

    render(){

        return (
            
            <div className={classes.Main}>

                <div className={classes.Image}>
                    <SVG src={this.props.image} style={{fill: this.props.imageColor}} />
                </div>
                <div className={classes.Block}>
                    <div className={classes.Title} style={{color: this.props.textColor}}>
                        {this.props.title}
                    </div>
                    <div className={classes.Text} style={{color: this.props.textColor}}>
                        {this.props.children}
                    </div>
                </div>
            </div>
            
        );
    }
} 

export default BlockContent;