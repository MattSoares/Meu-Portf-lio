'use client';

import { useRef, useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { assetPath } from '@/data/portfolio';

export default function PortfolioGallery({ images }) {
  const dialogRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  return (
    <div className="project-gallery">
      <button
        className="gallery-main"
        type="button"
        onClick={() => dialogRef.current.showModal()}
        aria-label={`Ampliar ${activeImage.alt.toLowerCase()}`}
      >
        <img src={assetPath(activeImage.src)} alt={activeImage.alt} />
        <span className="gallery-expand">
          <Maximize2 aria-hidden="true" /> Ampliar
        </span>
      </button>
      <div className="gallery-thumbnails" role="group" aria-label="Telas do OdontoVida">
        {images.map((image, index) => (
          <button
            key={image.src}
            className={index === activeIndex ? 'is-active' : ''}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Mostrar ${image.alt.toLowerCase()}`}
            aria-pressed={index === activeIndex}
          >
            <img src={assetPath(image.src)} alt="" loading="lazy" />
          </button>
        ))}
      </div>
      <dialog
        className="image-dialog"
        ref={dialogRef}
        aria-label="Imagem ampliada do projeto"
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current.close();
        }}
      >
        <button
          className="dialog-close"
          type="button"
          aria-label="Fechar imagem"
          onClick={() => dialogRef.current.close()}
        >
          <X aria-hidden="true" />
        </button>
        <img src={assetPath(activeImage.src)} alt={activeImage.alt} />
      </dialog>
    </div>
  );
}
