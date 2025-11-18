'use client';

import { useLanguage } from '../providers/LanguageProvider';

export default function LanguageSwitcher() {
  const { lang, setLang, supported } = useLanguage();

  return (
    <div className="flex gap-2">
      {supported.map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={
            'px-3 py-1 rounded border text-sm transition ' +
            (lang === code
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-gray-300 hover:bg-gray-100')
          }
        >
          {code === 'zh' ? '中文' : code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
