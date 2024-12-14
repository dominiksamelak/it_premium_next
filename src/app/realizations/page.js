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
  <h1 className="realization-title">Nasze realizacje</h1>
  <div className="gallery">
    {galleryData.map((item, index) => (
      <div key={index} onClick={() => openModal(index)}>
        <GalleryItem
          src={item.src}
          alt={item.alt}
          description={item.description}
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
