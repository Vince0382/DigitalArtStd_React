import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
// core components

function LandingPageHeader(props) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          backgroundImage:
            "url(" + require("../assets/img/sections/luke-chesser-copy.jpg") + ")"
        }}
      >
        
      </div>
  );
}

export default LandingPageHeader;
