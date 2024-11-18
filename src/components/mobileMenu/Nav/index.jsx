import Image from 'next/image';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
import { perspective, slideIn } from "./anim";
import Rounded from "@/components/RoundedButton";
// import ThemeToggle from "../../themeToggle/ThemeToggle";
import SearchBar from '@/components/searchbar/Searchbar';

export default function index() {
    return (
        <div className={styles.nav}>
            <div className={styles.body}>
                {
                    links.map((link, i) => {
                        const { title, href } = link;
                        return (
                            <div key={`b_${i}`} className={styles.linkContainer}>
                                <motion.div
                                    variants={slideIn}
                                    custom={i}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                >
                                    <a href={href}>
                                        {title}                                        
                                    </a>
                                </motion.div>
                            </div>
                        )
                    })
                }

            </div>
            <motion.div
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit">
                <div className={styles.grp}>
                    <SearchBar />
                </div>
            </motion.div>
            <motion.div className={styles.footer}>
                {
                    footerLinks.map((link, i) => {
                        const { title, href } = link;
                        return (
                            <motion.a
                                variants={slideIn}
                                custom={i}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                key={`f_${i}`}
                            >
                                {title}
                            </motion.a>
                        )
                    })
                }
            </motion.div>
        </div>
    )
}