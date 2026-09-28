import { business } from '../data/business'

const toMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number)
    return hours * 60 + minutes
}

export const formatSlot = ([start, end]) => `${start} – ${end}`

// Agrupa días consecutivos con el mismo horario, p. ej. "Segunda a Sexta". Omite los días cerrados.
export function groupHours(hours = business.hours) {
    const groups = []

    hours.forEach((entry) => {
        const text = entry.slots.map(formatSlot).join(' · ')
        const last = groups.at(-1)

        if (last && last.text === text) {
            last.to = entry.label
        } else {
            groups.push({ from: entry.label, to: entry.label, text })
        }
    })

    return groups
        .filter((group) => group.text)
        .map((group) => ({
            days: group.from === group.to ? group.from : `${group.from} a ${group.to}`,
            text: group.text,
        }))
}

// Devuelve día y minutos actuales en la zona horaria de la tienda, sin importar dónde esté el visitante.
function nowInStoreTime(date = new Date()) {
    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: business.timeZone,
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
    }).formatToParts(date)

    const get = (type) => parts.find((part) => part.type === type).value
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return {
        day: weekdays.indexOf(get('weekday')),
        minutes: Number(get('hour')) * 60 + Number(get('minute')),
    }
}

export function getOpenStatus(date = new Date()) {
    const { day, minutes } = nowInStoreTime(date)
    const today = business.hours.find((entry) => entry.day === day)

    const currentSlot = today.slots.find(
        ([start, end]) => minutes >= toMinutes(start) && minutes < toMinutes(end),
    )

    if (currentSlot) {
        return { isOpen: true, today: day, label: `Aberto agora · fecha às ${currentSlot[1]}` }
    }

    const nextSlotToday = today.slots.find(([start]) => minutes < toMinutes(start))
    if (nextSlotToday) {
        return { isOpen: false, today: day, label: `Fechado · abre às ${nextSlotToday[0]}` }
    }

    for (let offset = 1; offset <= 7; offset++) {
        const next = business.hours.find((entry) => entry.day === (day + offset) % 7)
        if (next.slots.length > 0) {
            const when = offset === 1 ? 'amanhã' : next.label.toLowerCase()
            return { isOpen: false, today: day, label: `Fechado · abre ${when} às ${next.slots[0][0]}` }
        }
    }

    return { isOpen: false, today: day, label: 'Fechado' }
}
