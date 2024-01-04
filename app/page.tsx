"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";

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

  const donuts = [...Array(50)].map(() => ({
    scale: [0.75, 0.75, 1, 1, 1.25][Math.floor(Math.random() * 5)],
  }));

  function handleTest() {
    console.log("test");
  }

  return (
    <main className={styles.main}>
      <Canvas camera={{ zoom: 34 }} linear>
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 80, 20]} intensity={2} />
        <directionalLight position={[-10, -10, 10]} intensity={2} />
        <directionalLight position={[-180, -120, -120]} intensity={1} />
        <PleaseDonut onTest={handleTest} />
        <Environment preset="city" />
        {/* <ContactShadows
          opacity={0.2}
          scale={1}
          blur={0.5}
          far={0.8}
        /> */}
        <OrbitControls
          minPolarAngle={0.8}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
        />
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
