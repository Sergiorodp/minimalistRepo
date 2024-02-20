export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'i18n.lang': 'English',
    'section.about': 'About me',
    'section.projects': 'Projects',
    'section.contact': 'Contact',
    'section.skills': 'Skills',
    'section.education': 'Education',
    'section.experience': 'Experience',
    'section.certificates': 'Certificates'
  },
  es: {
      'i18n.lang': 'Español',
      'section.about': 'Sobre mí',
      'section.projects': 'Proyectos',
      'section.contact': 'Contacto',
      'section.skills': 'Hábilidades',
      'section.education': 'Educación',
      'section.experience': 'Experiencia',
      'section.certificates':'Certificados'
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang : keyof typeof ui = 'en') {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}