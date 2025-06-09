import Company from "@/components/img/landing_photos/company-main.png";
import "@/styles/company.css";
import PriceList from "@/components/Pricelist.js";
import "@/styles/pricelist.css";
import Image from "next/image";

export default function Business() {
  return (
    <div className="company-container">
      <div className="landing-photo-container">
        <Image src={Company} alt="company" className="company-landing-photo" />
        <div className="text">
          <span className="text-title">
            Wsparcie IT dla firm i przedsiębiorstw
          </span>
          <span className="text-subtitle">
            Profesjonalne usługi IT – wspieramy rozwój Twojej firmy
          </span>
        </div>
      </div>
      <span className="pricelist-text">
        Awaria drukarki w dniu ważnej prezentacji? Problemy z siecią, gdy trzeba
        pilnie wysłać raport? A może dane firmowe zniknęły akurat wtedy, gdy
        szef ich potrzebuje?
        <br /> <br />
        Znamy realia prowadzenia firmy i wiemy, że nawet drobne usterki mogą
        sparaliżować pracę całego przedsiębiorstwa. Dlatego stworzyliśmy usługę
        IT, która zabezpieczy Twój biznes przed kosztownymi przestojami i
        ściągnie z Twojej głowy kilka żmudnych obowiązków! <br /> <br />
        Przeprowadzimy <b>bezpłatny audyt </b>urządzeń IT w Twojej firmie.
        Zdiagnozujemy bieżące problemy oraz te, które mogą pojawić się w
        przyszłości, i zaproponujemy optymalny plan działania. <br /> <br />
        Pomożemy w utrzymaniu sprawności sprzętu, aby zapobiegać awariom, a gdy
        się jednak pojawią – błyskawicznie zareagować, aby Twoja firma nie
        traciła cennego czasu.
        <br /> <br />
        Przygotujemy dokumentację infrastruktury IT, która ułatwi bieżące
        funkcjonowanie przedsiębiorstwa oraz jest niezbędna podczas wewnętrznych
        i zewnętrznych audytów. <br /> <br />
        Porozmawiajmy, jak możemy pomóc Twojej firmie!
        <br /> <br />
        ☎️ Zadzwoń: 784 784 957
      </span>
      {/* <PriceList /> */}
    </div>
  );
}
