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
import { NavLink, useLocation } from "react-router-dom";

const navigationLinks = [
  { text: "Home", target: "/" },
  { text: "About", target: "/about" },
  { text: "Resume", target: "/resume" },
  { text: "Portfolio", target: "/portfolio" },
  { text: "Contact", target: "/contact" },
];

const socialLinks = [
  { onClick: openGithub, icon: <GithubSvg className="h-5 w-max" /> },
  { onClick: openTwitter, icon: <TwitterSvg className="h-5 w-max" /> },
  { onClick: openLinkedin, icon: <LinkedinSvg className="h-5 w-max" /> },
  { onClick: sendEmail, icon: <EmailSvg className="h-5 w-max" /> },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  function onClick() {
    if (openMenu) {
      setOpenMenu(false);
    }
  }

  return (
    <div className="relative transition ease-in-out duration-300 h-screen flex items-center z-[997] overflow-auto">
      <div className="container max-[992px]:flex max-[992px]:flex-col max-[992px]:items-center">
        <h1 className="text-5xl font-bold font-poppins max-[992px]:text-[36px]">
          <a className="text-white" href="/">
            Pawan Paudel
          </a>
        </h1>
        <h2 className="text-xl mt-4 text-slate-300 max-[992px]:text-[20px] max-[992px]:leading-[30px] max-[992px]:text-center">
          I'm a passionate{" "}
          <span className="underline underline-offset-8 decoration-3 decoration-[#18d26e]">
            backend developer
          </span>{" "}
          from Nepal
        </h2>

        <div className={`${openMenu ? "navbar-mobile" : ""}`}>
          <ul className="flex items-center gap-8 mt-8 max-lg:hidden">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  className={`nav-link text-slate-300 nav-link hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#18d26e] ${
                    location.pathname === link.target ? "active" : ""
                  }`}
                  to={link.target}
                  onClick={onClick}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <i
            className="text-white text-4xl cursor-pointer hidden max-lg:visible transition duration-500 fixed right-[15px] top-[15px] max-[991px]:block"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? (
              <CloseSvg className="h-6 w-max" />
            ) : (
              <HamburgerSvg className="h-6 w-max" />
            )}
          </i>
        </div>

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
    </div>
  );
}
