// ============================================
// Portfolio Data — Projects (Works)
// Updated 2026.07 — 실제 Works 디자인 기준으로 재작성
//   · 총 15개 (케이스 스터디 3 + 카드형 12)
//   · 필터 3분류: design-dev / ui-design / graphic
//   · 카드형 period 미표기 (meta.period 생략)
//   · 필터 분포: Design+Dev 4 / UI Design 6 / Graphic 5
//   · 이미지 경로 = public/assets/ 실제 파일 (placeholder 아님)
//     thumbnail = 히어로 대표 컷, images = 그 아래 등장 순서대로
// ============================================

import type { Project, FilterCategory } from "./types";

export const projects: Project[] = [
  // ---------- CASE STUDY 1 ----------
  {
    slug: "codyssey",
    title: { en: "Codyssey", ko: "코디세이" },
    summary: {
      en: "An AI·SW education platform reimagined as a game-style interface",
      ko: "게임형 인터페이스로 재해석한\nAI·SW 교육 플랫폼",
    },
    format: "case-study",
    categories: ["design-dev"],
    tags: ["React", "Sass", "Figma MCP", "Claude Code", "Firefly"],
    thumbnail: "/assets/img-codyssey-main.png",
    caseImages: {
      mobile: "/assets/img-codyssey-mobile.png",
      details: [
        "/assets/img-codyssey-detail1.png",
        "/assets/img-codyssey-detail2.png",
      ],
      slides: [
        "/assets/img-codyssey-slide1.png",
        "/assets/img-codyssey-slide2.png",
        "/assets/img-codyssey-slide3.png",
      ],
    },
    bgColor: "#1b2026", // 시안 실측 — 코디세이의 푸른 톤
    liveUrl: "https://codyssey.kr/",
    order: 1,
    meta: {
      client: { en: "Innovation Academy", ko: "이노베이션 아카데미" },
      role: {
        en: "UI Design Lead + Front-end Implementation",
        ko: "UI 디자인 리드 + 프론트엔드 구현",
      },
      period: "2025.11 — 2026.03",
    },
    caseStudy: {
      problem: {
        title: { en: "The Challenge", ko: "The Challenge" },
        points: [
          {
            en: "A visually distinctive UI that breaks away from repetitive, monotonous LMS screens",
            ko: "반복적이고 단조로운 기존 LMS 화면에서 벗어나, 시각적으로 차별화된 UI",
          },
          {
            en: "Gamification for learning retention — an immersive experience inspired by game interfaces",
            ko: "학습 지속성을 높이는 게이미피케이션 요소 — 게임 인터페이스에서 영감받은 몰입감 있는 경험",
          },
          {
            en: "An intuitive information structure that surfaces projects and courses at a glance",
            ko: "프로젝트·과정별 내용을 한눈에 파악할 수 있는 직관적인 정보 구조",
          },
          {
            en: "A responsive layout that adapts across device environments",
            ko: "다양한 기기 환경에 대응하는 반응형 레이아웃",
          },
        ],
      },
      solution: {
        title: { en: "The Approach", ko: "The Approach" },
        points: [
          {
            en: "A game-style interface built on a 'voyage through the world of code' concept — ship, sailing and island motifs, with a hexagon-tile learning map",
            ko: "'코딩 세계를 항해하는' 브랜드 컨셉에 맞춰 선박·항해·섬 모티프의 게임형 인터페이스 설계, 헥사곤 타일 학습 맵 구현",
          },
          {
            en: "Gamification — levels, points, guild ranking and AI-recommended learning — integrated into the dashboard",
            ko: "레벨, 포인트, 길드 랭킹, AI 추천 학습 등 게이미피케이션 요소를 대시보드에 통합",
          },
          {
            en: "Kept an immersive visual while keeping the information hierarchy and UX flow intuitive",
            ko: "몰입감 있는 비주얼을 유지하면서도 정보 계층과 UX 흐름은 직관적으로 유지",
          },
          {
            en: "Moved beyond a desktop-only LMS with a responsive layout and transition animations",
            ko: "기존 데스크탑 전용 LMS에서 탈피해 반응형 레이아웃 및 전환 애니메이션 적용",
          },
          {
            en: "Built a React + Sass design system directly, accelerating design-to-dev handoff with Claude Code and Figma MCP",
            ko: "React + Sass 기반 디자인 시스템을 직접 구현, Claude Code와 Figma MCP로 디자인-개발 핸드오프 가속화",
          },
        ],
      },
      outcome: {
        title: { en: "The Result", ko: "The Result" },
        points: [
          {
            en: "Very positive client feedback on design direction and level of finish",
            ko: "클라이언트로부터 디자인 방향성 및 완성도에 대해 매우 긍정적인 피드백 수령",
          },
          {
            en: "One person owned design through front-end — no handoff loss, fast turnaround, and a lift in internal workflow efficiency",
            ko: "디자인부터 프론트엔드까지 1인 연속 담당 — 핸드오프 손실 없이 빠른 반영, 내부적으로 작업 효율 향상 평가",
          },
          {
            en: "Runs as the official education platform for a MSIT·IITP-supported program, expanding externally through university MOUs",
            ko: "과학기술정보통신부·IITP 지원 사업의 공식 교육 플랫폼으로 운영, 대학 MOU를 통한 외부 확산",
          },
        ],
      },
    },
  },

  // ---------- CASE STUDY 2 ----------
  {
    slug: "ab-media",
    title: { en: "AB Media & Works", ko: "AB Media & Works" },
    summary: {
      en: "From brand identity to live implementation — design and development in one hand",
      ko: "브랜드 아이덴티티부터 실제 구현까지,\n디자인과 개발을 한 손으로",
    },
    format: "case-study",
    categories: ["design-dev"],
    tags: ["Branding", "React", "GSAP", "Claude Code", "Midjourney"],
    thumbnail: "/assets/img-ab-main.png",
    // 모바일 컷 없음
    caseImages: {
      details: ["/assets/img-ab-detail.png"],
      slides: ["/assets/img-ab-slide1.png", "/assets/img-ab-slide2.png"],
    },
    bgColor: "#281a16", // 시안 실측 — AB의 주황·갈색 톤
    liveUrl: "https://www.abmwc.com/",
    order: 2,
    meta: {
      client: { en: "AB Media & Works", ko: "AB Media & Works" },
      role: {
        en: "Design 80% + Full Development",
        ko: "디자인 80% + 개발 전체",
      },
      period: "2026.05",
    },
    caseStudy: {
      problem: {
        title: { en: "The Challenge", ko: "The Challenge" },
        points: [
          {
            en: "A website with a visually striking first impression, moving beyond an image-heavy site",
            ko: "기존 이미지 중심 사이트에서 벗어나 시각적으로 강렬한 첫인상을 주는 웹사이트",
          },
          {
            en: "Simplified copy, with symbolic visuals compressing the company's identity",
            ko: "내용은 간소화하되 상징적인 비주얼로 기업의 정체성을 압축해서 전달",
          },
          {
            en: "Expressing a multi-domain business (AI·SI·Media Production) as one coherent brand",
            ko: "AI·SI·미디어 프로덕션이라는 다각적인 사업 영역을 하나의 일관된 브랜드로 표현",
          },
          {
            en: "A responsive layout that adapts across device environments",
            ko: "다양한 기기 환경에 대응하는 반응형 레이아웃",
          },
        ],
      },
      solution: {
        title: { en: "The Approach", ko: "The Approach" },
        points: [
          {
            en: "A box-shaped logo derived from ABLE + BOX — symbolizing unlimited possibility and multi-angle approach as a dimensional box",
            ko: "ABLE + BOX에서 착안한 박스형 로고 설계 — 무한한 가능성과 다각도의 접근을 입체적인 박스 형태로 상징화",
          },
          {
            en: "Scroll-linked GSAP animation and Midjourney-made AI video on the main, instead of static imagery",
            ko: "정적 이미지 대신 스크롤 연동 GSAP 애니메이션과 Midjourney로 제작한 AI 영상을 메인에 배치",
          },
          {
            en: "Compressed the services into three domains (AI·SI·MP), replacing copy with symbolic graphic objects",
            ko: "서비스 설명을 AI·SI·MP 세 영역으로 압축하고 상징적인 그래픽 오브젝트로 설명을 대신함",
          },
          {
            en: "Cut production time with an AI workflow using Figma MCP, Claude Code and Midjourney",
            ko: "Figma MCP, Claude Code, Midjourney를 활용한 AI 워크플로우로 작업 시간 단축",
          },
        ],
      },
      outcome: {
        title: { en: "The Result", ko: "The Result" },
        points: [
          {
            en: "Client was highly satisfied with both the design direction and the final result",
            ko: "클라이언트는 디자인 방향성과 최종 결과물에 매우 만족",
          },
          {
            en: "One person owned branding, UI design and development in sequence — brand consistency and fast delivery",
            ko: "브랜딩부터 UI 디자인, 개발까지 단일 작업자가 연속 담당 — 브랜드 일관성 유지 및 빠른 납품",
          },
        ],
      },
    },
  },

  // ---------- CASE STUDY 3 ----------
  {
    slug: "sam-purunet",
    title: { en: "SAM Purunet", ko: "샘푸르넷" },
    summary: {
      en: "A teacher LMS that makes complex learning data approachable",
      ko: "복잡한 학습 데이터를 친근하게 풀어낸\n교사 학습 관리 시스템",
    },
    format: "case-study",
    categories: ["ui-design"],
    tags: ["Figma", "Photoshop", "Illustrator", "Responsive"],
    thumbnail: "/assets/img-sam-main.png",
    caseImages: {
      mobile: "/assets/img-sam-mobile.png",
      details: ["/assets/img-sam-detail1.png", "/assets/img-sam-detail2.png"],
      slides: [
        "/assets/img-sam-slide1.png",
        "/assets/img-sam-slide2.png",
        "/assets/img-sam-slide3.png",
      ],
    },
    bgColor: "#1a2927", // 시안 실측 — 샘푸르넷의 초록 톤
    liveUrl: "https://sam.epurunet.co.kr/",
    order: 3,
    meta: {
      client: { en: "Kumsung Publishing (Purunet)", ko: "금성출판사 (푸르넷)" },
      role: { en: "UI Design Lead", ko: "UI 디자인 리드" },
      period: "2025.03 — 2025.07",
    },
    caseStudy: {
      problem: {
        title: { en: "The Challenge", ko: "The Challenge" },
        points: [
          {
            en: "A daily work platform for teachers — but a tone that isn't heavy or stiff",
            ko: "교사가 매일 사용하는 업무용 플랫폼이지만 무겁거나 딱딱하지 않은 톤앤매너",
          },
          {
            en: "A UI that makes complex data — class status, learning reports, diagnostics — intuitive to read",
            ko: "수업 현황, 학습 리포트, 진단 평가 등 복잡한 데이터를 직관적으로 파악할 수 있는 UI",
          },
          {
            en: "Full responsive coverage from 320px mobile to 1920px wide",
            ko: "320px 모바일부터 1920px 와이드까지 전 해상도 반응형 대응",
          },
        ],
      },
      solution: {
        title: { en: "The Approach", ko: "The Approach" },
        points: [
          {
            en: "A per-category color system — color itself acts as navigation",
            ko: "카테고리별 컬러 시스템 적용 — 색이 곧 내비게이션 역할을 하도록 설계",
          },
          {
            en: "A paper-texture pattern on the main background, with a warm, bright tone",
            ko: "메인 화면 배경에 종이 질감 패턴 적용, 따뜻하고 밝은 톤앤매너 사용",
          },
          {
            en: "Charted the data and turned checkboxes into buttons to improve usability",
            ko: "데이터를 도표화하고, 체크박스 등을 버튼형으로 전환해 사용성 향상",
          },
          {
            en: "Applied a responsive layout across the full 320px — 1920px range",
            ko: "320px — 1920px 전 해상도 반응형 적용",
          },
        ],
      },
      outcome: {
        title: { en: "The Result", ko: "The Result" },
        points: [
          {
            en: "Very positive client feedback on design direction and level of finish",
            ko: "클라이언트로부터 디자인 방향성 및 완성도에 대해 매우 긍정적인 피드백 수령",
          },
          {
            en: "A live service under a major education company (Kumsung), used daily by elementary and middle-school teachers",
            ko: "대형 교육 기업(금성출판사) 산하 실서비스로, 초·중등 교사가 실제 사용 중",
          },
        ],
      },
    },
  },

  // ---------- CARDS ----------
  {
    slug: "talentlift",
    title: { en: "TalentLift Canada", ko: "TalentLift Canada" },
    summary: {
      en: "UX/UI design for a recruitment platform website",
      ko: "채용 플랫폼 웹사이트 UX/UI 디자인",
    },
    format: "card",
    categories: ["ui-design"],
    tags: ["Web UX/UI", "Figma"],
    thumbnail: "/assets/img-talent-main.png",
    images: ["/assets/img-talent-mobile.png"],
    liveUrl: "https://talentlift.ca/",
    order: 4,
    meta: {
      client: { en: "TalentLift Canada", ko: "TalentLift Canada" },
      role: { en: "UX/UI Design", ko: "UX/UI 디자인" },
    },
  },
  {
    slug: "milkt",
    title: { en: "MilkT Listening", ko: "MilkT Listening" },
    summary: {
      en: "Tablet-only English-learning app UI for Chunjae Textbook",
      ko: "천재교과서의 태블릿 전용 영어학습\n앱 UI 디자인",
    },
    format: "card",
    categories: ["ui-design"],
    tags: ["App UI", "Figma"],
    thumbnail: "/assets/img-milk-01.png",
    images: ["/assets/img-milk-02.png", "/assets/img-milk-03.png"],
    // liveUrl 없음 — 서비스 종료 추정 (규칙: 지금 볼 수 없으면 url 미표기)
    order: 5,
    meta: {
      client: { en: "Chunjae Textbook", ko: "천재교과서" },
      role: {
        en: "UI Design + Graphic Design 60%",
        ko: "UI 디자인 + 그래픽 디자인 60%",
      },
    },
  },
  {
    slug: "nipa",
    title: { en: "NIPA Global ICT Portal", ko: "NIPA 글로벌ICT포털" },
    summary: {
      en: "NIPA website design and jQuery-based publishing",
      ko: "정보통신산업진흥원 웹사이트\n디자인 및 jQuery 기반 퍼블리싱",
    },
    format: "card",
    categories: ["design-dev"],
    tags: ["Web UI", "jQuery"],
    thumbnail: "/assets/img-nipa-main.png",
    images: ["/assets/img-nipa-mobile.png"],
    liveUrl: "https://www.globalict.kr/",
    order: 6,
    meta: {
      client: {
        en: "National IT Industry Promotion Agency (NIPA)",
        ko: "정보통신산업진흥원(NIPA)",
      },
      role: { en: "UI Design + Publishing 100%", ko: "UI 디자인 + 퍼블리싱 100%" },
    },
  },
  {
    slug: "cacas",
    title: { en: "CACAS", ko: "CACAS" },
    summary: {
      en: "Landing-page design and JS-based publishing for a blockchain reward app",
      ko: "블록체인 리워드 앱 서비스 랜딩페이지\n디자인 및 JS 기반 퍼블리싱",
    },
    format: "card",
    categories: ["design-dev"],
    tags: ["Web UI", "JavaScript"],
    thumbnail: "/assets/img-cacas-main.png",
    images: ["/assets/img-cacas-mobile.png"],
    order: 7,
    meta: {
      client: { en: "CACAS", ko: "CACAS" },
      role: { en: "UI Design + Publishing 80%", ko: "UI 디자인 + 퍼블리싱 80%" },
    },
  },
  {
    slug: "mirae-n-math",
    title: { en: "Mirae-N Math", ko: "미래엔 수학" },
    summary: {
      en: "Full UI design for a marketing site and internal management system",
      ko: "홍보·소개 사이트 및 사내 관리 시스템\nUI 디자인 전체",
    },
    format: "card",
    categories: ["ui-design"],
    tags: ["Web UI"],
    thumbnail: "/assets/img-miraen-main.png",
    images: ["/assets/img-miraen-mobile.png"],
    liveUrl: "https://www.miraenmath.co.kr/",
    order: 8,
    meta: {
      client: {
        en: "Mirae-N Math (formerly Hansol Math)",
        ko: "미래엔수학(구 한솔수학)",
      },
      role: { en: "UI Design 100%", ko: "UI 디자인 100%" },
    },
  },
  {
    slug: "kavecon",
    title: { en: "Kavecon", ko: "KAVECON" },
    summary: {
      en: "From branding to UI design for a global concert-streaming service",
      ko: "글로벌 콘서트 스트리밍 서비스\n브랜딩부터 UI 디자인까지",
    },
    format: "card",
    categories: ["ui-design"],
    tags: ["Branding", "Web UI"],
    thumbnail: "/assets/img-kavecon-main.png",
    images: ["/assets/img-kavecon-mobile.png"],
    liveUrl: "https://www.kavecon.com/",
    order: 9,
    meta: {
      client: { en: "KAVE Inc.", ko: "KAVE Inc." },
      role: { en: "Logo Design + UI Design 100%", ko: "로고 디자인 + UI 디자인 100%" },
    },
  },
  {
    slug: "mungmung",
    title: { en: "MungMung", ko: "멍멍(MungMung)" },
    summary: {
      en: "Go camping with the Mung pups — indie puzzle-game branding and UX/UI",
      ko: "멍멍이들과 함께 캠핑을 떠나요!\n인디 퍼즐게임 브랜딩부터 UX/UI 디자인까지",
    },
    format: "card",
    categories: ["ui-design"],
    tags: ["Branding", "App UX/UI", "Graphic Design"],
    thumbnail: "/assets/img-mung-01.png",
    images: [
      "/assets/img-mung-02.png",
      "/assets/img-mung-03.png",
      "/assets/img-mung-04.png",
    ],
    liveUrl: "https://apps.apple.com/app/mungmung/id1513779984",
    order: 10,
    meta: {
      client: { en: "Personal Project", ko: "개인 프로젝트" },
      role: { en: "Design 100%", ko: "디자인 100%" },
    },
  },
  {
    slug: "cosmos",
    title: { en: "Cosmos", ko: "코스모스" },
    summary: {
      en: "Opening-exhibition promotional graphics for the WTC space-time experience platform",
      ko: "움직이는 시공간 체험 플랫폼 WTC\n개관전시 홍보 그래픽",
    },
    format: "card",
    categories: ["graphic"],
    tags: ["Exhibition Design"],
    thumbnail: "/assets/img-cosmos.png",
    order: 11,
    meta: {
      client: { en: "Asia Culture Center", ko: "국립아시아문화전당" },
      role: { en: "Design 80%", ko: "디자인 80%" },
    },
  },
  {
    slug: "sideways-glance",
    title: { en: "Sideways Glance", ko: "곁눈질로 빤히 쳐다보기" },
    summary: {
      en: "An exhibition poster using halftone dots to express the curatorial intent",
      ko: "망점을 활용해 기획의도를 표현한\n전시 포스터",
    },
    format: "card",
    categories: ["graphic"],
    tags: ["Printing"],
    thumbnail: "/assets/img-sideways.png",
    order: 12,
    meta: {
      client: { en: "Sayuji", ko: "사유지" },
      role: { en: "Design 80%", ko: "디자인 80%" },
    },
  },
  {
    slug: "amorepacific-sns",
    title: {
      en: "Amorepacific SNS Campaign",
      ko: "Amorepacific SNS Campaign",
    },
    summary: {
      en: "China SNS (Xiaohongshu, Weibo) marketing visuals for Amorepacific brands",
      ko: "아모레퍼시픽 브랜드(순플러스, 시에누 등)의\n중국 SNS(샤오홍슈, 웨이보) 마케팅 비주얼",
    },
    format: "card",
    categories: ["graphic"],
    tags: ["SNS Design"],
    thumbnail: "/assets/img-amore.png",
    order: 13,
    meta: {
      client: { en: "Amorepacific", ko: "아모레퍼시픽" },
      role: { en: "Design 100%", ko: "디자인 100%" },
    },
  },
  {
    slug: "kwon-jinkyu",
    title: { en: "Kwon Jinkyu & Woman", ko: "권진규와 여인" },
    summary: {
      en: "Promotional materials for the Kwon Jin-kyu Museum opening exhibition",
      ko: "권진규미술관 개관기념전\n홍보물 디자인",
    },
    format: "card",
    categories: ["graphic"],
    tags: ["Printing"],
    thumbnail: "/assets/img-kjk.png",
    order: 14,
    meta: {
      client: { en: "Kwon Jinkyu Museum", ko: "권진규미술관" },
      role: { en: "Design 100%", ko: "디자인 100%" },
    },
  },
  {
    slug: "pyeongchang725",
    title: { en: "Pyeongchang725", ko: "평창725" },
    summary: {
      en: "From branding to package design for farm-processed goods",
      ko: "농산가공품 브랜딩부터\n패키지 디자인까지",
    },
    format: "card",
    categories: ["graphic"],
    tags: ["Branding", "Package Design"],
    thumbnail: "/assets/img-pc725.png",
    order: 15,
    meta: {
      client: { en: "Pyeongchang725", ko: "평창725" },
      role: {
        en: "Design 100% + Product Photography",
        ko: "디자인 100% + 제품촬영",
      },
    },
  },
];

// ============================================
// Helpers
// ============================================

/**
 * 카테고리를 화면에 표시할 이름.
 * Works 필터 메뉴와 상세 페이지의 카테고리 표시가 이 값을 함께 쓴다.
 * (대문자 표기는 CSS에서 처리 — 여기에 대문자로 적지 않는다)
 */
export const CATEGORY_LABELS: Record<FilterCategory, string> = {
  "design-dev": "Design + Dev",
  "ui-design": "UI Design",
  graphic: "Graphic Design",
};

/** Works 리스트 노출 순서대로 정렬 */
export function getSortedProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

/** 카테고리별 필터링 ("All"은 getSortedProjects 사용) */
export function getProjectsByCategory(category: FilterCategory): Project[] {
  return getSortedProjects().filter((p) => p.categories.includes(category));
}

/** slug로 단일 프로젝트 조회 (상세 페이지용) */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** 케이스 스터디만 */
export function getCaseStudies(): Project[] {
  return getSortedProjects().filter((p) => p.format === "case-study");
}
