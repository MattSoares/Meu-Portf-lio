'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { assetPath } from '@/data/portfolio';

export default function PortfolioGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimerRef = useRef(null);
  const activeImage = images[activeIndex];

  const openFocus = () => {
    window.clearTimeout(closeTimerRef.current);
    setIsClosing(false);
    setIsFocused(true);
  };

  const closeFocus = () => {
    if (!isFocused || isClosing) return;

    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
      setIsFocused(false);
      setIsClosing(false);
    }, 320);
  };

  useEffect(() => {
    document.body.classList.toggle('gallery-focus-open', isFocused);
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') closeFocus();
    };

    if (isFocused) window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.classList.remove('gallery-focus-open');
      window.removeEventListener('keydown', closeOnEscape);
      if (!isFocused) window.clearTimeout(closeTimerRef.current);
    };
  }, [isClosing, isFocused]);

  return (
    <div className="project-gallery">
      <button
        className="gallery-main"
        type="button"
        onClick={openFocus}
        aria-label={`Destacar ${activeImage.alt.toLowerCase()}`}
      >
        {images.map((image, index) => (
          <img
            key={image.src}
            className={index === activeIndex ? 'is-visible' : ''}
            src={assetPath(image.src)}
            alt={index === activeIndex ? image.alt : ''}
            aria-hidden={index !== activeIndex}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </button>
      <div className="gallery-thumbnails" role="group" aria-label="Telas do OdontoVida">
        {images.map((image, index) => (
          <button
            key={image.src}
            className={index === activeIndex ? 'is-active' : ''}
            type="button"
            onClick={() => {
              setActiveIndex(index);
            }}
            aria-label={`Mostrar ${image.alt.toLowerCase()}`}
            aria-pressed={index === activeIndex}
          >
            <img src={assetPath(image.src)} alt="" loading="lazy" />
          </button>
        ))}
      </div>
      {isFocused &&
        typeof document !== 'undefined' &&
        createPortal(
          <button
            className={`gallery-focus-layer${isClosing ? ' is-closing' : ''}`}
            type="button"
            onClick={closeFocus}
            aria-label="Fechar imagem em destaque"
          >
            <img src={assetPath(activeImage.src)} alt="" />
          </button>,
          document.body,
        )}
    </div>
  );
}
