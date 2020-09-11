import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Designed and Developed by <strong className="popColor">Nick Goudeau</strong>
      </p>
      <a href="https://github.com/ngoudeau2012" className="footerLink">
      <i class="fab fa-github fa-lg"></i>
      </a>
      <a href="https://www.linkedin.com/in/nicholasgoudeau/" className="footerLink">
          <i class="fab fa-linkedin fa-lg"></i>
      </a>
    </div>
  </footer>
  );
}

export default Footer;