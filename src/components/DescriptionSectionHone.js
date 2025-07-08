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
  const descOneTextsContentRef = useRef(null);

  useEffect(() => {
    function updateHeights() {
      if (descOneTextsContentRef.current && colorUpdownRef.current) {
        if (window.innerWidth <= 640) {
          // Mobile: color-updown height = 1.05x desc-one-texts-content
          const h = descOneTextsContentRef.current.offsetHeight;
          colorUpdownRef.current.style.height = h * 1.05 + "px";
        } else {
          // Desktop: color-updown height = 1.05x desc-one-texts-content
          const h = descOneTextsContentRef.current.offsetHeight;
          colorUpdownRef.current.style.height = h * 1.05 + "px";
        }
      } else if (colorUpdownRef.current) {
        colorUpdownRef.current.style.height = "";
      }

      if (descTwoRef.current && colorUpdownTwoRef.current) {
        if (window.innerWidth <= 640) {
          // Mobile: color-updown-two height = 1.05x desc-two-texts-content
          const descTwoTextsContent = descTwoRef.current.querySelector(
            ".desc-two-texts-content"
          );
          if (descTwoTextsContent) {
            const h = descTwoTextsContent.offsetHeight;
            colorUpdownTwoRef.current.style.height = h * 1.05 + "px";
          }
        } else {
          // Desktop: color-updown-two height = 1.05x desc-two-image
          const descTwoImage =
            descTwoRef.current.querySelector(".desc-two-image");
          if (descTwoImage) {
            const h = descTwoImage.offsetHeight;
            colorUpdownTwoRef.current.style.height = h * 1.05 + "px";
          }
        }
      } else if (colorUpdownTwoRef.current) {
        colorUpdownTwoRef.current.style.height = "";
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
          <span className="application-form-mobile">
            Nadaj sprzęt do naprawy
          </span>
        </Link>
      ) : (
        <div></div>
      )}
      <div className="description-one" ref={descOneRef}>
        <div className="desc-one-content">
          <div className="description-text-block" ref={descTextOneRef}>
            <div className="desc-one-texts-row">
              <span className="color-updown" ref={colorUpdownRef}></span>
              <div
                className="desc-one-texts-content"
                ref={descOneTextsContentRef}
              >
                <div className="desc-one-text-top" ref={descOneTextTopRef}>
                  <span className="description-text-one">
                    Naprawiamy laptopy, komputery stacjonarne, wszystkie modele
                    telefonów komórkowych, drukarki oraz elektronikę użytkową.
                    Szybko postawimy Twoje urządzenie na nogi.{" "}
                  </span>
                  <span className="description-text-two">
                    Odzyskujemy dane za pomocą najnowocześniejszych technologii.
                    To znacznie zwiększa szansę na to, że przywrócimy pliki,
                    nawet gdy w pierwszej chwili wydaje Ci się to niemożliwe.
                  </span>
                </div>
                <span className="description-text-three">
                  {isMobile ? (
                    <div className="mobile-text-image-layout">
                      <div className="mobile-text-content">
                        <div className="mobile-text-above">
                          Opiekujemy się infrastrukturą IT w firmach.
                          Przygotowujemy dokumentację do audytów, zabezpieczamy
                          dane i dbamy o sprawne funkcjonowanie wszystkich
                          urządzeń elektronicznych, aby technologia wspierała
                          rozwój Twojego biznesu.
                        </div>
                        <div className="mobile-text-next-to">
                          <div className="mobile-text-side">
                            <p>
                              Oferujemy kompleksowe wsparcie techniczne i
                              konsultacje.
                            </p>
                            <p>
                              Nasz zespół ekspertów jest zawsze gotowy do
                              pomocy.
                            </p>
                          </div>
                          <Image
                            src={descPhotoOne}
                            className="desc-photo desc-photo-large"
                            alt="photo"
                            width={140}
                            height={140}
                            style={{
                              borderRadius: "50%",
                              objectFit: "cover",
                              display: "block",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      Opiekujemy się infrastrukturą IT w firmach. Przygotowujemy
                      dokumentację do audytów, zabezpieczamy dane i dbamy o
                      sprawne funkcjonowanie wszystkich urządzeń
                      elektronicznych, aby technologia wspierała rozwój Twojego
                      biznesu.
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>
          {!isMobile && (
            <div className="desc-one-image">
              <Image
                src={descPhotoOne}
                className="desc-photo desc-photo-large"
                alt="photo"
                layout="responsive"
                priority
              />
            </div>
          )}
        </div>
      </div>

      <div className="description-two" ref={descTwoRef}>
        <div className="desc-two-image">
          <Image
            src={descPhotoTwo}
            className="desc-photo desc-photo-large"
            alt="photo"
            layout="responsive"
            priority
          />
        </div>
        <div className="desc-two-texts-content">
          <span className="description-text-one">
            Sprawdź, jak radzimy sobie z wyzwaniami, jakie stawiają przed nami
            klienci!
          </span>
          <span className="description-text-two">
            I co sprawia, że średnia naszych ocen to 5 gwiazdek. 😉
          </span>
          <div className="google-reviews-badge">
            <ReactGoogleReviews
              layout="badge"
              featurableId="f9a57238-df62-4c52-8448-6d9130fdedd3"
            />
          </div>
        </div>
        <span className="color-updown-two" ref={colorUpdownTwoRef}></span>
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
