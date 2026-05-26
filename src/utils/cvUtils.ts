import cvEn from '@app/resources/cv.json';
import cvEs from '@app/resources/cv.es.json';

export type Lang = 'en' | 'es';

export function getCVData(lang: Lang = 'en') {
  return lang === 'es' ? cvEs : cvEn;
}
