import { ui, defaultLang, languages } from "./ui";
import type { TranslationKey, LanguageKey } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as LanguageKey;
  return defaultLang;
}

export function getPageFromUrl(url: URL) {
  const [, lang, ...page] = url.pathname.split("/");
  return page.join("/");
}

export function useTranslations(lang: LanguageKey) {
  return function t(key: TranslationKey) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export async function defaultStaticPathsFunction() {
  return Object.keys(languages).map((lang) => {
    return { params: { lang }, props: lang };
  });
}
