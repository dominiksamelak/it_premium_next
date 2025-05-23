import OtherFix from "@/components/img/landing_photos/otherfix-main.png"
import "@/styles/otherfix.css"
import Image from "next/image"
import OtherFixMobile from "@/components/img/landing_photos/otherfix-main-mobile.png"

export default function OtherElectronics() {
  return(
    <div className="otherfix-container">
        <div className="landing-photo-container">
          <Image src={OtherFix} alt="otherfix" className='otherfix-landing-photo'/>
          <Image src={OtherFixMobile} alt="otherfix" className='otherfix-landing-photo-mobile'/>
          <div className="text">
          <span className="text-title">Pomóż swojej konsoli wrócić do gry</span>
          <span className="text-subtitle">Serwisujemy konsole wszystkich marek: PlayStation, Xbox, Nintendo i inne</span>
        </div>
      </div>
        <span className='pricelist-text'>
          Twoja konsola potrzebuje szybkiej reanimacji? Podczas <strong>darmowej diagnozy</strong> błyskawicznie namierzymy problem i przedstawimy koszt jego rozwiązania. <br/><br/>
          Trudne przypadki to nasza specjalność – nieważne, czy Twoje PS5 ma problemy z zasilaniem, Xbox cierpi na niedziałające porty, czy Nintendo wyłącza się bez ostrzeżenia. Zyskaj dodatkowe życie dla swojego sprzętu – na każdą usługę dajemy aż <strong>12 miesięcy gwarancji</strong>. 
        </span>
        {/* <PriceList /> */}
    </div>
  )}