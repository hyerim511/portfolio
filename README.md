# Haley Kim — Portfolio

UI/그래픽 디자이너 김혜림(Hyerim "Haley" Kim)의 개인 포트폴리오 사이트입니다.
그래픽·브랜딩·UI 디자인부터 프론트엔드 구현까지의 작업물을 소개합니다.

- 배포: [portfolio-hyerim511.vercel.app](https://portfolio-hyerim511.vercel.app/) (Vercel)

## 기술 스택

- [Next.js](https://nextjs.org/) 14 (App Router) + TypeScript, React 18
- SCSS 모듈 (`*.module.scss`)
- [react-three-fiber](https://github.com/pmndrs/react-three-fiber) / drei — 메인 화면의 인터랙티브 3D 오브젝트

## 개발

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # 프로덕션 빌드
npm run lint     # ESLint
npx tsc --noEmit # 타입 체크
```

## 구조

- `app/` — 라우트 (Next.js App Router)
- `components/` — React 컴포넌트
- `data/` — 콘텐츠 데이터 (`types.ts` / `projects.ts` / `about.ts`)
- `styles/` — SCSS 모듈
- `design/` — Figma 시안 PNG
- `public/assets/` — 실제 사이트에 쓰이는 이미지 에셋

코드베이스 구조와 작업 컨벤션에 대한 자세한 내용은 [CLAUDE.md](./CLAUDE.md)를 참고하세요.
