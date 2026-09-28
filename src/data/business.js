/*
 * Datos centrales del negocio.
 * Todo el contenido editable de la web está aquí para que sea fácil actualizarlo.
 * Los campos marcados con TODO necesitan confirmación o el dato real.
 */

export const business = {
    name: 'JR Materiais Elétricos',

    // TODO: confirmar que este número (el del Google Maps y la fachada) es también el WhatsApp.
    phoneDisplay: '(41) 99661-9752',
    phoneHref: 'tel:+5541996619752',
    whatsappNumber: '5541996619752',
    whatsappMessage: 'Olá, JR Materiais Elétricos! Gostaria de solicitar um orçamento.',

    // TODO: añadir el e-mail real (si existe). Vacío = no se muestra en la web.
    email: '',

    // TODO: añadir el CNPJ real (formato 00.000.000/0000-00). Vacío = no se muestra en la web.
    cnpj: '',

    address: {
        street: 'Av. Juscelino Kubitschek de Oliveira, 1255',
        district: 'Centro',
        city: 'Matinhos',
        state: 'PR',
        zip: '83260-000',
    },

    maps: {
        embedUrl:
            'https://www.google.com/maps?q=JR+Materiais+El%C3%A9tricos,+Av.+Juscelino+Kubitschek+de+Oliveira,+1255,+Matinhos+-+PR&output=embed',
        directionsUrl:
            'https://www.google.com/maps/dir/?api=1&destination=JR+Materiais+El%C3%A9tricos,+Av.+Juscelino+Kubitschek+de+Oliveira,+1255,+Matinhos+-+PR',
    },

    rating: {
        score: '4,8',
        count: 12,
    },

    social: {
        instagram: 'https://www.instagram.com/jrmateriaiseletricosjr/',
        instagramHandle: '@jrmateriaiseletricosjr',
        facebook: 'https://www.facebook.com/felipessantos1313',
    },

    // Horario: día 0 = domingo (igual que Date.getDay()). Cada franja en formato 'HH:MM'.
    hours: [
        { day: 1, label: 'Segunda', slots: [['08:00', '12:00'], ['13:30', '18:00']] },
        { day: 2, label: 'Terça', slots: [['08:00', '12:00'], ['13:30', '18:00']] },
        { day: 3, label: 'Quarta', slots: [['08:00', '12:00'], ['13:30', '18:00']] },
        { day: 4, label: 'Quinta', slots: [['08:00', '12:00'], ['13:30', '18:00']] },
        { day: 5, label: 'Sexta', slots: [['08:00', '12:00'], ['13:30', '18:00']] },
        { day: 6, label: 'Sábado', slots: [['08:00', '12:00']] },
        { day: 0, label: 'Domingo', slots: [] },
    ],

    timeZone: 'America/Sao_Paulo',

    // Según la bio de Instagram. TODO: confirmar direcciones exactas de la Loja 1 y la Loja 2.
    stores: [
        { name: 'Loja 1', place: 'Balneário Canoas, Pontal do Paraná' },
        { name: 'Loja 2', place: 'Balneário Junara, Matinhos' },
        { name: 'Loja 3', place: 'Av. JK, Caiobá, Matinhos' },
    ],
}

export const fullAddress = `${business.address.street} - ${business.address.district}, ${business.address.city} - ${business.address.state}, ${business.address.zip}`
