export default function Header() {
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

        <nav id="navbar" className="navbar">
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
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* <!-- .navbar --> */}

        <div className="social-links">
          <a href="https://github.com/pawanpaudel93" className="github">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://twitter.com/Blokchainaholic" className="twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/pawan-paudel/"
            className="linkedin"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
