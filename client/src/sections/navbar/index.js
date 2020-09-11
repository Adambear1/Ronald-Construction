import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [burgerClick, setBurgerClick] = useState(false);

  function handleToggle() {
    console.log("clicked")
    burgerClick ? setBurgerClick(false) : setBurgerClick(true);


  }

  return (
    <div>
    <nav id="nav" className="nav" role="navigation" aria-label="main navigation">
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
            href="#history"
            onClick={handleToggle}>History</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info"
            href="#location"
            onClick={handleToggle}>Service Map</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info"
            href="#services"
            onClick={handleToggle}>Services</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info"
            href="#customerReviews"
            onClick={handleToggle}>Customer Reviews</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info btn"
            href="#form"
            onClick={handleToggle}>Contact Us</a>
          </p>
        </nav>
      </div>
      </div>
    </nav>
    <a id="homeButton" href="#nav"className="button"><i class="fas fa-home"></i></a>
    </div>
  );
}

export default Navbar;

