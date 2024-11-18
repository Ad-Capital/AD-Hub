'use client';
import { projects } from '../components/data';
import { useScroll } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from "@/components/Preloader";
import Lenis from '@studio-freight/lenis';
import Landing from "@/sections/Landing";
import Featured from "@/sections/featured/Featured";
import LatestPosts from "@/sections/LatestPosts";
import SlidingImages from "@/sections/SlidingImages";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Featured />
      <SlidingImages />
      <LatestPosts />

    </main>
  );
}