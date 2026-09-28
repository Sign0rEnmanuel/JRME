import { WhatsAppIcon } from '../ui/BrandIcons'
import { whatsappLink } from '../../utils/whatsapp'
import './WhatsAppFloat.css'

export default function WhatsAppFloat() {
    return (
        <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Falar com a JR Materiais Elétricos no WhatsApp"
        >
            <WhatsAppIcon size={30} />
            <span className="whatsapp-float__tooltip">Fale conosco!</span>
        </a>
    )
}
