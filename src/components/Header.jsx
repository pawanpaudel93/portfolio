import { useState } from "react";
import { openGithub, openTwitter, openLinkedin, sendEmail } from "../utils";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function onClick(e) {
    if (openMenu) {
      setOpenMenu(false);
    }
  }

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

        <nav
          id="navbar"
          className={openMenu ? "navbar navbar-mobile" : "navbar"}
        >
          <ul>
            <li>
              <a className="nav-link active" href="#header" onClick={onClick}>
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#about" onClick={onClick}>
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#resume" onClick={onClick}>
                Resume
              </a>
            </li>
            <li>
              <a className="nav-link" href="#portfolio" onClick={onClick}>
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact" onClick={onClick}>
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
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
