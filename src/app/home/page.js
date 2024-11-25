import { motion } from "framer-motion"
import "@/styles/home.css";

import { DescriptionSection } from "@/components/DescriptionSectionHone.js";
import { LandingSection } from "@/components/LandingSectionHome.js";  
import { WarrantySection } from "@/components/WarrantySectionHome.js";


export default function Home() {
  return (
    <div className="home-container">
      <LandingSection />
      <DescriptionSection />
      <WarrantySection />
    </div>
  );
}
