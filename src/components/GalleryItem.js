import Image from "next/image";

export default function GalleryItem({ src, alt, description, width, height }) {
  return (
    <div className="gallery-item">
      <Image 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        className="gallery-image" 
      />
      <p className="gallery-description">{description}</p>
    </div>
  );
}
