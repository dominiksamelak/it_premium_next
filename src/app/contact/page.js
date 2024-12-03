"use client"
import "@/styles/contact.css"
import mail from "@/components/img/icons/Mail.png"
import mapPin from "@/components/img/icons/Map_Pin.png"
import phone from "@/components/img/icons/Phone.png"
import facebook from "@/components/img/icons/social_icon.png"
import Image from "next/image"
import { useIsMobile } from "@/components/useIsMobile";

export default function Contact() {

  const isMobile = useIsMobile();

  return(
    <div className="contact-main-container">
      <div className="contact-container">
        <div className="line"></div>
        <div className="contact-subcontainer">
          <div className="contact-info">
            <span className="contact-title">Skontaktuj się z nami</span>
            <div className="contact-info-subcontainer">
              <div className="contact-info-info">
                <span className="contact-name">IT-Premium Centrum Serwisowe</span>
                <span className="contact-address">Adres</span>
                <span className="contact-address-location"><Image src={mapPin} alt="pin" className="map-pin"></Image>Osiedle Jana III Sobieskiego 41F <br /> 60-688 Poznań</span>
                <span className="contact-support">Wsparcie</span>
                <span className="contact-mail"><Image src={mail} alt="mail" className="mail-icon"></Image>biuro@it-premium.pl</span>
                <span className="contact-phone"><Image src={phone} alt="phone" className="phone-contact-icon"></Image>+48 784 784 957</span>
                <span className="contact-social">Obserwuj nas</span>
                <span className="contact-social-icon"><Image src={facebook} alt="facebook"></Image></span>
                <span className="contact-time">Godziny otwarcia</span>
                <span className="contact-open-day">Poniedziałek - Piątek</span>
                <span className="contact-open-time">9:00 - 17:00</span>
              </div>
              {isMobile ? (<div></div>) : 
              (            <div className="contact-map">
                <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.0005519890888!2d16.90730407762662!3d52.46101744059361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704436aa34834f1%3A0x72038cebaf375f7!2sIT-PREMIUM%20Centrum%20Serwisowe%20Serwis%20laptop%C3%B3w%2C%20telefon%C3%B3w%2C%20drukarek%2FPROFESJONALNE%20ODZYSKIWANIE%20DANYCH!5e0!3m2!1spl!2spl!4v1730674451313!5m2!1spl!2spl"
                            width="400"
                            height="400"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            aria-hidden="false"
                            tabIndex="0"
                  />
              </div>)
              }
            </div>
          </div>
        </div>
      </div>
      <div className="caontact-map-mobile-container">
        {isMobile ? (  
          <div className="contatct-map-mobile">
                <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.0005519890888!2d16.90730407762662!3d52.46101744059361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704436aa34834f1%3A0x72038cebaf375f7!2sIT-PREMIUM%20Centrum%20Serwisowe%20Serwis%20laptop%C3%B3w%2C%20telefon%C3%B3w%2C%20drukarek%2FPROFESJONALNE%20ODZYSKIWANIE%20DANYCH!5e0!3m2!1spl!2spl!4v1730674451313!5m2!1spl!2spl"
                            width="300"
                            height="300"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            aria-hidden="false"
                            tabIndex="0"
                  />
          </div>) :
          <div></div>
        }
      </div>
    </div>


  )
}