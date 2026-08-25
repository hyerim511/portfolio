# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

이 파일은 Claude Code가 이 저장소에서 작업할 때 자동으로 참조하는 프로젝트 가이드입니다.

## 프로젝트 개요

디자인과 프론트엔드 구현 작업물을 소개하는 개인 사이트입니다.

- 사이트: https://portfolio-hyerim511.vercel.app/
- 배포: Vercel

## 작업 방식

- 디자인 의도를 정확히 반영하는 것이 최우선입니다.
  코드를 변경할 때는 **그 선택의 의도와 근거를 함께 설명해** 주세요.
- 복잡한 추상화나 과도한 엔지니어링보다 **읽기 쉽고 유지보수하기 쉬운 코드**를 우선합니다.
- 큰 변경을 한 번에 하지 말고 **작은 단위로 나눠서** 진행하고, 각 단계마다 확인받으세요.

## 기술 스택 (작업 시작 전 실제 확인 필요)

문서는 뒤처질 수 있습니다. **작업 전 `package.json`과 설정 파일에서 실제 버전을 확인하세요.**

- Framework: Next.js 14 (App Router) + TypeScript, React 18
- Styling: SCSS 모듈 (`*.module.scss`) — CSS-in-JS 아님
- 3D / Interactive: `@react-three/fiber` + `@react-three/drei` (Three.js 래퍼) — 메인의 인터랙티브 도넛 오브젝트, **반드시 유지**
- 상태: `valtio` (도넛 색상 등 3D 인터랙션 상태 공유)
- 다국어: 라우트(`/ko`, `/en`)가 아니라 **클라이언트 상태**로 처리합니다.
  `components/LocaleProvider.tsx`의 Context가 언어를 들고 있고, `useLocale()`로 꺼내 씁니다.
  외부 i18n 라이브러리는 쓰지 않습니다.
- 테스트 프레임워크 없음 — 검증은 빌드·타입체크·린트·수동 브라우저 확인으로 대신함.

## 명령어

```bash
npm run dev          # 개발 서버 (localhost:3000)
npm run build         # 프로덕션 빌드 (타입 에러도 여기서 걸림)
npm run lint          # ESLint (next/core-web-vitals 설정)
npx tsc --noEmit       # 타입 체크만 (strict 모드)
npm start              # 빌드된 결과물 실행
```

코드를 변경한 뒤에는 `npm run build`(또는 최소 `npx tsc --noEmit`)와 `npm run lint`를 실행해
통과 여부를 확인하세요. 빌드나 타입 체크가 실패하면 다음 작업으로 넘어가지 말고 먼저 고치세요.
단위 테스트는 없으므로, UI를 바꾸는 작업은 `npm run dev`로 브라우저에서 직접 확인해야 합니다.

## 절대 규칙 (하면 안 되는 것)

- **Three.js 인터랙티브 요소를 제거하거나 훼손하지 마세요.** 이 프로젝트의 핵심 개성입니다.
- 검증 없이 대규모 리팩터링을 하지 마세요. 빌드·타입·린트를 매번 통과시켜야 합니다.
- 요청하지 않은 라이브러리를 임의로 추가하지 마세요. 추가가 필요하면 먼저 제안하고 이유를 설명하세요.
- 기존 프로젝트(과거 작업물) 데이터를 임의로 삭제하지 마세요. 정리가 필요해 보이면
  먼저 소유자에게 확인하세요.
- `FilterCategory`에 새 값을 만들거나 Branding 필터를 되살리지 마세요. 유효값은 `design-dev` / `ui-design` / `graphic` 뿐입니다.

## 아키텍처

### 경로 별칭 (`tsconfig.json`)

`@/*` → 루트, `@components/*` → `components/`, `@styles/*` → `styles/`, `@public/*` → `public/`.
(단, 컴포넌트 파일들은 실제로는 `@/data/...`, `@styles/...` 형태를 섞어 쓰고 있으니
새 import를 쓸 때 주변 코드의 패턴을 따라가세요.)

### 데이터 흐름

