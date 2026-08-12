// ============================================
// Portfolio Data — Type Definitions
// Updated 2026.07 — Works 필터 3분류 개편 반영
//   FilterCategory: design | branding 제거 → ui-design 도입
//   ProjectMeta.period: 카드형은 기간 미표기 → optional 처리
// ============================================

/** 다국어 텍스트 — 영문/한국어 동시 보유 */
export interface LocalizedText {
  en: string;
  ko: string;
}

/**
 * 필터 카테고리 (Works 페이지 상단 필터와 1:1 대응)
 *   design-dev → Design + Dev
 *   ui-design  → UI Design
 *   graphic    → Graphic Design
 * 각 프로젝트는 정확히 하나의 카테고리에 속함 (카드의 '채워진' 대표 태그 기준).
 * Branding·Web UI 등 성격 태그는 categories가 아니라 tags에 넣는다.
 */
export type FilterCategory = "design-dev" | "ui-design" | "graphic";

/** 프로젝트 표시 형식 */
export type ProjectFormat = "case-study" | "card";

/** 케이스 스터디 본문 섹션 (problem → solution → outcome 구조) */
export interface CaseStudySection {
  /** 섹션 제목 (예: "The Challenge") */
  title: LocalizedText;
  /** 불릿 포인트 리스트 */
  points: LocalizedText[];
}

export interface CaseStudyContent {
  problem: CaseStudySection; // The Challenge
  solution: CaseStudySection; // The Approach
  outcome: CaseStudySection; // The Result
}

/**
 * 케이스 스터디 상세의 이미지 배치.
 * 시안이 구역마다 다른 모양으로 배치하므로, 어떤 이미지가 어느 구역인지 여기서 정한다.
 */
export interface CaseStudyImages {
  /** 상단 대표 컷 위에 겹쳐 놓는 모바일 화면 */
  mobile?: string;
  /** The Challenge 옆에 비스듬히 겹쳐 놓는 이미지 */
  details?: string[];
  /** The Approach 아래에 가로로 이어 붙이는 이미지 */
  slides?: string[];
}

/** 프로젝트 메타 정보 */
export interface ProjectMeta {
  client: LocalizedText;
  /** 예: "UI 디자인 리드 + 프론트엔드 구현" */
  role: LocalizedText;
  /** 예: "2025.11 — 2026.03" — 카드형은 미표기(생략) */
  period?: string;
}

/** 개별 프로젝트(Work) 데이터 */
export interface Project {
  /** URL slug — 예: "codyssey" */
  slug: string;
  /** 카드/페이지 제목 */
  title: LocalizedText;
  /** 카드 부제 — 상세 화면 상단 설명. `\n`으로 시안의 줄바꿈 위치를 지정한다 */
  summary: LocalizedText;
  /** 표시 형식 */
  format: ProjectFormat;
  /** 필터 카테고리 — 배열이지만 실질적으로 대표 1개 */
  categories: FilterCategory[];
  /** 사용 툴/스킬·성격 태그 (카드에 노출, 대문자 스타일은 CSS에서 처리) */
  tags: string[];
  /** 대표 이미지 경로 — 상세 상단 히어로 컷 (예: "/assets/img-codyssey-main.png") */
  thumbnail: string;
  /**
   * 카드형 상세의 추가 이미지 (thumbnail 제외).
   * thumbnail까지 합친 장수에 따라 배치가 달라진다 —
   * 1장: 오른쪽 절반 가득 / 2장: 데스크톱+모바일 겹침 / 3장: 계단식 / 4장: 가로 나열
   */
  images?: string[];
  /** 케이스 스터디 상세의 이미지 배치 (format이 "case-study"일 때) */
  caseImages?: CaseStudyImages;
  /**
   * 케이스 스터디 상세의 배경색.
   * 시안에서 프로젝트 브랜드 색에 맞춰 하나씩 다르게 지정돼 있다.
   * 생략하면 카드형과 같은 기본 어두운 배경을 쓴다.
   */
  bgColor?: string;
  /** 실제 사이트 링크 — "지금 결과물을 볼 수 있는 경우"만 (선택) */
  liveUrl?: string;
  /** Works 리스트 노출 순서 (낮을수록 위/우선) */
  order: number;
  /** 프로젝트 메타 정보 */
  meta?: ProjectMeta;
  /** 케이스 스터디 본문 (format이 "case-study"일 때만) */
  caseStudy?: CaseStudyContent;
}

// ============================================
// About
// ============================================

/** 스킬 그룹 (Design / Development / AI & Creative) — 라벨·태그 모두 영문 표기 */
export interface SkillGroup {
  /** 그룹 라벨 — 예: "Design" */
  label: string;
  /** 태그 리스트 — 예: ["UI/UX Design", "Graphic Design"] */
  skills: string[];
}

/** 언어 능력 — 양쪽 로케일에서 동일 표기(네이티브 스크립트 + 레벨) */
export interface LanguageSkill {
  /** 예: "한국어", "English", "日本語", "中文" */
  name: string;
  /** 예: "Native", "Professional", "Basic" */
  level: string;
}

/** 연락처 (About 하단 통합 — 별도 Contact 페이지 없음) */
export interface ContactInfo {
  email: string;
  location: LocalizedText;
  /** location 옆 부가 문구 — 양쪽 로케일 공통 영문 (headline과 같은 규칙) */
  openTo?: string;
  linkedin?: string;
  wanted?: string;
}

/** About 섹션 전체 데이터 */
export interface AboutData {
  /** 헤드라인 태그라인 (양쪽 로케일 공통 영문) — 예: "from Design to Product" */
  headline: string;
  /**
   * 소개 문구.
   *   `\n`  → 줄바꿈
   *   `**…**` → 굵게 (예: "**디자이너 김혜림**입니다.")
   * 두 표기 모두 About 화면에서 해석된다.
   */
  bio: LocalizedText;
  /** 스킬 그룹들 (Design → Development → AI & Creative 순) */
  skillGroups: SkillGroup[];
  /** 언어 */
  languages: LanguageSkill[];
  /** 연락처 */
  contact: ContactInfo;
}
