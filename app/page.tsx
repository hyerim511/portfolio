"use client";
import Link from "next/link";

import styles from "@styles/home.module.scss";
import HeroSection from "@/components/HeroSection";
import ProjectList from "@/components/ProjectList";

export default function Home() {
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
      <ProjectList />
    </main>
  );
}
