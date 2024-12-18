import Image from "next/image";

export default function GalleryItem({ src, alt, title, description, width, height }) {
  return (
    <div className="gallery-item">
      <div className="gallery-texts">
        <p className="gallery-title">{title}</p>
        <p className="gallery-description">{description}</p>
      </div>

      <Image 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        className="gallery-image" 
      />
      {/* <p className="gallery-description">{description}</p> */}
    </div>
  );
}
