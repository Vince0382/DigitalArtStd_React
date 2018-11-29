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

  render() {

    let navlink = (
                  <NavLink  className={this.props.className}
                        activeClassName={this.props.active}
                        to={this.props.element}
                        location={{pathname: this.props.element}}
                        isActive={() => this.activeLinkHandler(this.props.fixed)}
                        onClick={(event) => scrollTo(event, this.props.element, 70, this.props.toTop, this.props.callBack)}
                        style={this.props.style}>

                    {this.props.children}
                  </NavLink>

    );

    return navlink;
    
  }
};

const mapStateToProps = state => {
  return {
      currentMainSection: state.currentMainSection
  };
}

export default connect(mapStateToProps)(withRouter(ScrollToComponent));

