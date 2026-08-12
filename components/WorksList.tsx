"use client";

import { useState } from "react";

import { CATEGORY_LABELS, getSortedProjects } from "@/data/projects";
import type { FilterCategory, Project } from "@/data/types";
import ProjectModal from "@/components/ProjectModal";
import styles from "@styles/works.module.scss";

/** "all"은 필터를 걸지 않은 상태 */
type Filter = FilterCategory | "all";

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "design-dev", label: CATEGORY_LABELS["design-dev"] },
  { value: "ui-design", label: CATEGORY_LABELS["ui-design"] },
  { value: "graphic", label: CATEGORY_LABELS.graphic },
];

export default function WorksList() {
  const [filter, setFilter] = useState<Filter>("all");
  // 상세는 페이지 이동 없이 모달로 연다
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const projects = getSortedProjects();
  const caseStudies = projects.filter((p) => p.format === "case-study");
  const cards = projects.filter((p) => p.format === "card");

  // 필터에 걸리지 않은 항목은 목록에서 빼지 않고 흐리게 처리한다 (시안 방식)
  const isDimmed = (project: Project) =>
    filter !== "all" && !project.categories.includes(filter);

  const itemClass = (project: Project, base: string) =>
    isDimmed(project) ? `${base} ${styles.dimmed}` : base;

  return (
    <div className={styles.body}>
      {/* 타이틀+nav를 한 덩어리로 화면에 고정한다. title 높이가 가변(clamp)이라
          따로 고정하면 nav의 위치를 정확히 계산할 수 없어 하나로 묶는다 */}
      <div className={styles.sidebar}>
        <h1 className={styles.title}>WORKs</h1>

        <nav className={styles.filters}>
          {FILTERS.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              aria-pressed={filter === item.value}
              className={
                filter === item.value
                  ? `${styles.filter} ${styles.active}`
                  : styles.filter
              }
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className={styles.list}>
        {caseStudies.map((project) => (
          <article
            key={project.slug}
            className={itemClass(project, styles.caseStudy)}
          >
            <p className={styles.meta}>
              <span className={styles.category}>
                {CATEGORY_LABELS[project.categories[0]]}
              </span>
              <span className={styles.tools}>{project.tags.join(", ")}</span>
            </p>
            {/* 목록의 프로젝트명은 시안대로 언어와 무관하게 영문 표기 */}
            <h2 className={styles.caseTitle}>
              <button
                type="button"
                className={styles.open}
                onClick={() => setOpenProject(project)}
              >
                {project.title.en}
              </button>
            </h2>
          </article>
        ))}

        <div className={styles.cards}>
          {cards.map((project) => (
            <h2
              key={project.slug}
              className={itemClass(project, styles.card)}
            >
              <button
                type="button"
                className={styles.open}
                onClick={() => setOpenProject(project)}
              >
                {project.title.en}
              </button>
            </h2>
          ))}
        </div>
      </div>

      {openProject && (
        <ProjectModal
          project={openProject}
          onClose={() => setOpenProject(null)}
        />
      )}
    </div>
  );
}
