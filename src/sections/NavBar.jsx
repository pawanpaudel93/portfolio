import React, { useState } from "react";
import { HamburgerSvg, CloseSvg } from "@/assets";
import { NavLink, useLocation } from "react-router-dom";

const navigationLinks = [
  { text: "Home", target: "/" },
  { text: "About", target: "/about" },
  { text: "Resume", target: "/resume" },
  { text: "Portfolio", target: "/portfolio" },
  { text: "Contact", target: "/contact" },
];

export default function NavBar() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  function onClick() {
    if (openMenu) {
      setOpenMenu(false);
    }
  }

  if (location.pathname === "/") return;

  return (
    <header className="transition ease-in-out duration-300 flex items-center overflow-auto py-4 justify-center">
      <div className="container flex justify-between items-center fixed top-0 py-4 z-[997] bg-[#040404]">
        <h1 className="text-5xl font-bold font-poppins max-[992px]:text-[36px]">
          <a className="text-white" href="/">
            Pawan Paudel
          </a>
        </h1>

        <nav
          id="navbar"
          className={`${openMenu ? "navbar-mobile" : ""} z-[997]`}
        >
          <ul className="flex items-center gap-8 max-lg:hidden">
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
        </nav>
      </div>
    </header>
  );
}
