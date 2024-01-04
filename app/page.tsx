"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// import Donut from "@public/Donut";
// import MainDonut from "@public/Maindonut";
// import TestDonut from "@public/Testdonut";
import PleaseDonut from "@public/PleaseDonut";

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
  return (
    <main className={styles.main}>
      <Canvas
        camera={{ fov: 50, zoom: 10, near: 1, far: 1000, aspect: 10 }}
        linear
      >
        <OrbitControls />
        <directionalLight position={[10, 80, 20]} intensity={4} />
        <directionalLight position={[-10, -10, 10]} intensity={2} />
        {/* <directionalLight position={[-180, -120, -120]} intensity={1} /> */}
        <PleaseDonut />
      </Canvas>
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
      {/* <iframe src="https://app.vectary.com/p/2mwMvxfpeApJbGJHGKZdot" width="100%" height="100%"></iframe> */}
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
