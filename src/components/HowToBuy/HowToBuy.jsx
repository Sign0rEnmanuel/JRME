import { Phone, Store } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'
import { InstagramIcon, WhatsAppIcon } from '../ui/BrandIcons'
import { business } from '../../data/business'
import { buySteps } from '../../data/content'
import { whatsappLink } from '../../utils/whatsapp'
import './HowToBuy.css'

const channels = [
    {
        icon: WhatsAppIcon,
        title: 'WhatsApp',
        detail: 'Orçamentos rápidos',
        href: whatsappLink(),
        external: true,
        variant: 'whatsapp',
    },
    {
        icon: Phone,
        title: 'Telefone',
        detail: business.phoneDisplay,
        href: business.phoneHref,
    },
    {
        icon: Store,
        title: 'Na loja',
        detail: `${business.address.district}, ${business.address.city}`,
        href: '#contato',
    },
    {
        icon: InstagramIcon,
        title: 'Instagram',
        detail: business.social.instagramHandle,
        href: business.social.instagram,
        external: true,
        variant: 'instagram',
    },
]

export default function HowToBuy() {
    return (
        <section id="como-comprar" className="section section--muted how-to-buy">
            <div className="container">
                <Reveal>
                    <SectionHeader
                        eyebrow="Como comprar"
                        title={
                            <>
                                Comprar na JR é <span className="highlight">simples</span>
                            </>
                        }
                        subtitle="Peça pelo WhatsApp, receba o orçamento e escolha como prefere receber o seu material."
                    />
                </Reveal>

                <ol className="steps">
                    {buySteps.map(({ icon: Icon, title, description }, index) => (
                        <Reveal as="li" key={title} className="step" delay={index * 100}>
                            <div className="step__marker">
                                <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
                                <span className="step__number">{index + 1}</span>
                            </div>
                            <h3 className="step__title">{title}</h3>
                            <p className="step__text">{description}</p>
                        </Reveal>
                    ))}
                </ol>

                <Reveal className="channels">
                    <h3 className="channels__title">Canais de atendimento</h3>
                    <ul className="channels__list">
                        {channels.map(({ icon: Icon, title, detail, href, external, variant }) => (
                            <li key={title}>
                                <a
                                    href={href}
                                    className={`channel ${variant ? `channel--${variant}` : ''}`}
                                    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                                >
                                    <span className="channel__icon">
                                        <Icon size={22} aria-hidden="true" />
                                    </span>
                                    <span className="channel__text">
                                        <strong>{title}</strong>
                                        <span>{detail}</span>
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    )
}
