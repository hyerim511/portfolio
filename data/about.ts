// ============================================
// Portfolio Data — About
// Updated 2026.07 — 실제 About 디자인 기준
//   · Contact는 About 하단에 통합 (별도 Contact 페이지 없음)
//   · 언어 레벨: English/日本語 Professional, 中文 Basic (디자인 기준)
//   · LinkedIn 링크 추가
// ============================================

import type { AboutData } from "./types";

export const about: AboutData = {
  headline: "from Design to Product",

  bio: {
    // 디자인 카피 그대로. 줄바꿈은 \n, 굵게는 **…** (시안의 3줄 구성과 강조를 그대로 반영)
    // (참고: 스킬 순서(UI/UX 먼저)와 맞추려면
    //  "UI/UX와 그래픽 디자인, 프론트엔드를 넘나드는"으로 바꿀 수 있음 — 선택)
    ko: "안녕하세요,\n그래픽 디자인과 UI/UX, 프론트엔드를 넘나드는\n**디자이너 김혜림**입니다.",
    en: "Hi, I'm **Hyerim Kim** —\na designer working across\ngraphic design, UI/UX and front-end.",
  },

  skillGroups: [
    {
      label: "Design",
      skills: ["UI/UX Design", "Graphic Design", "Branding", "Editorial Design"],
    },
    {
      label: "Development",
      skills: [
        "Front-end Development",
        "Responsive Design",
        "3D / Interactive",
        "Version Control",
      ],
    },
    {
      label: "AI & Creative",
      skills: [
        "AI-Assisted Design",
        "AI Image Generation",
        "AI-Assisted Development",
      ],
    },
  ],

  languages: [
    { name: "한국어", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "日本語", level: "Professional" },
    { name: "中文", level: "Basic" },
  ],

  contact: {
    email: "kimhyerim511@gmail.com",
    location: { en: "Seoul, Korea", ko: "서울, 대한민국" },
    // 시안 기준 — 한국어 화면에서도 영문 그대로 노출
    openTo: "Open to remote & relocation",
    linkedin: "https://linkedin.com/in/hyerim511",
    // wanted: 필요 시 여기에 추가
  },
};
