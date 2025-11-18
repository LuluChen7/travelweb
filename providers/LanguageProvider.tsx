'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from 'react';
import en from '../locales/en.json';
import pt from '../locales/pt.json';
import zh from '../locales/zh.json';

// 所有语言字典放在一起
const DICTS = { en, pt, zh } as const;

export type Lang = keyof typeof DICTS;       // "en" | "pt" | "zh"
type Messages = (typeof DICTS)[Lang];

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  supported: Lang[];
};

const SUPPORTED: Lang[] = ['en', 'pt', 'zh'];
const DEFAULT_LANG: Lang = 'en';

// createContext 里给出明确类型
const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

function setHtmlLang(l: Lang) {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = l;
  }
}

// 辅助函数：从字典里按 "a.b.c" 取值
function lookup(dict: Messages, key: string): string {
  const parts = key.split('.');
  let cur: any = dict;
  for (const p of parts) {
    if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
      cur = cur[p];
    } else {
      return key; // 找不到就直接返回 key，方便调试
    }
  }
  return typeof cur === 'string' ? cur : key;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  // 初始化语言：localStorage > 浏览器语言
  useEffect(() => {
    const saved =
      typeof window !== 'undefined'
        ? (window.localStorage.getItem('lang') as Lang | null)
        : null;

    if (saved && SUPPORTED.includes(saved)) {
      setLangState(saved);
      setHtmlLang(saved);
      return;
    }

    const nav =
      typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : 'en';
    let guess: Lang = 'en';
    if (nav.startsWith('pt')) guess = 'pt';
    else if (nav.startsWith('zh')) guess = 'zh';

    setLangState(guess);
    setHtmlLang(guess);
  }, []);

  function changeLang(next: Lang) {
    const final = SUPPORTED.includes(next) ? next : DEFAULT_LANG;
    setLangState(final);
    setHtmlLang(final);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('lang', final);
    }
  }

  function t(key: string): string {
    const dict = DICTS[lang] ?? DICTS[DEFAULT_LANG];
    return lookup(dict, key);
  }

  const value: LanguageContextValue = {
    lang,
    setLang: changeLang,
    t,
    supported: SUPPORTED
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used inside <LanguageProvider>');
  }
  return ctx;
}