`data/{types,projects,about}.ts`가 콘텐츠의 단일 출처입니다 (아래 "데이터 구조" 참고).
페이지/컴포넌트는 이 데이터를 읽어서 렌더링만 하고, 텍스트를 하드코딩하지 않습니다.

- `app/works/page.tsx` → `WorksList.tsx`가 `getSortedProjects()`로 15개 프로젝트를 가져와
  케이스 스터디(3) + 카드(12)로 나눠 렌더링. 필터는 라우팅이 아니라 **클라이언트 state**로 처리되며,
  필터에 안 걸리는 항목은 목록에서 빼지 않고 흐리게(`dimmed`) 표시합니다.
  (`getProjectsByCategory` / `getProjectBySlug` / `getCaseStudies` 헬퍼는 `data/projects.ts`에
  정의는 되어 있지만 현재 실제로 쓰이는 곳은 없습니다 — 실제 필터링은 `WorksList.tsx` 안의
  `isDimmed`가 담당합니다.)
- 프로젝트 상세(케이스 스터디 3개 + 카드)는 **별도 페이지 라우트(`/works/[slug]`)가 아니라
  `ProjectModal.tsx` 모달**로 엽니다. `WorksList.tsx`가 `openProject` state로 어떤 프로젝트를
  모달에 띄울지 관리합니다. 상세 페이지 라우팅을 새로 만들 필요는 없습니다.
- About은 `app/about/page.tsx`(서버 — `metadata` 전용)와 `components/AboutContent.tsx`
  (클라이언트 — 본문)로 나뉘어 있습니다. 본문이 언어 전환에 반응해야 하는데 `metadata`는
  서버에서만 내보낼 수 있어서입니다. 내용은 `data/about.ts`(`AboutData`)를 그대로 읽어
  헤드라인 → bio → 스킬 → 언어 → 연락처 순으로 렌더링하며, 연락처는 여기 하단에 통합되어
  있고 별도 Contact 페이지는 없습니다.

### 다국어 (KR / EN)

`components/LocaleProvider.tsx`가 언어 상태를 들고 있고 `app/layout.tsx`에서 앱 전체를 감쌉니다.
덕분에 `/works` ↔ `/about` 이동에도 선택한 언어가 유지되고, 선택값은 `localStorage`에 저장되어
새로고침 후에도 남습니다. `<html lang>`도 함께 갱신됩니다.

- 언어가 필요한 컴포넌트는 `const { locale } = useLocale();`로 꺼내
  `someText[locale]` 형태로 씁니다 (현재 `AboutContent.tsx`, `ProjectModal.tsx`).
- 언어를 바꿀 때는 `selectLocale("ko" | "en")`을 씁니다. 토글이 아니라 **선택** 방식입니다.
- **Works 목록의 프로젝트명은 언어와 무관하게 항상 영문**(`title.en`)입니다 — 시안 기준.
- 첫 렌더는 서버와 동일하게 기본값(`ko`)으로 그리고, 저장된 값은 마운트 후 effect에서
  반영합니다. 하이드레이션 불일치를 피하기 위한 것이니 이 순서를 바꾸지 마세요.

#### 언어 메뉴 (`IconNav.tsx`)

아이콘 3개 아래에 **KR·EN을 함께 표시**하고, 현재 언어에 채워진 배지를 붙입니다
(상세 모달의 `chipFilled`와 같은 표현). 한쪽만 보여주는 토글로 바꾸지 마세요 — 시안 기준입니다.

- 배지 배경은 상속된 글자색(`currentColor`)을 쓰므로 밝은/어두운 페이지에서 자동으로 대비가 잡힙니다.
- **배지 안 글자색은 페이지가 `--nav-contrast`로 알려줘야 합니다.** 그 페이지의 배경색을 넣으세요.
  밝은 배경 페이지(`about.module.scss`, `home.module.scss`)에 이미 선언되어 있고,
  어두운 배경은 기본값($bgDark)으로 충분합니다. **IconNav를 쓰는 밝은 배경 페이지를 새로 만들면
  이 변수를 반드시 선언**하세요. 빠뜨리면 배지 글자가 보이지 않습니다.
