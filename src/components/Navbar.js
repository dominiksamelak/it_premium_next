import "@/styles/navbar.css";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component
import mail from "@/components/img/icons/Mail.png";
import mapPin from "@/components/img/icons/Map_Pin.png";
import phone from "@/components/img/icons/Phone.png";
import facebook from "@/components/img/icons/social_icon.png";
import logo from "@/components/img/icons/logo_navbar.png";

export function Navbar({ isVisible }) {
  return (
    <nav className={`navbar ${isVisible ? "visible" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-left-top">
            <div className="navbar-phone-number">
              <span className="phone-icon">
                <Image 
                  src={phone} 
                  alt="phone" 

                />
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
              <li className="navbar-links-list">
                <Link href="/services">
                  <span className="navbar-link-text">Usługi</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-middle">
          <Image 
            src={logo} 
            alt="logo" 
            className="logo" 
 
          />
        </div>
        <div className="navbar-right">
          <div className="navbar-right-top">
            <div className="navbar-socials">
              <span>
                <a
                  href="https://www.google.pl/maps/place/IT-PREMIUM+Centrum+Serwisowe+Serwis+laptop%C3%B3w,+telefon%C3%B3w,+drukarek%2FPROFESJONALNE+ODZYSKIWANIE+DANYCH/@52.4610174,16.9073041,17z/data=!4m6!3m5!1s0x4704436aa34834f1:0x72038cebaf375f7!8m2!3d52.4610142!4d16.909879!16s%2Fg%2F11cryfrr66?entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image 
                    src={mapPin} 
                    alt="pin" 

                  />
                </a>
              </span>
              <span>
                <Image 
                  src={mail} 
                  alt="mail" 

                />
              </span>
              <span className="mail-adress">biuro@it-premium.pl</span>
              <span>
                <a
                  href="https://www.facebook.com/ITPremiumCentrumSerwisowe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image 
                    src={facebook} 
                    alt="facebook" 
                    className="facebook-icon"
                  />
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
