# Portfolio

디자인과 프론트엔드 구현 작업물을 소개하는 개인 포트폴리오 사이트입니다.

## 기술 스택

- [Next.js](https://nextjs.org/) 14 (App Router) · React 18 · TypeScript 5.2
- SCSS 모듈 (`sass`)
- [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) · [@react-three/drei](https://github.com/pmndrs/drei) · three — 메인 화면 3D 오브젝트
- [valtio](https://github.com/pmndrs/valtio) — 3D 인터랙션 상태 공유
- [react-colorful](https://github.com/omgovich/react-colorful) — 컬러 피커

## 프로젝트 구조

```
app/            라우트 (App Router) — /, /works, /about
components/     React 컴포넌트
data/           콘텐츠 데이터 — 프로젝트·About 텍스트의 단일 출처
styles/         SCSS 모듈 + 공용 변수·믹스인
public/assets/  사이트에 사용하는 이미지
design/         화면 시안 PNG (로컬 참조용, 저장소 미포함)
```

화면에 보이는 텍스트는 모두 `data/`에서 옵니다.
컴포넌트는 데이터를 읽어 렌더링만 하고 문구를 직접 담지 않습니다.

## 로컬 실행

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # 프로덕션 빌드
npm run lint       # ESLint
npx tsc --noEmit   # 타입 체크
```

## 배포

Vercel — `main` 브랜치 푸시 시 자동 배포

https://portfolio-hyerim511.vercel.app/
