  "use client";
  import "@/styles/warrantysectionhome.css"    
  import { motion } from "framer-motion";
  import Image from "next/image"
  import WarrantyIconLight from "@/components/img/icons/warranty_light.png"
  import WarrantyIconDark from "@/components/img/icons/warranty_dark.png"
  import ReplecamentIconLight from "@/components/img/icons/replacement_light.png"
  import ReplecamnetIconDark from "@/components/img/icons/replacement_dark.png"
  import DiagnosisIconLight from "@/components/img/icons/diagnosis_light.png"
  import DiagnosisIconDark from "@/components/img/icons/diagnosis_dark.png"
    export function WarrantySection() {
      return (
      <div className="warranty">
        <motion.div 
          className="color-updown-two-warranty"
          initial={{ y: -100, opacity: 0  }}
          whileInView={{ y:0, opacity: 1  }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        ></motion.div>
        <div className="warranty-desc">
          <span className="warranty-title">Gwarancja</span>
          <span className="warranty-text">
            Rozumiemy, że problemy z urządzeniem, którego potrzebujesz na co dzień, 
            to wystarczająco dużo stresu. Dlatego chcemy zagwarantować maksymalne poczucie bezpieczeństwa!
          </span>
          <div className="warranty-icons">
            <div className="icons-desc">
                <Image src={DiagnosisIconLight} className="icon-light" alt="diagnoza"/>
                Darmową diagnozę
              </div>
              <div className="icons-desc">
                <Image src={ReplecamentIconLight} className="icon-light" alt="diagnoza"/>
                Sprzęt zastępczy
              </div>
              <div className="icons-desc">
                <Image src={WarrantyIconLight} className="icon-light" alt="diagnoza"/>
                12-miesięczną gwarancję
              </div>
              <div className="icons-desc-dark">
                <Image src={DiagnosisIconDark} className="icon-dark" alt="diagnoza"/>
                Darmową diagnozę
              </div>
              <div className="icons-desc-dark">
                <Image src={ReplecamnetIconDark} className="icon-dark" alt="diagnoza"/>
                Sprzęt zastępczy
              </div>
              <div className="icons-desc-dark">
                <Image src={WarrantyIconDark} className="icon-dark" alt="diagnoza"/>
                12-miesięczną gwarancję
              </div>
          </div>

        </div>
        <motion.div 
          className="color-updown-warranty"
          initial={{ y: 100, opacity: 0  }}
          whileInView={{ y:0, opacity: 1  }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        ></motion.div>
      </div>
      )
    }  

