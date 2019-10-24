import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

import { scrollTo } from '../shared/utility';


const scrollToComponent = props => {

    const activeLinkHandler = (isFixed) => {
        const current = window.location.pathname + window.location.hash;
          
        if ( current === props.element || ((props.element === props.currentMainSection) && isFixed)) return true;

        return false;

    }

    const functionHandler = () => {
      if (props.clickHandler) props.clickHandler();
      if (props.callBack) props.callBack();
    }

    let navlink = null;

    switch (props.type) {
        case "function" : {
            if (props.clickHandler) {
                navlink = ( 
                    <span   className={props.className} 
                            onClick={functionHandler}
                            style={{...props.style, cursor: "pointer"}}>
                        {props.children}
                    </span>
                );
            }
            break;
        }
        case "external" : {
            navlink = ( 
                <a      className={props.className}
                        target="_blank"
                        href={props.element}
                        onClick={functionHandler}
                        style={props.style}>
                    {props.children}
                </a>
            );
            break;
        }
        default: {

            let pathName = props.element;
            let hash = '';

            if (props.element.includes('#'))
            {
                const element = props.element.split('#');
                pathName = element[0];
                hash= element[1];
            }

            navlink = (
                <NavLink    className={props.className}
                            activeClassName={props.active}
                            to={pathName}
                            location={{pathname: pathName, hash: hash}}
                            isActive={() => activeLinkHandler(props.fixed)}
                            onClick={(event) => {
                                                    scrollTo(event, props.element, 0, props.toTop);
                                                    functionHandler();
                                                }
                            }
                            style={props.style}>

                        {props.children}
                </NavLink>
            );
            break;
      }
    } 
  

    return navlink;
    
};

const mapStateToProps = state => {
  return {
      currentMainSection: state.currentMainSection
  };
}

export default connect(mapStateToProps)(withRouter(scrollToComponent));

