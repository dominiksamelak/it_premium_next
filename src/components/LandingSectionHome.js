
import Image from "next/image";
import landingPhoto from "../components/img/landing_photos/landingpage-main.png";
import "@/styles/landingsection.css";
import Link from "next/link"

export function LandingSection() {
  return (
    <div className="landing-photo-container">
      <Image
        src={landingPhoto}
        alt="main"
        className="landing-photo"
        layout="responsive"
        priority
      />
      <div className="text">
        <h1 className="text-title">TEST</h1>
        <p className="text-subtitle">Test Test Test Test Test Test Test Test Test Test</p>
        <p className="text-description">
          Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
        </p>
        <Link href="/applicationform" className="application-link">
          <span className="application-form">Formularz zgłoszenia</span>
        </Link>
      </div>
    </div>
  );
}

