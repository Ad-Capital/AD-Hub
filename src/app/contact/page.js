"use client"

import styles from './page.module.scss';
import Image from 'next/image';
import Rounded from '../../components/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../components/Magnetic';
import Link from 'next/link';

export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image
                                fill={true}
                                alt={"image"}
                                src={`/profile.png`}
                            />
                        </div>
                        <h2>Let's work</h2>
                    </span>
                    <h2>together</h2>
                    <motion.div style={{ x }} className={styles.buttonContainer}>
                        <Link href="https://onaadrian.vercel.app/">
                            <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                                <p>Get in touch</p>
                            </Rounded>
                        </Link>
                    </motion.div>
                </div>
                <div className={styles.nav}>
                    <Rounded>
                        <p>isaacona2@gmail.com</p>
                    </Rounded>
                    <Rounded>
                        <p>+234 90 2945 8058</p>
                    </Rounded>
                </div>
            </div>
        </motion.div>
    )
}
