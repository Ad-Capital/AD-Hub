'use client';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './anim';
import Nav from './nav';
import MobileMenu from "../../components/mobileMenu"
import SearchBar from '../../components/searchbar/Searchbar';
import classNames from 'classnames';


export default function index() {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={classNames(
            styles.header,
            isActive ? styles.white : styles.transparent
        )}>
            <div className={styles.bar}>
                <a href="/" className={styles.logo}>
                    <Image src="/Logo.png" height={100} width={100} alt='logo' />
                </a>
                <div className={styles.navlinks}>
                    <div className={styles.links}>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                        <SearchBar />
                        <a href="/">Subscribe</a>
                    </div>
                </div>
                <div onClick={() => { setIsActive(!isActive) }} className={styles.el}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    <div className={styles.label}>
                        <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Categories</motion.p>
                        <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                    </div>
                </div>
            </div>
            <div className={styles.mobileNav}>
                <MobileMenu />
            </div>
            <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className={styles.background}></motion.div>
            <AnimatePresence mode="wait">
                {isActive && <Nav setIsActive={setIsActive} />}
            </AnimatePresence>

        </div>
    )
}