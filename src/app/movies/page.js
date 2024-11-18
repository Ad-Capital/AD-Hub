import styles from './page.module.scss'
import { projects } from './data';
import Image from 'next/image';
import Double from '../../components/double';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>
        <span className={styles.title}>Movies</span>: Popcorn, Chill, and Chat ,<br />
        Grab your snacks! Let’s dive into the world of film.
        What’s on your watchlist? Share your favorites and swap recommendations
      </h1>
      <div className={styles.gallery}>
        <Double projects={[projects[0], projects[1]]} />
        <Double projects={[projects[2], projects[3]]} reversed={true} />
        <Double projects={[projects[4], projects[5]]} />
        <Double projects={[projects[6], projects[7]]} reversed={true} />
      </div>
    </main>
  )
}

