import React, { useState } from "react";
import { openGithub, openTwitter, openLinkedin, sendEmail } from "@/utils";
import { EmailSvg, GithubSvg, LinkedinSvg, TwitterSvg } from "@/assets";

const navigationLinks = [
  { text: "Home", target: "#header" },
  { text: "About", target: "#about" },
  { text: "Resume", target: "#resume" },
  { text: "Portfolio", target: "#portfolio" },
  { text: "Contact", target: "#contact" },
];

const socialLinks = [
  { onClick: openGithub, icon: <GithubSvg style={{ height: "20px" }} /> },
  { onClick: openTwitter, icon: <TwitterSvg style={{ height: "20px" }} /> },
  { onClick: openLinkedin, icon: <LinkedinSvg style={{ height: "20px" }} /> },
  { onClick: sendEmail, icon: <EmailSvg style={{ height: "20px" }} /> },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function onClick() {
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
        <h2>
          I'm a passionate <span>backend developer</span> from Nepal
        </h2>

        <nav
          id="navbar"
          className={`navbar ${openMenu ? "navbar-mobile" : ""}`}
        >
          <ul>
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a className="nav-link" href={link.target} onClick={onClick}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <i
            className={`bi mobile-nav-toggle ${openMenu ? "bi-x" : "bi-list"}`}
            onClick={() => setOpenMenu(!openMenu)}
          ></i>
        </nav>

        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a key={index} onClick={link.onClick} className={link.className}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
