"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

import MainDonut from "@/components/MainDonut";

import styles from "@styles/home.module.scss";

export default function Home() {
  const [newFont, setFont] = useState("");
  const [status, setTempText] = useState(true);

  const fonts = [
    "",
    "'Permanent Marker', cursive",
    "'Kenia', cursive",
    "'Rock Salt', cursive",
    "'Homemade Apple', cursive",
    "'Nothing You Could Do', cursive",
  ];
  const changeFont = () => {
    setFont(fonts[Math.floor(Math.random() * fonts.length)]);
  };
  useEffect(() => {
    const tempText = setTimeout(() => {
      setTempText(false);
    }, 2500);
    return () => clearTimeout(tempText);
  }, []);

  const donuts = [...Array(50)].map(() => ({
    scale: [0.75, 0.75, 1, 1, 1.25][Math.floor(Math.random() * 5)],
  }));

  return (
    <main className={styles.main}>
      <MainDonut />
      {/* {status ? (
        <div className={styles.maintext}>
          <h1>
            Wait!
            <br />
            Give me a second!
          </h1>
        </div>
      ) : (
        <div className={styles.maintext} style={{ fontFamily: newFont }}>
          <h1>
            My name is
            <br />
            Hyerim
            <br />
            I&apos;m a<br />
            Graphic Designer
          </h1>
          <h2>
            <br />
            Haley
            <br />
            <br />
            Web Developer
          </h2>
        </div>
      )} */}
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
      <div className={styles.btnChange} onClick={changeFont}>
        change
        <br />
        font
      </div>
    </main>
  );
}
