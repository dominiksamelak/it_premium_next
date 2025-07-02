"use client";
import "react-google-reviews/dist/index.css";
import { ReactGoogleReviews } from "react-google-reviews";
import { motion } from "framer-motion";
import Image from "next/image";
import descPhotoOne from "../components/img/home/desc-photo-one.png";
import descPhotoTwo from "../components/img/home/desc-photo-two.png";
import "../styles/descriptionsectionhome.css";
import { useIsMobile } from "@/components/useIsMobile";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRef, useEffect } from "react";

export function DescriptionSection() {
  const isMobile = useIsMobile();
  const { resolvedTheme } = useTheme();

  const descTextOneRef = useRef(null);
  const colorUpdownRef = useRef(null);
  const descTextTwoRef = useRef(null);
  const colorUpdownTwoRef = useRef(null);
  const descOneTextTopRef = useRef(null);
  const descOneRef = useRef(null);
  const descTwoRef = useRef(null);

  useEffect(() => {
    function updateHeights() {
      if (descOneRef.current && colorUpdownRef.current) {
        const h = descOneRef.current.offsetHeight;
        colorUpdownRef.current.style.height = h * 1.1 + "px";
      }
      if (descTwoRef.current && colorUpdownTwoRef.current) {
        const h = descTwoRef.current.offsetHeight;
        colorUpdownTwoRef.current.style.height = h * 1.1 + "px";
      }
    }
    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <div className="description">
      {isMobile ? (
        <Link href="/application-form" className="application-link-mobile">
          <span className="application-form-mobile">Nadaj sprzęt do naprawy</span>
        </Link>
      ) : (
        <div></div>
      )}
      <div
        className="description-one"
        ref={descOneRef}
      >
        <span className="color-updown" ref={colorUpdownRef}></span>
        <div className="description-text-block" ref={descTextOneRef}>
          <div className="desc-one-text-top" ref={descOneTextTopRef}>
            <span className="description-text-one">
              Naprawiamy laptopy, komputery stacjonarne, wszystkie modele
              telefonów komórkowych, drukarki oraz elektronikę użytkową. Szybko
              postawimy Twoje urządzenie na nogi. {" "}
            </span>
            <span className="description-text-two">
              Odzyskujemy dane za pomocą najnowocześniejszych technologii. To
              znacznie zwiększa szansę na to, że przywrócimy pliki, nawet gdy w
              pierwszej chwili wydaje Ci się to niemożliwe.
            </span>
          </div>
          <div className="desc-one-bottom-row">
            <span className="description-text-three">
              Opiekujemy się infrastrukturą IT w firmach. Przygotowujemy
              dokumentację do audytów, zabezpieczamy dane i dbamy o sprawne
              funkcjonowanie wszystkich urządzeń elektronicznych, aby
              technologia wspierała rozwój Twojego biznesu.
            </span>
            <Image
              src={descPhotoOne}
              className="desc-photo desc-photo-large"
              alt="photo"
              layout="responsive"
              priority
            />
          </div>
        </div>
      </div>

      <div
        className="description-two"
        ref={descTwoRef}
      >
        <div className="description-two-textline-wrapper">
          <div className="desc-two-bottom-row">
            <Image
              src={descPhotoTwo}
              className="desc-photo desc-photo-large"
              alt="photo"
              layout="responsive"
              priority
            />
            <span className="description-text-three">
              Sprawdź, jak radzimy sobie z wyzwaniami, jakie stawiają przed nami
              klienci!
            </span>
          </div>
          <span className="color-updown-two" ref={colorUpdownTwoRef}></span>
        </div>
        <div className="desc-two-text-bottom">
          <span className="description-text-two">
            I co sprawia, że średnia naszych ocen to 5 gwiazdek. 😉
          </span>
        </div>
      </div>
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
