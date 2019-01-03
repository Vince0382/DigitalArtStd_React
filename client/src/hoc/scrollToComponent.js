import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

import { scrollTo } from '../shared/utility';


class ScrollToComponent extends Component {

  activeLinkHandler = (isFixed) => {
      const current = window.location.pathname + window.location.hash;
        
      if ( current === this.props.element || ((this.props.element === this.props.currentMainSection) && isFixed)) return true;

      return false;

  }

  functionHandler = () => {
    if (this.props.clickHandler) this.props.clickHandler();
    if (this.props.callBack) this.props.callBack();
  }

  render() {

    let navlink = null;

    switch (this.props.type) {
      case "function" : {
          if (this.props.clickHandler) {
              navlink = ( 
                  <span   className={this.props.className} 
                          onClick={this.functionHandler}
                          style={{...this.props.style, cursor: "pointer"}}>
                      {this.props.children}
                  </span>
              );
          }
          break;
      }
      case "external" : {
          navlink = ( 
              <a      className={this.props.className}
                      target="_blank"
                      href={this.props.element}
                      onClick={this.functionHandler}
                      style={this.props.style}>
                  {this.props.children}
              </a>
          );
          break;
      }
      default: {
          navlink = (
            <NavLink  className={this.props.className}
                      activeClassName={this.props.active}
                      to={this.props.element}
                      location={{pathname: this.props.element}}
                      isActive={() => this.activeLinkHandler(this.props.fixed)}
                      onClick={(event) => {
                                            scrollTo(event, this.props.element, 70, this.props.toTop);
                                            this.functionHandler();
                                          }
                      }
                      style={this.props.style}>

                  {this.props.children}
          </NavLink>
          );
          break;
      }
      
  }

    return navlink;
    
  }
};

const mapStateToProps = state => {
  return {
      currentMainSection: state.currentMainSection
  };
}

export default connect(mapStateToProps)(withRouter(ScrollToComponent));

