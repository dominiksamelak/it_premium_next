"use client";
import Image from "next/image";
import landingPhoto from "@/components/img/landing_photos/landingpage-main.png";
import mobileLanding from "@/components/img/landing_photos/mobile-landing.jpg";
import "@/styles/landingsection.css";
import Link from "next/link";
import { useIsMobile } from "@/components/useIsMobile";

export function LandingSection() {
  const isMobile = useIsMobile();
  return (
    <div className="landing-photo-container">
      <Image
        src={landingPhoto}
        alt="main"
        className="landing-photo"
        layout="responsive"
        priority
      />
      {/* <Image
        src={mobileLanding}
        alt="main"
        className="mobile-landing"
        layout="responsive"
        priority
      /> */}
      <div className="text">
        <h1 className="text-title">
          Przywołujemy zbuntowaną elektronikę do porządku!
        </h1>
        <p className="text-subtitle">
          Odwiedź nasz serwis w Poznaniu osobiście lub wyślij nam swoje
          urządzenie, a otrzymasz je z powrotem w wersji premium – w pełni
          sprawne i gotowe go działania.
        </p>
        {/* <p className="text-description">
          Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
        </p> */}
        {isMobile ? (
          <div></div>
        ) : (
          <Link href="/application-form" className="application-link">
            <span className="application-form">Nadaj sprzęt do naprawy</span>
          </Link>
        )}
      </div>
    </div>
  );
}
