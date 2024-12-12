"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "@/styles/back-to-top.css";
import Arrow from "@/components/img/icons/arrow-top.png";
import arrowDark from "@/components/img/icons/arrow-top-dark.png";

export function BackToTop() {
  const [showButton, setShowButton] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollTop > windowHeight / 2) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const scrollToTop = () => {
    console.log("Scroll to top clicked");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Image
        src={Arrow}
        onClick={scrollToTop}
        className={`back-to-top ${showButton ? "show" : ""}`}
        alt="Back to Top Arrow"
      />
      <Image
        src={arrowDark}
        onClick={scrollToTop}
        className={`back-to-top-dark ${showButton ? "show" : ""}`}
        alt="Back to Top Arrow"
      />
    </div>
  );
}