- 한 요소에 `background-color: currentColor`와 `color`를 함께 주지 마세요. 배경이 새 글자색을
  따라가 배경과 글자가 같은 색이 됩니다. 그래서 배지 글자는 안쪽 `span`에서만 색을 바꿉니다.

### 라우트 (전체)

`/` (메인·Three.js 도넛) · `/works` · `/about` 세 개뿐입니다.
프로젝트 상세는 라우트가 아니라 모달이므로 `/works/[slug]` 같은 하위 라우트가 없습니다.

리디자인 이전의 레거시 코드(`app/works/(list)/*` 개별 상세 라우트, `app/contact`,
전용 컴포넌트 8개, `styles/works/*`)는 2026.08에 모두 삭제했습니다.
필요하면 git 이력에서 되살릴 수 있습니다.

### 스타일 컨벤션

- `styles/variable.scss`가 모든 모듈에서 공유하는 SCSS 믹스인(`flex`, `flexCol`, `flexCenter`,
  `flexAlign`, `grid`, `bgPattern`)과 색상/폰트 변수(`$bgDark`, `$bgLight`, `$paper`, `$ink`,
  `$fontMain`), 반응형 breakpoint(`$mobileView: 700px`)를 정의합니다. 각 `*.module.scss`는
  최상단에서 `@import './variable.scss'` (또는 상대 경로)로 이걸 가져와 씁니다.
- 반응형은 **`clamp()`/`vw` 단위로 값 자체를 유동적으로 주고, 레이아웃 구조(그리드 → 블록 등)만
  `$mobileView`(700px) 한 지점에서 미디어쿼리로 전환**하는 방식입니다. 새 breakpoint를 임의로
  추가하지 말고 이 패턴을 따르세요.
- 폰트: 영문 Poppins가 우선이고 Poppins에 없는 한글은 자동으로 Paperlogy로 폴백됩니다
  (`$fontMain: 'Poppins', 'Paperlogy', sans-serif;`). 특정 요소에서 영문도 Paperlogy로 강제하려면
  그 요소에 `font-family: 'Paperlogy', sans-serif;`를 직접 지정하세요 (예: 케이스 스터디 타이틀).
  언어 전환 버튼(KR/EN)만 예외로 `Paytone One`을 씁니다.
- 이 프로젝트에는 전역 `box-sizing: border-box`가 없습니다. `width: 100%`에 padding/border를
  더해 넘치는 요소는 그 컴포넌트에서 직접 `box-sizing: border-box`를 지정해야 합니다.

## 데이터 구조 / 파일 위치

콘텐츠는 데이터 파일로 분리되어 있습니다. **위치 (확정):**

- **데이터 파일 → `data/`** — `types.ts`, `projects.ts`, `about.ts`
- **디자인 시안 → `design/`** — 각 화면 PNG (구현 시 **시각 레퍼런스로 참조**).
  로컬 참조용이며 저장소에는 포함되지 않습니다 (`.gitignore`).
- **이미지 에셋 → `public/assets/`** — 실제 사이트에 들어가는 이미지 파일

### 데이터 파일

- `types.ts` — 전체 타입 정의 (`Project`, `LocalizedText`, `AboutData`, `SkillGroup`, `LanguageSkill` 등)
- `about.ts` — About 섹션 콘텐츠 (포지셔닝·바이오·스킬·언어·연락처)
- `projects.ts` — Works 전체 **15개** 프로젝트 데이터 + 헬퍼(`getSortedProjects`, `getProjectsByCategory`, `getProjectBySlug`, `getCaseStudies`)

> ⚠️ 세 파일은 **한 세트**로 맞춰져 있습니다 (타입 체크 통과 상태). 하나만 교체하지 말고 함께 배치하세요.

모든 사용자 노출 텍스트는 `{ en: string, ko: string }` 형태(`LocalizedText`)입니다.
다국어 적용 시 이 구조를 활용하세요. UI에 하드코딩된 텍스트를 새로 만들지 말고
데이터 파일의 값을 사용하세요.

