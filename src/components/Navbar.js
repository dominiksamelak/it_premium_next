"use client"
import { useState } from "react";
import "@/styles/navbar.css";
import Link from "next/link";
import Image from "next/image";
import mail from "@/components/img/icons/Mail.png";
import mapPin from "@/components/img/icons/Map_Pin.png";
import phone from "@/components/img/icons/Phone.png";
import facebook from "@/components/img/icons/social_icon.png";
import logo from "@/components/img/icons/logo_navbar.png";

export function Navbar({ isVisible }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className={`navbar ${isVisible ? "visible" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-left-top">
            <div className="navbar-phone-number">
              <span className="phone-icon">
                <Image src={phone} alt="phone" />
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
                <Link href="/services" className="navbar-link-text">Usługi</Link>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <Link href="/services/computer-repair">Naprawa komputerów</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/services/phone-repair">Naprawa telefonów</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/services/printer-repair">Naprawa drukarek</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/services/data-recovery">Odzyskiwanie danych</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/services/business-support">Obsługa firm</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/services/electronics-repair">Naprawa elektroniki użytkowej</Link>
                    </li>
                  </ul>
                )}
              </li>

            </ul>
          </div>
        </div>
        <div className="navbar-middle">
          <Link href="/home">
          <Image src={logo} alt="logo" className="logo" />
          </Link>
          
        </div>
        <div className="navbar-right">
          <div className="navbar-right-top">
            <div className="navbar-socials">
              <span>
                <a
                  href="https://www.google.pl/maps/place/IT-PREMIUM+Centrum+Serwisowe+Serwis+laptop%C3%B3w,+telefon%C3%B3w,+drukarek%2FPROFESJONALNE+ODZYSKIWANIE+DANYCH"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={mapPin} alt="pin" />
                </a>
              </span>
              <span>
                <Image src={mail} alt="mail" />
              </span>
              <span className="mail-adress">biuro@it-premium.pl</span>
              <span>
                <a
                  href="https://www.facebook.com/ITPremiumCentrumSerwisowe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={facebook} alt="facebook" className="facebook-icon" />
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
