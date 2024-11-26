import PhoneFix from "@/components/img/landing_photos/phonefix-main.png"
import "@/styles/phonefix.css"
import PriceList from "@/components/Pricelist.js";
import Image from "next/image"

export default function Phone() {
  return(
    <div className="phone-container">
      <div className="landing-photo-container">
        <Image src={PhoneFix} alt="phonefix" className='phonefix-landing-photo'/>
        <div className="text">
        <span className="text-title">TEST</span>
        <span className="text-subtitle">Test Test Test Test Test Test Test Test Test Test</span>
      </div>
    </div>
      <span className='pricelist-text'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      </span>
      <PriceList subpage="phonefix"/>
    </div>
  )
}