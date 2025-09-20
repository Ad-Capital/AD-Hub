'use client';
import styles from './style.module.scss';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import Comments from '../Comments/Comments';

export default function Index({ projects, reversed }) {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  let requestAnimationFrameId = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  // Handle window resize and set mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      // Reset image widths on resize
      if (window.innerWidth < 640) {
        firstImage.current.style.width = '100%';
        secondImage.current.style.width = '100%';
      } else {
        // Reset to default desktop widths
        firstImage.current.style.width = reversed ? '33.33%' : '66.66%';
        secondImage.current.style.width = reversed ? '66.66%' : '33.33%';
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [reversed]);

  const manageMouseMove = (e) => {
    // Only handle mouse move on non-mobile screens
    if (!isMobile) {
      const { clientX } = e;
      xPercent = (clientX / window.innerWidth) * 100;

      if (!requestAnimationFrameId) {
        requestAnimationFrameId = window.requestAnimationFrame(animate);
      }
    }
  };

  const setHoverEffect = (hoveredImage) => {
    if (isMobile) {
      // On mobile, always set both images to full width
      firstImage.current.style.width = '100%';
      secondImage.current.style.width = '100%';
    }
  };

  const animate = () => {
    if (!isMobile) {
      // Only animate on non-mobile screens
      const xPercentDelta = xPercent - currentXPercent;
      currentXPercent = currentXPercent + xPercentDelta * speed;

      const firstImagePercent = 66.66 - currentXPercent * 0.33;
      const secondImagePercent = 33.33 + currentXPercent * 0.33;

      firstImage.current.style.width = `${firstImagePercent}%`;
      secondImage.current.style.width = `${secondImagePercent}%`;

      if (Math.round(xPercent) === Math.round(currentXPercent)) {
        window.cancelAnimationFrame(requestAnimationFrameId);
        requestAnimationFrameId = null;
      } else {
        window.requestAnimationFrame(animate);
      }
    }
  };

  return (
    <div 
      onMouseMove={manageMouseMove} 
      className={styles.double}
    >
      <div
        ref={firstImage}
        className={styles.imageContainer}
        onMouseEnter={() => setHoverEffect('first')}
        onTouchStart={() => setHoverEffect('first')}
      >
        <div className={styles.stretchyWrapper}>
          <Image
            src={`/images/${projects[0].src}`}
            fill={true}
            alt={'image'}
          />
        </div>
        <div className={styles.body}>
          <h3>{projects[0].name}</h3>
          <p>{projects[0].description}</p>
          <p>{projects[0].year}</p>
          {/* <Comments /> */}
        </div>
      </div>

      <div
        ref={secondImage}
        className={styles.imageContainer}
        onMouseEnter={() => setHoverEffect('second')}
        onTouchStart={() => setHoverEffect('second')}
      >
        <div className={styles.stretchyWrapper}>
          <Image
            src={`/images/${projects[1].src}`}
            fill={true}
            alt={'image'}
          />
        </div>
        <div className={styles.body}>
          <h3>{projects[1].name}</h3>
          <p>{projects[1].description}</p>
          <p>{projects[1].year}</p>
          {/* <Comments /> */}
        </div>
      </div>
    </div>
  );
}