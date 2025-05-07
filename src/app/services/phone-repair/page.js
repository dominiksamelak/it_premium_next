import PhoneFix from "@/components/img/landing_photos/phonefix-main.png"
import "@/styles/phonefix.css"
import PriceList from "@/components/Pricelist.js";
import Image from "next/image"
import PhoneFixMobile from "@/components/img/landing_photos/phonefix-main-mobile.png"

export default function Phone() {
  return(
    <div className="phone-container">
      <div className="landing-photo-container">
        <Image src={PhoneFix} alt="phonefix" className='phonefix-landing-photo'/>
        <Image src={PhoneFixMobile} alt="phonefix" className='phonefix-landing-photo-mobile'/>
        <div className="text">
        <span className="text-title">Ciesz się niezawodnym telefonem przez lata</span>
        <span className="text-subtitle">Od zbitej szybki po awarie płyty głównej – naprawiamy telefony bez względu na skalę problemu</span>
      </div>
    </div>
      <span className='pricelist-text'>
      Twój smartfon odmówił posłuszeństwa?<br /> <br/> Doskonale wiemy, jak ważne jest szybkie przywrócenie go do użytku, dlatego błyskawicznie zajmiemy się nim nienależnie od rodzaju usterki. 
      <strong>Darmowa diagnoza </strong>daje Ci pewność, że zapłacisz tylko za rzeczywiście wykonane usługi, a <strong>12-miesięczna gwarancja</strong> potwierdza jakość naszej pracy.<br /> <br/> Na czas naprawy oferujemy telefon zastępczy, aby zminimalizować wszelkie niedogodności. 
      </span>
      <PriceList subpage="phonefix"/>
    </div>
  )
}