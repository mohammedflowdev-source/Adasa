import { useState, useEffect } from "react";
import { LanguageContext } from "./language-context-instance";
import {
  uiTranslations,
  categoryMap,
  reverseCategoryMap,
  authorRolesMap,
  authorNamesMap,
  postEnglishData,
} from "./translations";

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem("adasa_lang") || "ar";
  });

  useEffect(() => {
    localStorage.setItem("adasa_lang", language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const setLanguage = (lang) => {
    if (lang === "ar" || lang === "en") {
      setLanguageState(lang);
    }
  };

  const t = (key, ...args) => {
    const val = uiTranslations[language]?.[key] || uiTranslations.ar[key] || key;
    if (typeof val === "function") {
      return val(...args);
    }
    return val;
  };

  const localizeCategory = (catName) => {
    if (language === "en") {
      return categoryMap[catName] || catName;
    }
    return reverseCategoryMap[catName] || catName;
  };

  const localizePost = (post) => {
    if (!post) return post;
    if (language === "ar") return post;

    const enMeta = postEnglishData[post.id] || {};
    return {
      ...post,
      title: enMeta.title || post.title,
      excerpt: enMeta.excerpt || post.excerpt,
      readTime: enMeta.readTime || post.readTime,
      tags: enMeta.tags || post.tags,
      category: categoryMap[post.category] || post.category,
      author: {
        ...post.author,
        name: authorNamesMap[post.author.name] || post.author.name,
        role: authorRolesMap[post.author.role] || post.author.role,
      },
    };
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        isRTL: language === "ar",
        toggleLanguage,
        setLanguage,
        t,
        localizeCategory,
        localizePost,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
