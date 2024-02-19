export const FONT_COLORS = {
    subtitle: {
        dark: '#F1CC4C',
        light: '#e89222'
    }
}

/**
 * use to calc font color from the background
 * @param background string
 * @returns font color
 */
export function getFontColor(background : string) {

    if(!background) return ''

    // Convierte el color de fondo a su valor RGB
    const r = parseInt(background.slice(1, 3), 16);
    const g = parseInt(background.slice(3, 5), 16);
    const b = parseInt(background.slice(5, 7), 16);

    // Calcula el brillo del fondo (según la fórmula W3C)
    const brightes = (r * 299 + g * 587 + b * 114) / 1000;

    // Decide si el color de letra debe ser blanco o negro
    return brightes > 128 ? '#000000' : '#ffffff';
}

