"use client";
import Link from "next/link";

import styles from "@styles/home.module.scss";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  // const [newFont, setFont] = useState("");

  // const fonts = [
  //   "",
  //   "'Permanent Marker', cursive",
  //   "'Kenia', cursive",
  //   "'Rock Salt', cursive",
  //   "'Homemade Apple', cursive",
  //   "'Nothing You Could Do', cursive",
  // ];
  // const changeFont = () => {
  //   setFont(fonts[Math.floor(Math.random() * fonts.length)]);
  // };

  return (
    <main className={styles.main}>
      <HeroSection />
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
      {/* <div className={styles.btnChange} onClick={changeFont}>
        change
        <br />
        font
      </div> */}
    </main>
  );
}
