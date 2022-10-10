import { useState } from "react";
import { openGithub, openTwitter, openLinkedin, sendEmail } from "../utils";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header id="header">
      <div className="container">
        <h1>
          <a href="/">Pawan Paudel</a>
        </h1>
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        {/* <a href="index.html" className="mr-auto">
          <img src="img/logo.png" alt="" className="img-fluid" />
        </a> */}
        <h2>
          I'm a passionate <span>blockend developer</span> from Nepal
        </h2>

        <nav id="navbar" className={openMenu ? "navbar-mobile" : "navbar"}>
          <ul>
            <li>
              <a className="nav-link active" href="#header">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i
            className={
              "bi mobile-nav-toggle " + (openMenu ? "bi-x" : "bi-list")
            }
            onClick={(e) => setOpenMenu(!openMenu)}
          ></i>
        </nav>
        {/* <!-- .navbar --> */}

        <div className="social-links">
          <a onClick={openGithub} className="github">
            <i className="bi bi-github"></i>
          </a>
          <a onClick={openTwitter} className="twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a onClick={openLinkedin} className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
          <a onClick={sendEmail} className="email">
            <i className="bx bx-envelope"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
