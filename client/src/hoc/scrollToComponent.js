import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import { scrollTo } from '../shared/utility';
import * as actions from '../store/actions';


class ScrollToComponent extends Component {

  // scrollTo = (el, offset, isTop) => {
  //   this.props.lock(); //Prevent url modification from other component

  //   let elementPosition = el.offsetTop - offset;
  //   if (isTop) {
  //     elementPosition = 0;
  //   }
  //   console.log(el);
  //   window.scroll({
  //     top: elementPosition,
  //     left: 0,
  //     behavior: "smooth"
  //   });

  //   this.props.unLock(); //Release the lock
  // }

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
                       // location={{pathname: window.location.pathname + window.location.hash}}
                        isActive={() => this.activeLinkHandler(this.props.fixed)}
                        onClick={() => scrollTo(this.props.element, 70, this.props.toTop)}
                        style={this.props.style}>

                    {this.props.children}
                  </NavLink>

    );
    
    if(this.props.element.includes('#')) {
        navlink = (
          <NavHashLink  className={this.props.className}
                    activeClassName={this.props.active}
                    to={this.props.element}
                    location={{pathname: window.location.pathname + window.location.hash}}
                    isActive={() => this.activeLinkHandler(this.props.fixed)}
                    scroll={(el) => scrollTo(el, 70, this.props.toTop)}
                    style={this.props.style}>

            {this.props.children}
          </NavHashLink>
        );
    }

    return navlink;
    
  }
};

const mapStateToProps = state => {
  return {
      currentMainSection: state.currentMainSection
  };
}

const mapDispatchToProps = dispatch => {
  return {
    lock : () => dispatch(actions.lock()),
    unLock : () => dispatch(actions.unLock())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ScrollToComponent));

