export type Lang = 'en' | 'es';

function formatDayToArticleStyle(date: string) {
    const dateSplitted = date?.split('-')
    return `${dateSplitted[0]}/${MONTHS[dateSplitted[1]]}`
}

export function obtenerFechaActualISO(): string {
    const fecha = Date().split(' ');
    const dia = fecha[2];
    const mes = fecha[1];
    const año = fecha[3];
    const fechaFormateada = `${año}-${MONTHNUM[mes]}-${dia}`;
    return fechaFormateada;
}

export const MONTHS: Record<string, string> = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'
}

export const MONTHS_ES: Record<string, string> = {
    '01': 'Ene',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Abr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Ago',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dic'
}

export function getMonths(lang: Lang = 'en'): Record<string, string> {
    return lang === 'es' ? MONTHS_ES : MONTHS;
}

export const MONTHNUM = Object.entries(MONTHS).reduce((acc: Record<string, string>, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

export {
    formatDayToArticleStyle
}
