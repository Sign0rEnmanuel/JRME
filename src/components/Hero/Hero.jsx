import { ArrowRight, BadgeCheck, MapPin, Star, Truck, Zap } from 'lucide-react'
import { WhatsAppIcon } from '../ui/BrandIcons'
import { business } from '../../data/business'
import { images } from '../../data/content'
import { useOpenStatus } from '../../hooks/useOpenStatus'
import { whatsappLink } from '../../utils/whatsapp'
import './Hero.css'

export default function Hero() {
    const status = useOpenStatus()

    return (
        <section id="inicio" className="hero">
            <div className="hero__backdrop" aria-hidden="true">
                <div className="hero__grid" />
                <div className="hero__glow hero__glow--gold" />
                <div className="hero__glow hero__glow--blue" />
                <svg className="hero__circuit" viewBox="0 0 1200 600" preserveAspectRatio="none">
                    <path d="M0 470 H260 L300 430 H520 L560 470 H760 L800 400 H1200" />
                    <path d="M0 140 H180 L220 180 H430 L470 140 H1200" />
                </svg>
            </div>

            <div className="container hero__inner">
                <div className="hero__content">
                    <span className="hero__badge">
                        <MapPin size={15} aria-hidden="true" />
                        Matinhos · Litoral do Paraná
                    </span>

                    <h1 className="hero__title">
                        Tudo de <span className="hero__title-accent">elétrica</span> para a sua obra
                    </h1>

                    <p className="hero__subtitle">
                        Fios, disjuntores, iluminação LED, tomadas e muito mais. Do alto padrão à linha econômica,
                        com atendimento técnico de quem entende e entrega em Matinhos e região.
                    </p>

                    <div className="hero__actions">
                        <a
                            href={whatsappLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--primary btn--lg"
                        >
                            <WhatsAppIcon size={20} />
                            Solicitar orçamento
                        </a>
                        <a href="#produtos" className="btn btn--ghost btn--lg">
                            Ver produtos
                            <ArrowRight size={18} aria-hidden="true" />
                        </a>
                    </div>

                    <ul className="hero__trust">
                        <li>
                            <span className="hero__stars" aria-hidden="true">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <Star key={index} size={14} fill="currentColor" />
                                ))}
                            </span>
                            <span>
                                <strong>{business.rating.score}</strong> no Google
                            </span>
                        </li>
                        <li>
                            <Truck size={18} aria-hidden="true" />
                            <span>Entrega em domicílio</span>
                        </li>
                        <li>
                            <BadgeCheck size={18} aria-hidden="true" />
                            <span>Marcas de confiança</span>
                        </li>
                    </ul>
                </div>

                <div className="hero__visual">
                    <div className="hero__photo">
                        <img
                            src={images.storefrontSide}
                            alt="Fachada da loja JR Materiais Elétricos em Matinhos"
                            width="483"
                            height="362"
                            fetchPriority="high"
                        />
                    </div>

                    <div className={`hero__floating hero__floating--status ${status.isOpen ? 'is-open' : ''}`}>
                        <span className="hero__status-dot" aria-hidden="true" />
                        {status.label}
                    </div>

                    <div className="hero__floating hero__floating--power">
                        <span className="hero__power-icon">
                            <Zap size={20} fill="currentColor" aria-hidden="true" />
                        </span>
                        <span>
                            <strong>Linha completa</strong>
                            do básico ao alto padrão
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
