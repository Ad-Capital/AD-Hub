import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <h1 className={styles.logoText}>CybroCity</h1>
        </div>
        <p className={styles.desc}>
        Where culture meets creativity - your daily dose of art, 
        style, music, movies, travel, food, and tech. No fluff, just good stuff.
        </p>
        <p className={styles.desc2}>© 2025 CybroCity. All Rights Reserved.</p>
        {/* <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div> */}
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Company</span>
          <Link href="https://onaadrian.vercel.app/">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        {/* <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Technical Analysis</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div> */}
        <div className={styles.list}>
          <span className={styles.listTitle}>Follow</span>
          <Link href="/">Twitter</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;