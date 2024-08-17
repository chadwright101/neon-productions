import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import "animate.css";

import menuIcon from "../../public/graphics/hamburger-menu.svg";

import menuItems from "../../data/menu-items.json";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <header>
      <div className="grid place-items-center">
        <Link href="/">
          <picture>
            <source
              media="(max-width: 1000px)"
              srcSet="/images/general/neon-photography-logo.webp?tr=w-180"
            />
            <img
              className="h-full w-44 py-1 desktop:w-60"
              src="/images/general/neon-photography-logo.webp?tr=w-250"
              alt="Neon Productions logo"
              loading="eager"
            />
          </picture>
        </Link>
      </div>

      {/* Mobile menu */}

      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className="py-1 border-y border-y-black w-full desktop:hidden"
      >
        <Image
          className="m-auto w-12 h-11"
          src={menuIcon}
          alt="Hamburger menu icon"
          width={48}
          height={44}
        />
      </div>
      {menuOpen && (
        <nav className="border-b border-black py-4 desktop:hidden overflow-hidden">
          <ul className=" uppercase flex flex-col gap-2.5 items-center text-desktop tracking-tighter font-light text-md">
            {menuItems.map((item, index) => (
              <li className={item.classes} key={index}>
                <Link
                  onClick={() => setMenuOpen(!menuOpen)}
                  href={item.href}
                  className="py-2 px-4 golden-nav"
                >
                  {item.title}
                </Link>
                {index < menuItems.length - 1 && (
                  <div
                    className={`w-16 h-px bg-gradient-to-r from-gold1 via-gold3 to-gold2 mx-auto mt-2 ${item.classes}`}
                  ></div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Desktop menu */}

      <nav className="hidden desktop:block">
        <ul className="uppercase flex gap-3.5 justify-center text-md tracking-tighter font-light mt-6 items-center pb-2 bg-white drop-shadow-desktop">
          {menuItems.map((item, index) => (
            <li
              onMouseEnter={
                item.subMenuItems && (() => setSubmenuOpen(!submenuOpen))
              }
              onMouseLeave={
                item.subMenuItems && (() => setSubmenuOpen(!submenuOpen))
              }
              className={`flex items-center gap-2 golden-nav`}
              key={index}
            >
              <Link href={item.href}>{item.title}</Link>

              {/* Desktop submenu */}

              {submenuOpen && item.subMenuItems && (
                <div className="overflow-hidden w-[254px] -translate-x-5 translate-y-[92px] absolute">
                  <ul className="animate__animated animate__slideInDown animate__fast text-center bg-white rounded-b-xl py-2.5 flex flex-col gap-2.5">
                    {item.subMenuItems.map((item, index) => (
                      <li key={index} className="golden-nav normal-case">
                        <Link className="px-20" href={item.href}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {index < menuItems.length - 1 && (
                <div className="h-6 w-[1.5px] bg-gradient-to-b from-gold1 to-gold2 ml-1.5"></div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
