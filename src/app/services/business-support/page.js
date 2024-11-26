import Company from "@/components/img/landing_photos/company-main.png"
import "@/styles/company.css"
import Image from "next/image"

export default function CompaniesCoop() {
  return(
    <div className="company-container">
        <div className="landing-photo-container">
          <Image src={Company} alt="company" className='company-landing-photo'/>
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
  )
}