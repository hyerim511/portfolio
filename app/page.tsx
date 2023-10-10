'use client'
import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.scss'

export default function Home() {
  const [newFont, setFont] = useState("")
  const fonts = [
    "",
    "'Permanent Marker', cursive",
    "'Kenia', cursive",
    "'Rock Salt', cursive",
    "'Homemade Apple', cursive",
    "'Nothing You Could Do', cursive"
  ]
  const changeFont = () => {
    setFont(fonts[Math.floor(Math.random()*fonts.length)])
  }
  return (
    <main className={styles.main}>
      <div className={styles.maintext} style={{fontFamily: newFont}}>
        <h1>My name is<br />Hyerim<br />I'm a<br />Graphic Designer</h1>
        <h2><br />Haley<br /><br />Web Developer</h2>
      </div>
      <iframe src="https://app.vectary.com/p/2mwMvxfpeApJbGJHGKZdot" width="100%" height="100%"></iframe>
      <header className={styles.mainHeader}>
          <ul>
              <li>
                <Link href="/works">Works</Link>
              </li>
              <li>
                <Link href="/contact">Contact me</Link>
              </li>
          </ul>
      </header>
      <div className={styles.btnChange} onClick={changeFont}>change<br />font</div>
    </main>
  )
}
