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

export function DescriptionSection() {
  const isMobile = useIsMobile(); 
  
  return (

    <div className="description">
      {isMobile ? (
        <Link href="/applicationform" className="application-link-mobile">
          <span className="application-form-mobile">Formularz zgłoszenia</span>
        </Link>) : (<div></div>) 
      }
      <motion.div 
        className="description-one"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="color-updown"></span>
        <div className="description-one-container">
          <span className="description-text-one">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            
            quia consequuntur magni</span>
          <span className="description-text-two">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
           
          </span>
          {isMobile ? (
            <div className="description-text-three">

              <span className="description-text-three-content">
                Excepteur sint occaecat cupidatat non deserunt mollit anim id est laborum! 
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
              Excepteur sint occaecat cupidatat non deserunt mollit anim id est laborum!
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
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
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
              Excepteur sint occaecat cupidatat non deserunt mollit anim id est laborum!
            </span>
          </div>
        ) : (
          <div className="description-text-three">
            Excepteur sint occaecat cupidatat non deserunt mollit anim id est laborum!
          </div>
        )}

        <span className="description-text-two">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqu
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
            />
          </div>
    </div>
  );
}