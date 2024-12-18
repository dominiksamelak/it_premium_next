"use client";

import "@/styles/realizations.css";
import galleryData from "@/components/GalleryData";
import GalleryItem from "@/components/GalleryItem";
import { useState } from "react";
import Image from "next/image";

export default function Realizations() {
  const [currentIndex, setCurrentIndex] = useState(null); // Track the current image index
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentIndex(null);
    setIsModalOpen(false);
  };

  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % galleryData.length); // Loop to the first image after the last
    }
  };

  const handlePrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex(
        (currentIndex - 1 + galleryData.length) % galleryData.length // Loop to the last image before the first
      );
    }
  };

  const selectedImage = currentIndex !== null ? galleryData[currentIndex] : null;

  return (
<div className="realizations-container">
  <p className="realization-title">Nasze realizacje</p>
  <p className="realization-subtitle">Nasze realizacjeNasze realizacjeNasze realizacjeNasze realizacjeNasze realizacjeNasze realizacje
    Nasze realizacjeNasze realizacjeNasze realizacjeNasze realizacjeNasze realizacjeNasze realizacjeNasze realizacjeNasze realizacje
  </p>
  <div className="gallery">
    {galleryData.map((item, index) => (
      <div key={index} onClick={() => openModal(index)}>
        <GalleryItem
          description={item.description}
          src={item.src}
          alt={item.alt}  
          title={item.title}
          width={item.width}
          height={item.height}
        />
      </div>
    ))}
  </div>


      {/* Modal */}
      {isModalOpen && selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Image className="gallery-image"
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
            />
            <p className="gallery-title">{selectedImage.title}</p>
            <p className="gallery-description">{selectedImage.description}</p>
            <div className="navigation-buttons">
              <button onClick={handlePrev}>Poprzednie</button>
              <button onClick={handleNext}>Następne</button>
            </div>
            <button className="close-button" onClick={closeModal}>
              Zamknij
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
