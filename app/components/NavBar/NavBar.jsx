"use client";

import React, { useState } from "react";
import "../../styles/styles.css";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">
            <Link href="/">
              <h2 className="logo">Dorcas</h2>
            </Link>
            <div className="hamburger">
              <div className="nav-hamburger" onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <Image
                    src="/close.svg"
                    width={30}
                    height={30}
                    alt="close-nav"
                  />
                ) : (
                  <Image
                    src="/hamburger.svg"
                    width={30}
                    height={30}
                    alt="hamburger"
                  />
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="nav-list">
              <ul>
                <li>
                  <Link href="#home" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
