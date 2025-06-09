import DataRec from "@/components/img/landing_photos/datarec-main.png";
import "@/styles/datarec.css";
import PriceList from "@/components/Pricelist.js";
import Image from "next/image";
import "@/styles/pricelist.css";

export default function DataRecovery() {
  return (
    <div className="datarec-container">
      <div className="landing-photo-container">
        <Image src={DataRec} alt="datarec" className="datarec-landing-photo" />
        <div className="text">
          <span className="text-title">
            Zabezpiecz to, co trzymasz w bezcennej pamięci
          </span>
          <span className="text-subtitle">
            Niezależnie od awarii, znajdziemy sposób, by przywrócić Twoje pliki
          </span>
        </div>
      </div>
      <span className="pricelist-text">
        Zżera Cię stres, że pliki z Twojego sprzętu zostały utracone na zawsze?
        <br /> <br /> Przy pomocy zaawansowanego sprzętu odzyskujemy dane z
        dysków twardych, dysków SSD, płyt CD/DVD, kart pamięci czy telefonów. W
        trybie standardowym zaczynamy od <strong>darmowej diagnozy</strong>, aby
        ocenić możliwość i koszty realizacji zlecenia. <br /> <br />{" "}
        Potrzebujesz ważnych dokumentów na już? Oferujemy usługę w trybie{" "}
        <strong>przyspieszonym i ekspresowym</strong> (wtedy jednak diagnoza
        jest odpłatna).
      </span>
      <PriceList subpage="datarecovery" />
    </div>
  );
}
