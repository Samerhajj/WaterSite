import React from "react";
import Link from "next/link";
import { WaterLogo } from "./Logo";
import Image from "next/image";
import Styles from "./Navbar.module.css";

const NavbarComponent: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo and Brand */}
        <a className="navbar-brand" href="#">
          Water <WaterLogo />
        </a>
        {/* Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {/* Home Link */}
            <li className="nav-item">
              <Link href="/" passHref className={`${Styles.custom_decoration}`}>
                <div className={`${Styles.custom_link}`}>Home</div>
              </Link>
            </li>
            {/* Who We Are Link */}
            <li className="nav-item">
              <Link href="/" passHref className={`${Styles.custom_decoration}`}>
                <div className={`${Styles.custom_link}`}>Who we are</div>
              </Link>
            </li>
            {/* What We Do Link */}
            <li className="nav-item">
              <Link href="/" passHref className={`${Styles.custom_decoration}`}>
                <div className={`${Styles.custom_link}`}>What we do</div>
              </Link>
            </li>
            {/* Our Work Link */}
            <li className="nav-item">
              <Link href="/" passHref className={`${Styles.custom_decoration}`}>
                <div className={`${Styles.custom_link}`}>Our Work</div>
              </Link>
            </li>
            {/* Careers Link */}
            <li className="nav-item">
              <Link href="/" passHref className={`${Styles.custom_decoration}`}>
                <div className={`${Styles.custom_link}`}>Careers</div>
              </Link>
            </li>
            {/* Contact Us Link */}
            <li className="nav-item">
              <Link href="/" passHref className={`${Styles.custom_decoration}`}>
                <div className={`${Styles.custom_link}`}>Contact us</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
