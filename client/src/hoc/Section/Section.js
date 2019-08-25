import React from 'react';
import { connect } from 'react-redux';
import IntersectionVisible from 'react-intersection-visible';
import { withRouter } from 'react-router-dom';

import * as actions from '../../store/actions';


const section = props => {

    const onInViewPort = () => {
        const current = window.location.pathname + window.location.hash ;
        
        if ( props.link !== current ) {
            window.history.pushState(props.location.state,null,props.link);
        }

        if ( props.currentMainSection !== props.mainSection ) {
            props.setCurrentMainSection(props.mainSection);
        }
    }

    const onOutViewPort = () => {
      //  setState({locked: false});
      //  console.log("OUT VIEWPORT" + props.link);
    }
    
    return (
        <IntersectionVisible 
                            onShow={onInViewPort} 
                            onHide={onOutViewPort} 
                            className={props.className}
                            options={{threshold: [0.3, 0.5]}}>
            
            
            
            <div style={{width:"auto", height:"auto", minWidth: "1px", minHeight:"1px"}}>
                {props.children}
            </div>
        </IntersectionVisible>
    );
}

const mapStateToProps = state => {
    return {
        currentMainSection: state.currentMainSection
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentMainSection: ( section ) => dispatch(actions.setCurrentMainSection( section ))
    };
}

export default connect( mapStateToProps, mapDispatchToProps ) (withRouter( section ));