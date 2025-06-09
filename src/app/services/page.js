"use client";
import Link from "next/link";
import Image from "next/image";
import PC from "@/components/img/services/pc.png";
import Phone from "@/components/img/services/phone.png";
import Data from "@/components/img/services/data.png";
import Printer from "@/components/img/services/printer.png";
import Coop from "@/components/img/services/companies.png";
import Other from "@/components/img/services/other.png";
import "@/styles/services.css";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="services-container">
      <span className="services-title">Co znajdziesz w naszej ofercie?</span>

      {/* Service 1: Computer Repair */}
      <motion.div
        className="services-left"
        // initial={{ x: -200, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 1 }}
        // viewport={{ once: true, amount: 0.1 }}
      >
        <span className="down-up"></span>
        <Image src={PC} alt="pc" className="pic-left" />
        <div className="services-text">
          <Link href="/services/computer-repair" className="services-text-link">
            <span className="services-text-title">Naprawa komputerów</span>
          </Link>
          <span className="services-text-desc">
            Naprawiamy komputery z najwyższą precyzją. Profesjonalny serwis dla
            Ciebie.
          </span>
        </div>
      </motion.div>

      {/* Service 2: Phone Repair */}
      <motion.div
        className="services-right"
        // initial={{ x: 200, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 1 }}
        // viewport={{ once: true, amount: 0.3 }}
      >
        <div className="services-text-right">
          <Link href="/services/phone-repair" className="services-text-link">
            <span className="services-text-title">Naprawa telefonów</span>
          </Link>
          <span className="services-text-desc">
            Specjalizujemy się w szybkich i dokładnych naprawach telefonów.
          </span>
        </div>
        <Image src={Phone} alt="phone" className="pic-right" />
        <span className="up-down"></span>
      </motion.div>

      {/* Service 3: Printer Repair */}
      <motion.div
        className="services-left"
        // initial={{ x: -200, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 1 }}
        // viewport={{ once: true, amount: 0.3 }}
      >
        <span className="down-up"></span>
        <Image src={Printer} alt="printer" className="pic-left" />
        <div className="services-text">
          <Link href="/services/printer-repair" className="services-text-link">
            <span className="services-text-title">Naprawa drukarek</span>
          </Link>
          <span className="services-text-desc">
            Drukarki działające jak nowe dzięki naszemu serwisowi.
          </span>
        </div>
      </motion.div>

      {/* Service 4: Data Recovery */}
      <motion.div
        className="services-right"
        // initial={{ x: 200, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 1 }}
        // viewport={{ once: true, amount: 0.3 }}
      >
        <div className="services-text-right">
          <Link href="/services/data-recovery" className="services-text-link">
            <span className="services-text-title">Odzyskiwanie danych</span>
          </Link>
          <span className="services-text-desc">
            Bezpieczne odzyskiwanie utraconych plików i danych.
          </span>
        </div>
        <Image src={Data} alt="data" className="pic-right" />
        <span className="up-down"></span>
      </motion.div>

      {/* Service 5: Business Support */}
      <motion.div
        className="services-left"
        // initial={{ x: -200, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 1 }}
        // viewport={{ once: true, amount: 0.3 }}
      >
        <span className="down-up"></span>
        <Image src={Coop} alt="coop" className="pic-left" />
        <div className="services-text">
          <Link
            href="/services/business-support"
            className="services-text-link"
          >
            <span className="services-text-title">Obsługa firm</span>
          </Link>
          <span className="services-text-desc">
            Kompleksowe wsparcie technologiczne dla firm.
          </span>
        </div>
      </motion.div>

      {/* Service 6: Electronics Repair */}
      <motion.div
        className="services-right"
        // initial={{ x: 200, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 1 }}
        // viewport={{ once: true, amount: 0.3 }}
      >
        <div className="services-text-right">
          <Link href="/services/console-repair" className="services-text-link">
            <span className="services-text-title">Naprawa konsol</span>
          </Link>
          <span className="services-text-desc">
            Serwisujemy konsole wszystkich marek: PlayStation, Xbox, Nintendo i
            inne.
          </span>
        </div>
        <Image src={Other} alt="other" className="pic-right" />
        <span className="up-down"></span>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="services-contact"
        // initial={{ y: -100, opacity: 0 }}
        // whileInView={{ y: 0, opacity: 1 }}
        // transition={{ duration: 1 }}
        // viewport={{ once: true, amount: 0.3 }}
      >
        <span className="services-contact-text">
          W razie jakichkolwiek pytań, zapraszamy do kontaktu
        </span>
        <Link href="/contact">
          <span className="services-contact-button">Kontakt</span>
        </Link>
      </motion.div>
    </div>
  );
}
