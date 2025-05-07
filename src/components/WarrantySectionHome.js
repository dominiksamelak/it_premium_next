  "use client";
  import "@/styles/warrantysectionhome.css"    
  import { motion } from "framer-motion";
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
          <span className="warranty-text">
            IKONY
          </span>

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

