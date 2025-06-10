import PhoneFix from "@/components/img/landing_photos/phonefix-main.png";
import "@/styles/phonefix.css";
import PriceList from "@/components/Pricelist.js";
import "@/styles/pricelist.css";
import Image from "next/image";

export default function Phone() {
  return (
    <div className="phone-container">
      <div className="landing-photo-container">
        <Image
          src={PhoneFix}
          alt="phonefix"
          className="phonefix-landing-photo"
        />
        <div className="text">
          <span className="text-title">
            Profesjonalna naprawa telefonów i smartfonów
          </span>
          <span className="text-subtitle">
            Szybka diagnoza i naprawa – przywróć sprawność swojego urządzenia
          </span>
        </div>
      </div>
      <span className="pricelist-text-phone">
        Twój smartfon odmówił posłuszeństwa?
        <br /> <br /> Doskonale wiemy, jak ważne jest szybkie przywrócenie go do
        użytku, dlatego błyskawicznie zajmiemy się nim nienależnie od rodzaju
        usterki.
        <strong>Darmowa diagnoza </strong>daje Ci pewność, że zapłacisz tylko za
        rzeczywiście wykonane usługi, a <strong>12-miesięczna gwarancja</strong>{" "}
        potwierdza jakość naszej pracy.
        <br /> <br /> Na czas naprawy oferujemy telefon zastępczy, aby
        zminimalizować wszelkie niedogodności.
      </span>
      <PriceList subpage="phonefix" />
    </div>
  );
}
