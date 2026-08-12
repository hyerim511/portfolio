import type { CSSProperties } from "react";
import Link from "next/link";

import styles from "@styles/components/iconNav.module.scss";

/** 우상단 고정 메뉴 — 평소엔 아이콘, 마우스를 올리면 메뉴명이 보인다. */
const MENU = [
  { href: "/", label: "Main", icon: "/assets/icon-main.svg" },
  { href: "/works", label: "Works", icon: "/assets/icon-works.svg" },
  { href: "/about", label: "About", icon: "/assets/icon-about.svg" },
];

export default function IconNav() {
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => (
        <Link
          key={menu.href}
          href={menu.href}
          className={styles.item}
          aria-label={menu.label}
        >
          {/*
            아이콘은 <img>가 아니라 mask로 그린다.
            SVG 파일 안에 색이 고정돼 있어도 mask를 쓰면 글자색(currentColor)을 따라가므로,
            밝은 About 배경에서는 검게, 어두운 Works 배경에서는 밝게 알아서 보인다.
          */}
          <span
            className={styles.icon}
            style={{ "--icon": `url(${menu.icon})` } as CSSProperties}
            aria-hidden="true"
          />
          <span className={styles.label} aria-hidden="true">
            {menu.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
