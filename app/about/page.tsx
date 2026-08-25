import type { Metadata } from "next";

import { about } from "@/data/about";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About — Haley Kim",
  // 검색결과·SNS 미리보기에는 표기 기호가 그대로 나오면 안 되므로 지운다
  description: about.bio.en.replace(/\*\*/g, "").replace(/\n/g, " "),
};

/*
  본문은 언어 전환에 반응해야 해서 클라이언트 컴포넌트로 분리했다.
  metadata는 서버에서만 내보낼 수 있으므로 이 파일에 남겨둔다.
*/
export default function About() {
  return <AboutContent />;
}
