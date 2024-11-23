import { motion } from "framer-motion"
import "@/styles/home.css";

import { DescriptionSection } from "@/components/DescriptionSectionHone.jsx";
import { LandingSection } from "@/components/LandingSectionHome.jsx";  
import { WarrantySection } from "@/components/WarrantySectionHome.jsx";


export default function Home() {
  return (
    <div className="home-container">
      <LandingSection />
      <DescriptionSection />
      <WarrantySection />
    </div>
  );
}
