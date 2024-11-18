'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';

const links = [
  {
    title: "Art",
    href: "/art",
    src: "culture.png"
  },
  {
    title: "Fashion",
    href: "/fashion",
    src: "culture.png"
  },
  {
    title: "Music",
    href: "/music",
    src: "shop.png"
  },
  
  {
    title: "Movies",
    href: "/movies",
    src: "contact.png"
  },
  {
    title: "Travel",
    href: "/travel",
    src: "home.png"
  },
  {
    title: "Food",
    href: "/food",
    src: "lookbook.png"
  },
  {
    title: "Coding",
    href: "/coding",
    src: "lookbook.png"
  },
  {
    title: "T-A",
    href: "/ta",
    src: "contact.png"
  }
]

export default function Index({ setIsActive }) {
  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            setIsActive={setIsActive} // Pass to Body component
          />
        </div>
      </div>
    </motion.div>
  );
}
