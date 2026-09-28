import { Phone, Zap } from 'lucide-react'
import Reveal from '../ui/Reveal'
import { WhatsAppIcon } from '../ui/BrandIcons'
import { business } from '../../data/business'
import { whatsappLink } from '../../utils/whatsapp'
import './FinalCta.css'

export default function FinalCta() {
    return (
        <section className="final-cta" aria-labelledby="final-cta-title">
            <div className="container">
                <Reveal className="final-cta__box">
                    <Zap className="final-cta__bolt" aria-hidden="true" />

                    <span className="final-cta__eyebrow">Orçamento sem compromisso</span>
                    <h2 id="final-cta-title" className="final-cta__title">
                        Sua obra merece energia de qualidade
                    </h2>
                    <p className="final-cta__text">
                        Envie sua lista de materiais agora mesmo e receba um orçamento rápido, com atendimento de quem
                        entende de elétrica.
                    </p>

                    <div className="final-cta__actions">
                        <a
                            href={whatsappLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--whatsapp btn--lg"
                        >
                            <WhatsAppIcon size={22} />
                            Pedir orçamento no WhatsApp
                        </a>
                        <a href={business.phoneHref} className="btn btn--ghost btn--lg">
                            <Phone size={20} aria-hidden="true" />
                            {business.phoneDisplay}
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
