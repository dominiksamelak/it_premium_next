import PrinterFix from "@/components/img/landing_photos/printerfix-main.png"
import "@/styles/printerfix.css"
import PriceList from "@/components/Pricelist.js";
import Image from "next/image"
import "@/styles/pricelist.css";
import PrinterFixMobile from "@/components/img/landing_photos/printerfix-main-mobile.png"

export default function Printers() {
  return(
    <div className="printer-container">
      <div className="landing-photo-container">
        <Image src={PrinterFix} alt="printerifx" className='printerfix-landing-photo'/>
        <Image src={PrinterFixMobile} alt="printerifx" className='printerfix-landing-photo-mobile'/>
        <div className="text">
        <span className="text-title">TEST</span>
        <span className="text-subtitle">Test Test Test Test Test Test Test Test Test Test</span>
      </div>
    </div>
      <span className='pricelist-text'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      </span>
      <PriceList subpage="printerfix"/>
    </div>
  )
}