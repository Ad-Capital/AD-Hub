import styles from './page.module.scss'
import { projects } from './data';
import Image from 'next/image';
import Double from '../../components/double';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>
        <span className={styles.title}>Travels</span>: Where To Next? <br />
        Whether it’s road trips, beach vibes, or city escapes,
        let’s talk adventures! Share your travel tips and dream destinations—where are we heading next?
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

