'use client';
import styles from './style.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import Comments from '../Comments/Comments';

export default function Index({ projects, reversed }) {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  let requestAnimationFrameId = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const setHoverEffect = (hoveredImage) => {
    if (window.innerWidth < 640) {
      if (hoveredImage === 'first') {
        firstImage.current.style.width = '100%';
        secondImage.current.style.width = '80%';
      } else {
        firstImage.current.style.width = '80%';
        secondImage.current.style.width = '100%';
      }
    }
  };

  const animate = () => {
    const screenWidth = window.innerWidth; // Get the current screen width

    // Add easing to the animation
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + xPercentDelta * speed;

    // Change the image widths based on screen size
    let firstImagePercent, secondImagePercent;

    if (screenWidth >= 640) {
      firstImagePercent = 66.66 - currentXPercent * 0.33;
      secondImagePercent = 33.33 + currentXPercent * 0.33;

      // Apply the calculated widths
      firstImage.current.style.width = `${firstImagePercent}%`;
      secondImage.current.style.width = `${secondImagePercent}%`;
    }

    // Stop animation if the target percentage is reached
    if (Math.round(xPercent) === Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };

  return (
    <div onMouseMove={manageMouseMove} className={styles.double}>
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
          <Comments />
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
          <Comments />
        </div>
      </div>
    </div>
  );
}
