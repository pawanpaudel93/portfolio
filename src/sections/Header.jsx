import React, { useState } from "react";
import { openGithub, openTwitter, openLinkedin, sendEmail } from "@/utils";
import {
  EmailSvg,
  GithubSvg,
  LinkedinSvg,
  TwitterSvg,
  HamburgerSvg,
  CloseSvg,
} from "@/assets";

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

  function getHash() {
    return window ? window.location.hash : "#header";
  }

  function onClick() {
    if (openMenu) {
      setOpenMenu(false);
    }
  }

  return (
    <header id="header">
      <div className="container">
        <h1 className="text-5xl font-bold font-poppins">
          <a className="text-white" href="/">
            Pawan Paudel
          </a>
        </h1>
        <h2 className="text-xl mt-4 text-slate-300">
          I'm a passionate{" "}
          <span className="underline underline-offset-8 decoration-3 decoration-[#18d26e]">
            backend developer
          </span>{" "}
          from Nepal
        </h2>

        <nav id="navbar" className={`${openMenu ? "navbar-mobile" : ""}`}>
          <ul className="flex gap-8 mt-8 max-lg:hidden">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a
                  className={`text-slate-300 nav-link hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#18d26e] ${
                    getHash() === link.target ? "active" : ""
                  }`}
                  href={link.target}
                  onClick={onClick}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <i
            className={`bi mobile-nav-toggle`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? (
              <CloseSvg style={{ height: "24px", width: "max-content" }} />
            ) : (
              <HamburgerSvg style={{ height: "24px", width: "max-content" }} />
            )}
          </i>
        </nav>

        <div className="social-links flex gap-3 mt-10">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              onClick={link.onClick}
              className="flex justify-center items-center rounded-full p-2 w-10 h-10 cursor-pointer bg-slate-50 hover:bg-slate-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
