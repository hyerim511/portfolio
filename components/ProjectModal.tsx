/*
  이미지 경로가 데이터에서 오고 장마다 원본 크기가 달라 next/image의 width/height를 줄 수 없다.
  그래서 이 파일에서는 <img>를 그대로 쓴다.
*/
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";

import { CATEGORY_LABELS } from "@/data/projects";
import type { CaseStudySection, Project } from "@/data/types";
import styles from "@styles/components/projectModal.module.scss";

// 다국어는 6단계에서 적용. 그전까지 한국어 고정.
const locale = "ko" as const;

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  // 최신 onClose를 담아둔다 — 아래 effect를 한 번만 실행시키기 위해서다.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  /*
    브라우저 기본 <dialog>의 showModal()을 쓴다.
    초점을 모달 안에 가두기, 뒤쪽 내용 비활성화를 브라우저가 알아서 처리해준다.
  */
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    /*
      Esc는 keydown으로 직접 처리한다.
      dialog의 close 이벤트는 비동기로 발생해서 탭이 백그라운드일 때 지연되거나 누락될 수 있고,
      React의 onClose 속성으로도 잡히지 않는다(버블링되지 않는 이벤트라서).
      keydown은 즉시 전달되므로 어떤 상황에서도 확실하게 닫힌다.
    */
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault(); // 브라우저 기본 닫기 대신 상태를 정리하며 닫는다
      onCloseRef.current();
    };
    dialog.addEventListener("keydown", handleKeyDown);

    // 그 밖의 경로로 닫히는 경우에 대비한 보조 처리
    const handleClose = () => onCloseRef.current();
    dialog.addEventListener("close", handleClose);

    // 개발 모드(StrictMode)에서는 이 effect가 두 번 실행된다.
    // 이미 열린 dialog에 showModal()을 다시 부르면 오류가 나므로 열려 있으면 건너뛴다.
    if (!dialog.open) dialog.showModal();

    document.body.style.overflow = "hidden"; // 모달 뒤 목록이 같이 스크롤되지 않게

    return () => {
      dialog.removeEventListener("keydown", handleKeyDown);
      dialog.removeEventListener("close", handleClose);
      document.body.style.overflow = "";
    };
  }, []);

  const { title, summary, tags, categories, meta, caseStudy, caseImages } =
    project;
  const isCaseStudy = project.format === "case-study";
  // 케이스 스터디는 시안대로 국문·영문을 함께 쓴다 (두 이름이 같으면 한 번만)
  const titleEn = isCaseStudy && title.en !== title[locale] ? title.en : null;

  const header = (
    <header className={styles.header}>
      {/* 줄바꿈 위치는 시안대로 데이터의 \n이 정한다 */}
      <p className={styles.summary}>
        {summary[locale].split("\n").map((line, i) => (
          <span key={i} className={styles.summaryLine}>
            {line}
          </span>
        ))}
      </p>

      <h2 className={styles.title}>
        {title[locale]}
        {titleEn && <span> {titleEn}</span>}
      </h2>

      <ul className={styles.chips}>
        <li className={`${styles.chip} ${styles.chipFilled}`}>
          {CATEGORY_LABELS[categories[0]]}
        </li>
        {tags.map((tag) => (
          <li key={tag} className={styles.chip}>
            {tag}
          </li>
        ))}
      </ul>

      {meta && (
        <dl className={styles.meta}>
          <div>
            <dt>client</dt>
            <dd>{meta.client[locale]}</dd>
          </div>
          <div>
            <dt>role</dt>
            <dd>{meta.role[locale]}</dd>
          </div>
          {/* 기간은 케이스 스터디에만 들어 있다 */}
          {meta.period && (
            <div>
              <dt>period</dt>
              <dd>{meta.period}</dd>
            </div>
          )}
          {project.liveUrl && (
            <div>
              <dt>url</dt>
              <dd>
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  {project.liveUrl}
                </a>
              </dd>
            </div>
          )}
        </dl>
      )}
    </header>
  );

  const sectionText = (section: CaseStudySection) => (
    <div className={styles.csText}>
      <h3 className={styles.sectionTitle}>{section.title[locale]}</h3>
      <ul className={styles.points}>
        {section.points.map((point) => (
          <li key={point.en}>{point[locale]}</li>
        ))}
      </ul>
    </div>
  );

  // ── 카드형: thumbnail까지 합친 장수에 따라 배치가 달라진다 (시안 기준) ──
  const cardImages = [project.thumbnail, ...(project.images ?? [])];
  const mediaClass = styles[`media${Math.min(cardImages.length, 4)}`];

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      /* 케이스 스터디는 프로젝트마다 배경색이 다르다 (없으면 기본 어두운 배경) */
      style={project.bgColor ? { backgroundColor: project.bgColor } : undefined}
    >
      <button
        type="button"
        className={styles.close}
        onClick={onClose}
        aria-label="닫기"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M4 4 L28 28 M28 4 L4 28" />
        </svg>
      </button>

      {isCaseStudy ? (
        <div className={styles.caseBody}>
          <div className={styles.inner}>{header}</div>

          <div className={styles.csHero}>
            <img
              className={styles.csHeroMain}
              src={project.thumbnail}
              alt=""
            />
            {caseImages?.mobile && (
              <img
                className={styles.csHeroMobile}
                src={caseImages.mobile}
                alt=""
              />
            )}
          </div>

          {caseStudy && (
            <>
              <section className={styles.csSection}>
                {/* 시안의 Challenge 구역 왼쪽 세로선 */}
                <span className={styles.csRule} aria-hidden="true" />
                {sectionText(caseStudy.problem)}
                {caseImages?.details && caseImages.details.length > 0 && (
                  <div className={styles.csDetails}>
                    {caseImages.details.map((src) => (
                      <img key={src} src={src} alt="" loading="lazy" />
                    ))}
                  </div>
                )}
              </section>

              <section className={styles.csSection}>
                {sectionText(caseStudy.solution)}
              </section>

              {caseImages?.slides && caseImages.slides.length > 0 && (
                <div className={styles.csSlides}>
                  {/*
                    가로로 천천히 흐르는 띠.
                    같은 이미지 묶음을 한 번 더 이어 붙여야 끝에서 처음으로
                    끊김 없이 넘어간다. 복제본은 읽어줄 필요가 없으므로 숨긴다.
                  */}
                  {/*
                    너비를 비율에 맡기므로(width:auto) 로드 전 크기가 0이 된다.
                    그 상태에서는 브라우저가 "화면 밖"으로 판단해 지연 로딩이
                    시작되지 않으므로 loading="lazy"를 쓰지 않는다.
                  */}
                  <div className={styles.csSlidesTrack}>
                    {caseImages.slides.map((src) => (
                      <img key={src} src={src} alt="" />
                    ))}
                    {caseImages.slides.map((src) => (
                      <img
                        key={`${src}-copy`}
                        src={src}
                        alt=""
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              )}

              <section className={styles.result}>
                <h3 className={styles.resultTitle}>
                  {caseStudy.outcome.title[locale]}
                </h3>
                <ul className={styles.resultList}>
                  {caseStudy.outcome.points.map((point) => (
                    <li key={point.en}>{point[locale]}</li>
                  ))}
                </ul>
              </section>
            </>
          )}
        </div>
      ) : (
        <div className={styles.cardBody}>
          <div className={styles.inner}>{header}</div>
          <div className={styles.rule} />
          <div className={`${styles.media} ${mediaClass}`}>
            {cardImages.map((src) => (
              <img key={src} src={src} alt="" />
            ))}
          </div>
        </div>
      )}
    </dialog>
  );
}
