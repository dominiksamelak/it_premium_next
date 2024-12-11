import "@/styles/footer-mobile.css"
import phoneDark from "@/components/img/icons/Phone-dark.png"
import mapPinDark from  "@/components/img/icons/Map_Pin_dark.png"
import mailDark from  "@/components/img/icons/Mail-dark.png"
import facebookDark from "@/components/img/icons/social-icon-dark.png"
import Link from "next/link";
import Image from "next/image";
import mail from "@/components/img/icons/Mail.png";
import mapPin from "@/components/img/icons/Map_Pin.png";
import phone from "@/components/img/icons/Phone.png";
import facebook from "@/components/img/icons/social_icon.png";

export function FooterMobile() {

    return (
<footer className="footer-mobile-container-main">
  <div className="footer-line-mobile"></div>
  <div className="footer-mobile-container">

      <div className="about-mobile-footer">
        <span className="title-footer-mobile">
          O nas
        </span>
        <Link href="/services">Usługi</Link>
        <Link href="/contact">Kontakt</Link>
              <a
            href="https://www.google.pl/maps/place/IT-PREMIUM+Centrum+Serwisowe+Serwis+laptop%C3%B3w,+telefon%C3%B3w,+drukarek%2FPROFESJONALNE+ODZYSKIWANIE+DANYCH/@52.4606974,16.910462,17z/data=!4m8!3m7!1s0x4704436aa34834f1:0x72038cebaf375f7!8m2!3d52.4610142!4d16.909879!9m1!1b1!16s%2Fg%2F11cryfrr66?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >Oceny klientów</a>
        <Link href="/realizations">Nasze realizacje</Link>
        <Link href="/application-form" className="application-form-footer-mobile">
          Formularz zgłoszenia
        </Link>
      </div>
      <div className="socials-mobile">
        <a href="tel:+48784784957" aria-label="Zadzwoń do nas">
          <Image src={phone} alt="phone" className="phone-footer" />
          <Image src={phoneDark} alt="phone" className="phone-dark-footer" />
        </a>
        <span>
          <a
            href="https://www.google.pl/maps/place/IT-PREMIUM+Centrum+Serwisowe+Serwis+laptop%C3%B3w,+telefon%C3%B3w,+drukarek%2FPROFESJONALNE+ODZYSKIWANIE+DANYCH/@52.4610174,16.9073041,17z/data=!3m1!4b1!4m6!3m5!1s0x4704436aa34834f1:0x72038cebaf375f7!8m2!3d52.4610142!4d16.909879!16s%2Fg%2F11cryfrr66?entry=ttu&g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={mapPin} alt="pin" className="map-pin-footer"/>
            <Image src={mapPinDark} alt="pin" className="map-pin-dark-footer"/>
          </a>
        </span>
        <span>
          <a href="mailto:biuro@it-premium.pl" aria-label="Send us an email">
            <Image src={mail} alt="mail" className="mail-icon-footer" />
            <Image src={mailDark} alt="mail" className="mail-icon-dark-footer" />
          </a>
        </span>
        <span>
          <a
            href="https://www.facebook.com/ITPremiumCentrumSerwisowe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={facebook} alt="facebook" className="facebook-icon-footer" />
            <Image src={facebookDark} alt="facebook" className="facebook-icon-dark-footer" />
          </a>
        </span>
      </div>
  </div>
  

</footer>
    )

}
