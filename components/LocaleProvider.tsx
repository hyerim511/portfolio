"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import type { LocalizedText } from "@/data/types";

/** 데이터의 LocalizedText 키와 동일 — "en" | "ko" */
export type Locale = keyof LocalizedText;

const STORAGE_KEY = "portfolio-locale";
const DEFAULT_LOCALE: Locale = "ko";

type LocaleContextValue = {
  locale: Locale;
  /** 원하는 언어를 직접 지정 (메뉴가 KR·EN을 함께 보여주므로 토글이 아니라 선택 방식) */
  selectLocale: (next: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  selectLocale: () => {},
});

/**
 * 언어 상태를 앱 전체에서 공유한다.
 * layout에 두므로 /works ↔ /about 이동에도 선택한 언어가 유지된다.
 */
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  /*
    저장된 값은 마운트 후에 반영한다.
    첫 렌더를 서버와 동일하게 맞춰야 하이드레이션 불일치가 생기지 않기 때문이다.
  */
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ko") setLocale(saved);
  }, []);

  // 스크린 리더·브라우저 번역이 올바른 언어로 인식하도록 반영
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const selectLocale = useCallback((next: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    setLocale(next);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, selectLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
