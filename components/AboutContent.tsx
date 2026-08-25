"use client";

import { about } from "@/data/about";
import IconNav from "@/components/IconNav";
import { useLocale } from "@/components/LocaleProvider";
import styles from "@styles/about.module.scss";

export default function AboutContent() {
  const { locale } = useLocale();
  const { headline, bio, skillGroups, languages, contact } = about;

  // headline은 "from Design to Product" 한 줄 문자열이다.
  // 홀수 번째 단어(Design, Product)만 크고 굵게 — 시안의 강약 대비를
  // 데이터를 고치지 않고 만들어내기 위한 규칙.
  const words = headline.split(" ");

  return (
    <main className={styles.about}>
      <IconNav />

      <h1 className={styles.headline}>
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className={i % 2 === 1 ? styles.strong : styles.light}
          >
            {word}
          </span>
        ))}
      </h1>

      {/*
        bio는 `\n`으로 줄을 나누고 `**…**`를 굵게 표시한다.
        (데이터에 표기를 두면 문구·강조 위치를 코드 수정 없이 바꿀 수 있다)
      */}
      <p className={styles.bio}>
        {bio[locale].split("\n").map((line, lineIndex) => (
          <span key={lineIndex} className={styles.bioLine}>
            {line.split("**").map((part, partIndex) =>
              partIndex % 2 === 1 ? <strong key={partIndex}>{part}</strong> : part
            )}
          </span>
        ))}
      </p>

      <div className={styles.groups}>
        {skillGroups.map((group) => (
          <section key={group.label}>
            <h2 className={styles.groupLabel}>{group.label}</h2>
            <ul className={styles.chips}>
              {group.skills.map((skill) => (
                <li key={skill} className={styles.chip}>
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className={styles.groupLabel}>Languages</h2>
          <ul className={styles.chips}>
            {languages.map((language) => (
              <li key={language.name} className={styles.chip}>
                {language.name}
                <span className={styles.level}>{language.level}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <dl className={styles.contact}>
        <div>
          <dt>Contact_</dt>
          <dd>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </dd>
        </div>

        {contact.linkedin && (
          <div>
            <dt>Linkedin_</dt>
            <dd>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                {contact.linkedin.replace(/^https?:\/\//, "")}
              </a>
            </dd>
          </div>
        )}

        <div>
          <dt>Location_</dt>
          <dd>
            {contact.location[locale]}
            {contact.openTo && (
              <em className={styles.openTo}>! {contact.openTo}</em>
            )}
          </dd>
        </div>
      </dl>
    </main>
  );
}
