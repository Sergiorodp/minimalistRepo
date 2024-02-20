export function obtenerFechaActualISO() : string {
    const fecha = new Date();
    const dia = fecha.getUTCDate();
    const mes = fecha.getUTCMonth() + 1; // Sumamos 1 porque los meses comienzan desde 0
    const año = fecha.getUTCFullYear();

    // Formateamos la fecha como yyyy-mm-dd
    const fechaFormateada = `${año}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;

    return fechaFormateada;
}

export const MONTHS : Record<string, string>= {
    '01':'Jan',
    '02':'Feb',
    '03':'Mar',
    '04':'Apr',
    '05':'May',
    '06':'Jun',
    '07':'Jul',
    '08':'Aug',
    '09':'Sep',
    '10':'Oct',
    '11':'Nov',
    '12':'Dec'
}

export const MONTHNUM = Object.entries(MONTHS).reduce((acc : Record<string, string>, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});