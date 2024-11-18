"use client";

import styles from './page.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../components/RoundedButton';
export default function index() {

    const phrase = "Welcome to AD Hub! This is where we dive into everything we love; fashion, music, food, travel, coding, and more. It’s all about sharing ideas, stories, and experiences that spark curiosity and creativity. So, explore, connect, and let’s make life a little more exciting together.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.about}>
            <div className={styles.body}>
                <p>
                    {
                        phrase.split(" ").map((word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <div data-scroll data-scroll-speed={0.1} className={styles.description}>
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="black" />
                        </svg>
                        <p>Spicy &</p>
                        <p>Creative Hot Topics</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