### 텍스트 안의 표기 규칙

시안의 줄바꿈·강조 위치가 문구마다 달라서, 데이터에 직접 표시합니다 (UI가 해석함).

- `summary` — `\n`으로 상세 화면의 줄바꿈 위치를 지정 (시안 실측 기준, 15개 중 14개 적용)
- `about.ts`의 `bio` — `\n` 줄바꿈 + `**…**` 굵게

### 이미지 필드

경로는 모두 `public/assets/`의 실제 파일입니다 (40장, 전부 사용 중).

- `thumbnail` — 상세 상단 대표 컷
- `images` — **카드형** 추가 이미지. thumbnail까지 합친 장수에 따라 배치가 달라집니다
  (1장: 오른쪽 절반 / 2장: 데스크톱+모바일 겹침 / 3장: 계단식 / 4장: 가로 나열)
- `caseImages` — **케이스 스터디** 전용. `mobile` / `details` / `slides`로 구역을 나눠 지정
- `bgColor` — 케이스 스터디 상세의 배경색 (프로젝트마다 다름, 카드형은 생략하면 기본값)

## 콘텐츠 결정사항 (확정)

- 이름: Hyerim "Haley" Kim / 김혜림
- 이메일: kimhyerim511@gmail.com
- 지역: Seoul, Korea · Open to remote & relocation
- 포지셔닝 문장: "From design to product." / "디자인에서 완성까지."

### Works 필터 구조 (2026.07 개편)

스킬 기반 필터를 사용합니다 (직무명 아님):
`All / Design + Dev / UI Design / Graphic Design`

- `FilterCategory` 값은 **`design-dev` / `ui-design` / `graphic` 세 개만** 유효합니다.
- 각 프로젝트는 **정확히 하나의 카테고리**에 속합니다 (`categories`는 배열이지만 실질 1개).
  Branding·Web UI 등 성격 태그는 `categories`가 아니라 `tags`에 넣습니다.
  (이전의 다중 소속 / Branding 필터는 폐기됨)
- 현재 분포: **Design + Dev 4 / UI Design 6 / Graphic 5** (총 15개)
- 프로젝트는 `format`으로 구분: `case-study`(3개 — 코디세이·AB Media·샘푸르넷, 상세는 모달) / `card`(12개).
- 케이스 스터디 상세는 문제(Problem/Challenge) → 해결책(Solution/Approach) → 결과(Outcome/Result) 3단 구조.
- **카드형은 기간(period) 미표기** — `meta.period`는 optional이며 케이스 스터디에만 채워져 있음.
- `liveUrl`은 현재 접속 가능한 경우에만 존재합니다.

### About 섹션

- **별도 Contact 페이지 없음 — 연락처는 About 하단에 통합.**
  네비게이션(`IconNav.tsx`)은 **Main / Works / About** 3개 아이콘입니다.
- 구성 순서: 헤드라인(`from Design to Product`) → 한 줄 소개 → 스킬 그룹 → 언어 → 연락처.
- 스킬은 카테고리별 칩(chip) 형태. **막대그래프나 퍼센트 레벨 표시 금지.**
- 스킬 그룹: **Design / Development / AI & Creative** (라벨·태그 모두 영문, `about.ts`의 `skillGroups`).
- 경력 연차·연도는 표시하지 않습니다.
- 언어 배지 4개: 한국어 Native · English Professional · 日本語 Professional · 中文 Basic.
- 연락처: 이메일 + Location(Seoul) + **LinkedIn 링크** (`about.ts`의 `contact`). 값은 데이터 파일에서 가져오기.

## 남은 작업

- **반응형 점검** — 320px ~ 1920px+ 전 구간에서 `clamp()`/`vw` 값이 자연스럽게 스케일되는지 확인.
- 디자인 세부(색·폰트·간격)는 Figma 시안에서 확정됩니다. 구조와 구현에 집중하고,
  비주얼 디테일은 `design/` 폴더의 PNG 시안과 지시를 따르세요
  (이 폴더는 로컬에만 있고 저장소에는 포함되지 않습니다).
