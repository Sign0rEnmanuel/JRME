import { business } from '../data/business'

export function whatsappLink(message = business.whatsappMessage) {
    return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`
}
