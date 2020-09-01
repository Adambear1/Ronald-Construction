import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [burgerClick, setBurgerClick] = useState(false);

  function handleToggle() {
    console.log("clicked")
    burgerClick ? setBurgerClick(false) : setBurgerClick(true);


  }

  return (
    <nav className="nav" role="navigation" aria-label="main navigation">
      <div className="">
      <p className="brandName">
    Ronald<span className="brandName2">Landscaping</span>
  </p>
    <div className="row">
        <a
          role="button"
          className={burgerClick ? 'navbar-burger burger is-active':"navbar-burger burger"}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarList"
          onClick={handleToggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarList" className= {burgerClick ? 'navbar-menu is-active dropdown' : "navbar-menu dropdown"}>
        <nav className="level">
          <p className="level-item has-text-centered">
            <a className="link is-info"
            onClick={handleToggle}>History</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info"
            onClick={handleToggle}>Service Map</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info"
            onClick={handleToggle}>About</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info"
            onClick={handleToggle}>Customer Photos</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info"
            onClick={handleToggle}>Book Now</a>
          </p>
        </nav>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
// <div className="navSection">

//
// </div>
