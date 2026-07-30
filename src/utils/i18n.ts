export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'i18n.lang': 'English',
    'i18n.switch': 'ES',
    'section.about': 'About me',
    'section.projects': 'Projects',
    'section.contact': 'Contact',
    'section.skills': 'Skills',
    'section.education': 'Education',
    'section.experience': 'Experience',
    'section.certificates': 'Certificates',
    'section.keywords': 'Keywords',
    'experience.present': 'Present',
    'education.inProgress': 'In progress',
    'work.current': 'Current job',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.cloud': 'Cloud',
    'skills.complementary': 'Complementary',
  },
  es: {
    'i18n.lang': 'Español',
    'i18n.switch': 'EN',
    'section.about': 'Sobre mí',
    'section.projects': 'Proyectos',
    'section.contact': 'Contacto',
    'section.skills': 'Habilidades',
    'section.education': 'Educación',
    'section.experience': 'Experiencia',
    'section.certificates': 'Certificados',
    'section.keywords': 'Palabras clave',
    'experience.present': 'Actualidad',
    'education.inProgress': 'En curso',
    'work.current': 'Empleo actual',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.cloud': 'Cloud',
    'skills.complementary': 'Complementario',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui = 'en') {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
