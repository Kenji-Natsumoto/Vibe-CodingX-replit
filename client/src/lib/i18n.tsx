import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'jp';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    "nav.home": "Home",
    "nav.articles": "Articles",
    "nav.about": "About",
    "hero.subtitle": "Tech Media for the Vibe Coding Generation",
    "hero.cta": "Read Latest",
    "schedule.title": "Transmission Schedule",
    "schedule.next": "Next Drop",
    "article.latest": "Latest Transmission",
    "read.more": "Read Data //",
    "footer.rights": "All Rights Reserved.",
    "back.to.base": "Back to Base",
    "serialized.novel": "SERIALIZED NOVEL"
  },
  jp: {
    "nav.home": "ホーム",
    "nav.articles": "記事一覧",
    "nav.about": "概要",
    "hero.subtitle": "このたび「テックトレンド速報」は「VibeCoding X」にバージョンアップしました。",
    "hero.cta": "最新記事を読む",
    "schedule.title": "配信スケジュール",
    "schedule.next": "次回配信",
    "article.latest": "最新のトランスミッション",
    "read.more": "データを読む //",
    "footer.rights": "全著作権所有。",
    "back.to.base": "ベースに戻る",
    "serialized.novel": "連載小説"
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('jp'); // Default to JP as per "Wired Japan" inspiration

  useEffect(() => {
    const savedLang = localStorage.getItem('vibe-lang') as Language;
    if (savedLang) setLanguage(savedLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'jp' : 'en';
    setLanguage(newLang);
    localStorage.setItem('vibe-lang', newLang);
  };

  const t = (key: string) => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};