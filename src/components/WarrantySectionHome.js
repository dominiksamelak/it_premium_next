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
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </span>
          <span className="warranty-text">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt.
          </span>
          <span className="warranty-text">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
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

