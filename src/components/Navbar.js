"use client";
import { useState } from "react";
import "@/styles/navbar.css";
import Link from "next/link";
import Image from "next/image";
import mail from "@/components/img/icons/Mail.png";
import mapPin from "@/components/img/icons/Map_Pin.png";
import phone from "@/components/img/icons/Phone.png";
import facebook from "@/components/img/icons/social_icon.png";
import logo from "@/components/img/icons/logo_navbar.png";
import logo2 from "@/components/img/icons/logo_navbar_noname.png";
import hamburger from "@/components/img/icons/hamburger_menu.png";
import mobileITP from "@/components/img/icons/mobile-itp.png";
import ThemeSwitch from "@/components/ThemeSwitch.js"
import logoDark from "@/components/img/icons/logo-navbar-dark.png"
import phoneDark from "@/components/img/icons/Phone-dark.png"
import mapPinDark from  "@/components/img/icons/Map_Pin_dark.png"
import mailDark from  "@/components/img/icons/Mail-dark.png"
import facebookDark from "@/components/img/icons/social-icon-dark.png"
import logoMobileDark from "@/components/img/icons/logo-footer-dark.png"
import mobileITPDark from "@/components/img/icons/mobile-itp-dark.png"
import hamburgerDark from "@/components/img/icons/hamburger-dark.png"

export function Navbar({ isVisible }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className={`navbar ${isVisible ? "visible" : ""}`}>
      <div className="navbar-container">
        
        {/* Hamburger menu */}
        <div className="mobile-navbar">
          <Image src={logo2} alt="logo" className="logo2" />
          
          <Image src={mobileITP} alt="itp" className="logo2-name" />
          <Image src={logoMobileDark} alt="logo" className="logo-mobile-nav-dark" />
          
          <Image src={mobileITPDark} alt="itp" className="logo-name-mobile-nav-dark" />
          <div className="dark-hamburger">
            <div className="darkmode">
                  <ThemeSwitch />
                </div>
            <Image
              src={hamburger}
              alt="menu"
              className="hamburger-icon"
              onClick={handleClick}
            />
            <Image
              src={hamburgerDark}
              alt="menu"
              className="hamburger-icon-dark"
              onClick={handleClick}
            />
          </div>

          
        </div>
        
        <div className="mobile-menu-container">
          
          {/* Mobile Menu */}
          <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link href="/home" passHref onClick={handleLinkClick}>
                  <span>Strona główna</span>
                </Link>
              </li>
              <li>
                <Link href="/services" passHref onClick={handleLinkClick}>
                  <span>Usługi</span>
                </Link>
              </li>
              <li>
                <Link href="/realizations" passHref onClick={handleLinkClick}>
                  <span>Realizacje</span>
                </Link>
              </li>
              <li>
                <Link href="/applicationform" passHref onClick={handleLinkClick}>
                  <span>Formularz zgłoszenia</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref onClick={handleLinkClick}>
                  <span>Kontakt</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Rest of Navbar */}
        <div className="navbar-left">
          <div className="navbar-left-top">
            <div className="navbar-phone-number">
              <span className="phone-icon">
                <Image src={phone} alt="phone" className="phone"/>
                <Image src={phoneDark} alt="phone" className="phone-dark"/>
              </span>
              <span className="phone-number">+48 784 784 957</span>
            </div>
          </div>
          <div className="navbar-left-middle"></div>
          <div className="navbar-left-bottom">
            <ul className="navbar-links">
              <li className="navbar-links-list">
                <Link href="/home">
                  <span className="navbar-link-text">Strona główna</span>
                </Link>
              </li>
              <li
                className="navbar-links-list dropdown-container"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <Link href="/services" className="navbar-link-text">
                  Usługi
                </Link>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <Link href="/services/computer-repair">
                        Naprawa komputerów
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/services/phone-repair">
                        Naprawa telefonów
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/services/printer-repair">
                        Naprawa drukarek
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/services/data-recovery">
                        Odzyskiwanie danych
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/services/business-support">
                        Obsługa firm
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/services/electronics-repair">
                        Naprawa elektroniki użytkowej
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-middle">
          <Link href="/home">
            <Image src={logoDark} alt="logo" className="logo-dark" />
            <Image src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="navbar-right">
          <div className="navbar-right-top">
            <div className="navbar-socials">
              <div>
                <ThemeSwitch />
              </div>
              
              <span>
                <a
                  href="https://www.google.pl/maps/place/IT-PREMIUM+Centrum+Serwisowe+Serwis+laptop%C3%B3w,+telefon%C3%B3w,+drukarek%2FPROFESJONALNE+ODZYSKIWANIE+DANYCH/@52.4610174,16.9073041,17z/data=!3m1!4b1!4m6!3m5!1s0x4704436aa34834f1:0x72038cebaf375f7!8m2!3d52.4610142!4d16.909879!16s%2Fg%2F11cryfrr66?entry=ttu&g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={mapPin} alt="pin" className="map-pin"/>
                  <Image src={mapPinDark} alt="pin" className="map-pin-dark"/>
                </a>
              </span>
              <span>
                <Image src={mail} alt="mail" className="mail-icon"/>
                <Image src={mailDark} alt="mail" className="mail-icon-dark"/>
              </span>
              <span className="mail-adress">biuro@it-premium.pl</span>
              <span>
                <a
                  href="https://www.facebook.com/ITPremiumCentrumSerwisowe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={facebook} alt="facebook" className="facebook-icon" />
                  <Image src={facebookDark} alt="facebook" className="facebook-icon-dark" />
                </a>
              </span>
            </div>
          </div>
          <div className="navbar-right-middle"></div>
          <div className="navbar-right-bottom">
            <ul className="navbar-links">
              <li className="navbar-links-list">
                <Link href="/realizations">
                  <span className="navbar-link-text">Realizacje</span>
                </Link>
              </li>
              <li className="contakt-link-list">
                <Link href="/contact">
                  <span className="navbar-link-contact">Kontakt</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
