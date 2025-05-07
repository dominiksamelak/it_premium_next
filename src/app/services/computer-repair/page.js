import PClanding from "@/components/img/landing_photos/pcfix-main.png"
import "@/styles/pcfix.css"
import PriceList from "@/components/Pricelist.js";
import "@/styles/pricelist.css";
import Image from "next/image"
import PClandingMobile from "@/components/img/landing_photos/pcfix-main-mobile.png"

export default function PC() {
  return(
    <div className="pcfix-container">
      <div className="landing-photo-container">
        <Image src={PClanding} alt="pcifx" className='pcfix-landing-photo'/>
        <Image src={PClandingMobile} alt="pcifx" className='pcfix-landing-photo-mobile'/>
        <div className="text">
        <span className="text-title">Odzyskaj pełną sprawność swojego sprzętu komputerowego</span>
        <span className="text-subtitle">Diagnoza, naprawa i optymalizacja – wszystko, czego potrzebuje <br />Twój laptop lub komputer stacjonarny</span>
      </div>
    </div>
      <span className='pricelist-text'>
        Z Twoim komputerem lub laptopem jest coś nie tak? <br /><br />  <strong>Bezpłatnie zdiagnozujemy</strong> problem, 
        więc zanim podejmiesz decyzję o naprawie, poznasz jej zakres i koszt. Dzięki <strong>12-miesięcznej gwarancji</strong> na usługi masz pewność,
        że Twoje urządzenie wróci do pełnej sprawności na długi czas.<br /><br /> A <strong>sprzęt zastępczy</strong>, który otrzymasz w trakcie serwisowania, pozwoli Ci kontynuować codzienne działania bez nieplanowanych przerw! 
      </span>
      <PriceList subpage="pcfix" />
    </div>
  )
}