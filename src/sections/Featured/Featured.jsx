'use client';

import React from "react";
import styles from "./style.module.scss";
import { useRef } from "react";
import Picture1 from '../../../public/AD.jpg';
import Picture2 from '../../../public/food.jpg';
import Picture3 from '../../../public/fashion.png';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';


const word = "with Trader AD";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    {
      src: Picture1,
      y: 0
    },
    {
      src: Picture2,
      y: lg
    },
    {
      src: Picture3,
      y: md
    }
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.body}>
        <motion.h1 style={{ y: sm }}>Best of the week
          <a href="/">
            See all posts ➫
          </a></motion.h1>
        <div className={styles.word}>
          <p>
            {
              word.split("").map((letter, i) => {
                const y = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -20) - 80])
                return <motion.span style={{ top: y }} key={`l_${i}`} >{letter}</motion.span>
              })
            }
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {
          images.map(({ src, y }, i) => {
            return <motion.div style={{ y }} key={`i_${i}`} className={styles.imageContainer}>
              <Image
                src={src}
                placeholder="blur"
                alt="image"
                fill
              />
            </motion.div>
          })
        }
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="black"/>
        </svg>
        <p>Spicy &</p>
        <p>Creative Hot Topics</p>
      </div>
    </div>
  )
}
