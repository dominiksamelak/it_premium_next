"use client";
import "react-google-reviews/dist/index.css";
import { ReactGoogleReviews } from "react-google-reviews";    
import { motion } from "framer-motion";
import Image from "next/image";
import descPhotoOne from "../components/img/home/desc-photo-one.png";
import descPhotoTwo from "../components/img/home/desc-photo-two.png";     
import "../styles/descriptionsectionhome.css";
import { useIsMobile } from "@/components/useIsMobile"; 
import Link from "next/link"
import { useTheme } from "next-themes"; 
export function DescriptionSection() {
  const isMobile = useIsMobile(); 
  const { resolvedTheme } = useTheme();
  
  return (

    <div className="description">
      {isMobile ? (
        <Link href="/applicationform" className="application-link-mobile">
          <span className="application-form-mobile">Formularz zgłoszenia</span>
        </Link>) : (<div></div>) 
      }
      <motion.div 
        className="description-one"
        // initial={{ x: -200, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 1 }}
        // viewport={{ once: true, amount: 0.3 }}
      >
        <span className="color-updown"></span>
        <div className="description-one-container">
          <span className="description-text-one">Naprawiamy laptopy, komputery stacjonarne, 
            wszystkie modele telefonów komórkowych, drukarki oraz elektronikę użytkową. Szybko postawimy Twoje urządzenie na nogi. </span>
          <span className="description-text-two">
            Odzyskujemy dane za pomocą najnowocześniejszych technologii. 
            To znacznie zwiększa szansę na to, że przywrócimy pliki, nawet gdy w pierwszej chwili wydaje Ci się to niemożliwe. 
           
          </span>
          {isMobile ? (
            <div className="description-text-three">

              <span className="description-text-three-content">
                Opiekujemy się infrastrukturą IT w firmach. Przygotowujemy dokumentację do audytów, zabezpieczamy dane i
                 dbamy o sprawne funkcjonowanie wszystkich urządzeń elektronicznych, aby technologia wspierała rozwój Twojego biznesu.
              </span>
              <Image
                src={descPhotoOne}
                alt="photo"
                className="desc-photo"
                layout="responsive"
                priority
              />
            </div>
          ) : (
            <span className="description-text-three">
              Opiekujemy się infrastrukturą IT w firmach. Przygotowujemy dokumentację do audytów, zabezpieczamy dane
               i dbamy o sprawne funkcjonowanie wszystkich urządzeń elektronicznych, aby technologia wspierała rozwój Twojego biznesu.
            </span>
          )}
        </div>

        {!isMobile ? (
        <Image
          src={descPhotoOne}
          className="desc-photo"
          alt="photo"
          layout="responsive"
          priority
          
        />
        ) : (<div></div>)
        }
      </motion.div>

      <motion.div 
        className="description-two"
        // initial={{ x: 200, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 1 }}
        // viewport={{ once: true, amount: 0.3 }}
      >
        {!isMobile ? (
          <Image
            src={descPhotoTwo}
            className="desc-photo"
            alt="photo"
            layout="responsive"
            priority
          />
        ) : (
          <div></div>  
        )}

      <div className="description-two-container">
        {isMobile ? (
          <div className="description-text-three">
            <Image
              src={descPhotoTwo}
              alt="photo"
              className="desc-photo"
              layout="responsive"
              priority
            />
            <span className="description-text-three-content">
              Sprawdź, jak radzimy sobie z wyzwaniami, jakie stawiają przed nami klienci! 
            </span>
          </div>
        ) : (
          <div className="description-text-three">
            Sprawdź, jak radzimy sobie z wyzwaniami, jakie stawiają przed nami klienci! 
          </div>
        )}

        <span className="description-text-two">
          I co sprawia, że średnia naszych ocen to 5 gwiazdek. 😉
        </span>

        {/* Google Reviews for non-mobile */}
        {!isMobile && (
          <div className="google-reviews-desc">
            <ReactGoogleReviews
              layout="badge"
              featurableId="f9a57238-df62-4c52-8448-6d9130fdedd3"
            />
          </div>
        )}
      </div>

      <span className="color-updown-two"></span>
        </motion.div>
          <div className="google-reviews-desc-mobile">
            <ReactGoogleReviews
              layout="badge"
              featurableId="f9a57238-df62-4c52-8448-6d9130fdedd3"
              
            />
          </div>
          <div className="google-reviews">
            <ReactGoogleReviews
              layout="carousel"
              featurableId="f9a57238-df62-4c52-8448-6d9130fdedd3"
              theme={resolvedTheme}
            />
          </div>
    </div>
  );
}