import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.maintext}>
        <h1>My name is<br />Hyerim<br />I'm a<br />Graphic Designer</h1>
        <h2><br />Haley<br /><br />Web Developer</h2>
      </div>
      <iframe src="https://app.vectary.com/p/2mwMvxfpeApJbGJHGKZdot" width="100%" height="100%"></iframe>
      <header className={styles.mainHeader}>
          <ul>
              <li>
                <Link href="/works">Works</Link>
                  <a href="#">Works</a>
              </li>
              <li>
                  <a href="#">Contact me</a>
              </li>
          </ul>
      </header>
      <div className={styles.hide}></div>
    </main>
  )
}
