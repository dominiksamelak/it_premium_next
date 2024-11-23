import OtherFix from "@/components/img/landing_photos/otherfix-main.png"
import "@/styles/otherfix.css"
import Image from "next/image"

export default function OtherElectronics() {
  return(
    <div className="otherfix-container">
        <div className="landing-photo-container">
          <Image src={OtherFix} alt="otherfix" className='otherfix-landing-photo'/>
          <div className="text">
          <span className="text-title">TEST</span>
          <span className="text-subtitle">Test Test Test Test Test Test Test Test Test Test</span>
        </div>
      </div>
        <span className='pricelist-text'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        </span>
        {/* <PriceList /> */}
    </div>
  )}