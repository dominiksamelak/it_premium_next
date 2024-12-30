"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "@/styles/realizations.css";
import galleryData from "@/components/GalleryData";
import GalleryItem from "@/components/GalleryItem";

export default function Realizations() {
  const [currentIndex, setCurrentIndex] = useState(null); // Track the current image index
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false); // Track description state
  const [isOverflowing, setIsOverflowing] = useState(false); // Check if description is overflowing
  const descriptionRef = useRef(null); // Reference to the description element

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    setIsDescriptionExpanded(false); // Reset description state on modal open
  };

  const closeModal = () => {
    setCurrentIndex(null);
    setIsModalOpen(false);
  };

  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % galleryData.length); // Loop to the first image after the last
      setIsDescriptionExpanded(false); // Reset description state
    }
  };

  const handlePrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex(
        (currentIndex - 1 + galleryData.length) % galleryData.length // Loop to the last image before the first
      );
      setIsDescriptionExpanded(false); // Reset description state
    }
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded((prev) => !prev); // Toggle description visibility
  };

  useEffect(() => {
    if (descriptionRef.current) {
      const computedStyle = window.getComputedStyle(descriptionRef.current);
      const lineHeight = parseFloat(computedStyle.lineHeight);
      const maxHeight = lineHeight * 3; // Limit for 3 lines
      setIsOverflowing(descriptionRef.current.scrollHeight > maxHeight);
    }
  }, [currentIndex]);

  const selectedImage = currentIndex !== null ? galleryData[currentIndex] : null;

  return (
    <div className="realizations-container">
      <p className="realization-title">Nasze realizacje</p>
      <p className="realization-subtitle">
        Nasze realizacjeNasze realizacjeNasze realizacjeNasze realizacjeNasze realizacjeNasze realizacje
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
            <Image
              className="gallery-image"
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
            />
            <p className="gallery-title">{selectedImage.title}</p>
            <p
              ref={descriptionRef}
              className={`gallery-description ${isDescriptionExpanded ? "expanded" : "collapsed"}`}
            >
              {selectedImage.description}
            </p>
            {isOverflowing && (
              <button className="expand-description-button" onClick={toggleDescription}>
                {isDescriptionExpanded ? "Zwiń" : "Czytaj więcej"}
              </button>
            )}
          </div>
          <div className="navigation-buttons">
            <button onClick={(e) => { e.stopPropagation(); handlePrev(); }}>Poprzednie</button>
            <button onClick={(e) => { e.stopPropagation(); handleNext(); }}>Następne</button>
          </div>
          <button className="close-button" onClick={closeModal}>Zamknij</button>
          <button className="close-button-mobile" onClick={closeModal}>X</button>
        </div>
      )}
    </div>
  );
}
