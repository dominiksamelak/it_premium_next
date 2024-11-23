import PClanding from "@/components/img/landing_photos/pcfix-main.png"
import "@/styles/pcfix.css"
import PriceList from "@/components/Pricelist.jsx";
import "@/styles/pricelist.css";
import Image from "next/image"

export default function PC() {
  return(
    <div className="pcfix-container">
      <div className="landing-photo-container">
        <Image src={PClanding} alt="pcifx" className='pcfix-landing-photo'/>
        <div className="text">
        <span className="text-title">TEST</span>
        <span className="text-subtitle">Test Test Test Test Test Test Test Test Test Test</span>
      </div>
    </div>
      <span className='pricelist-text'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      </span>
      <PriceList subpage="pcfix" />
    </div>
  )
}