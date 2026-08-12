"use client";

import styles from "@styles/home.module.scss";
import HeroSection from "@/components/HeroSection";
import IconNav from "@/components/IconNav";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <IconNav />
    </main>
  );
}
