import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations.jsx';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'westbridge-lang';

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'fa';
    return localStorage.getItem(STORAGE_KEY) || 'fa';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'fa' ? 'en' : 'fa'));

  const t = (key) => {
    const parts = key.split('.');
    let node = translations[lang];
    for (const part of parts) {
      node = node?.[part];
    }
    return node ?? key;
  };

  const value = { lang, setLang, toggleLang, t, dir: lang === 'fa' ? 'rtl' : 'ltr' };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
