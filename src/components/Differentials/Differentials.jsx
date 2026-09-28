import { Star } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'
import { business } from '../../data/business'
import { differentials } from '../../data/content'
import './Differentials.css'

export default function Differentials() {
    return (
        <section id="diferenciais" className="section section--dark differentials">
            <div className="differentials__glow" aria-hidden="true" />

            <div className="container">
                <Reveal>
                    <SectionHeader
                        eyebrow="Por que escolher a JR"
                        title={
                            <>
                                Qualidade que gera <span className="highlight">confiança</span>
                            </>
                        }
                        subtitle="Mais do que vender material elétrico, ajudamos você a fazer uma instalação segura, bonita e que dura."
                    />
                </Reveal>

                <ul className="differentials__grid">
                    {differentials.map(({ icon: Icon, title, description }, index) => (
                        <Reveal as="li" key={title} delay={(index % 3) * 100}>
                            <article className="differential">
                                <span className="differential__icon">
                                    <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
                                </span>
                                <div>
                                    <h3 className="differential__title">{title}</h3>
                                    <p className="differential__text">{description}</p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </ul>

                <Reveal className="differentials__rating">
                    <div className="differentials__rating-score">
                        <strong>{business.rating.score}</strong>
                        <span className="differentials__stars" aria-label={`Nota ${business.rating.score} de 5`}>
                            {Array.from({ length: 5 }, (_, index) => (
                                <Star key={index} size={18} fill="currentColor" aria-hidden="true" />
                            ))}
                        </span>
                    </div>
                    <p>
                        Avaliação média dos nossos clientes no <strong>Google</strong>, com base em{' '}
                        {business.rating.count} avaliações. Obrigado pela confiança!
                    </p>
                </Reveal>
            </div>
        </section>
    )
}
