import type { Metadata } from "next";

import IconNav from "@/components/IconNav";
import WorksList from "@/components/WorksList";
import styles from "@styles/works.module.scss";

export const metadata: Metadata = {
  title: "Works — Haley Kim",
  description: "Selected works — design, branding and front-end.",
};

export default function Works() {
  return (
    <main className={styles.works}>
      <IconNav />
      <WorksList />
    </main>
  );
}
