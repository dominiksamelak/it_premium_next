import PrinterFix from "@/components/img/landing_photos/printerfix-main.png";
import "@/styles/printerfix.css";
import PriceList from "@/components/Pricelist.js";
import Image from "next/image";
import "@/styles/pricelist.css";

export default function Printer() {
  return (
    <div className="printer-container">
      <div className="landing-photo-container">
        <Image
          src={PrinterFix}
          alt="printerifx"
          className="printerfix-landing-photo"
        />
        <div className="text">
          <span className="text-title">
            Profesjonalna naprawa drukarek i urządzeń wielofunkcyjnych
          </span>
          <span className="text-subtitle">
            Szybka diagnoza i naprawa – przywróć sprawność swojego urządzenia
          </span>
        </div>
      </div>
      <span className="pricelist-text">
        W najmniej odpowiednim momencie Twoja drukarka przestała drukować,
        zacina papier lub wyświetla błędy? <br />
        <br />
        Pomożemy! Wykonamy <strong>darmową diagnozę</strong>, by dokładnie
        określić źródło problemu, a następnie skutecznie je wyeliminujemy.
        Trwałość naprawy zapewni <strong>12-miesięczna gwarancja</strong> na
        nasze usługi.
        <br />
        <br />
        Dodatkowo oferujemy <strong>drukarkę zastępczą</strong> na czas
        realizacji zlecenia, aby Twoje codzienne obowiązki przebiegały bez
        zakłóceń.
      </span>
      <PriceList subpage="printerfix" />
    </div>
  );
}
