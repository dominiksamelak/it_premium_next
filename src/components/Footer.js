import logo from "./img/icons/logo_footer.png";
import "@/styles/footer.css";
import Link from "next/link"
import Image from "next/image"
import logoDark from "@/components/img/icons/logo-navbar-dark.png"


export function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-line"></div>
      <div className="footer-items">
        <div className="logo-div">
          <Image
            src={logo}
            alt="logo"
            className="logo-footer"
            />
                      <Image
            src={logoDark}
            alt="logo"
            className="logo-footer-dark"
            />
            
        </div>
        <ul className="about-us">
          <div className="footer-titles">
            <span className="footer-bold">O Nas</span>
          </div>
          <Link href="/contact">Kontakt</Link>
          <Link href="/contact">Recenzje klientów</Link>
          <Link href="/realizations">Realizacje</Link>
          <Link href="/application-form" className="application-form-footer">
            Formularz zgłoszenia
          </Link>
        </ul>
        <ul className="services">
          <div className="footer-titles">
            <Link href="/services"><span className="footer-bold">Usługi</span></Link>
          </div>
          <Link href="/services/computer-repair">Naprawa komputerów</Link>
          <Link href="/services/phone-repair">Naprawa telefonów</Link>
          <Link href="/services/printer-repair">Naprawa drukarek</Link>
          <Link href="/services/data-recovery">Odzyskiwanie danych</Link>
          <Link href="/services/business-support">Obsługa firm</Link>
          <Link href="/services/electronics-repair">Naprawa elektroniki użytkowej</Link>
        </ul>
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.0005519890888!2d16.90730407762662!3d52.46101744059361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704436aa34834f1%3A0x72038cebaf375f7!2sIT-PREMIUM%20Centrum%20Serwisowe%20Serwis%20laphrefp%C3%B3w%2C%20telefon%C3%B3w%2C%20drukarek%2FPROFESJONALNE%20ODZYSKIWANIE%20DANYCH!5e0!3m2!1spl!2spl!4v1730674451313!5m2!1spl!2spl"
            width="400"
            height="250"
            frameBorder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabIndex="0"
            
          />
        </div>
      </div>
      <div className="authors">
        <span>Design by Macaroni Pepperoni, Realizacja by Harry Potter</span>
      </div>
    </div>
  );
}
