import { CircleCheck } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'
import { business } from '../../data/business'
import { images } from '../../data/content'
import './About.css'

const highlights = [
    'Materiais de marcas reconhecidas no mercado',
    'Orientação técnica para escolher o produto certo',
    'Atendimento a eletricistas, construtoras e clientes finais',
    'Entrega em domicílio e retirada na loja',
]

const stats = [
    { value: `${business.rating.score}★`, label: 'Avaliação no Google' },
    { value: business.stores.length, label: 'Lojas no litoral' },
    { value: 'Seg–Sáb', label: 'Atendimento na loja' },
]

export default function About() {
    return (
        <section id="sobre" className="section about">
            <div className="container about__inner">
                <Reveal className="about__media">
                    <img
                        className="about__image about__image--main"
                        src={images.storefront}
                        alt="Fachada da JR Materiais Elétricos com produtos expostos na entrada"
                        width="583"
                        height="298"
                        loading="lazy"
                    />
                    <img
                        className="about__image about__image--secondary"
                        src={images.storeEntrance}
                        alt="Interior amplo e organizado da loja"
                        width="483"
                        height="362"
                        loading="lazy"
                    />
                    <div className="about__experience">
                        <strong>Loja física</strong>
                        <span>no Centro de Matinhos</span>
                    </div>
                </Reveal>

                <Reveal className="about__content" delay={120}>
                    <SectionHeader
                        align="left"
                        eyebrow="Sobre nós"
                        title={
                            <>
                                Energia e confiança para <span className="highlight">cada projeto</span>
                            </>
                        }
                    />

                    {/* TODO: ajustar el texto con la historia real (año de fundación, fundadores, etc.). */}
                    <p className="about__text">
                        A <strong>JR Materiais Elétricos</strong> nasceu para facilitar a vida de quem constrói,
                        reforma ou faz manutenção no litoral do Paraná. Reunimos em um só lugar tudo de elétrica para
                        a sua obra, da linha de alto padrão às opções mais econômicas.
                    </p>
                    <p className="about__text">
                        Somos um comércio local, com atendimento próximo e técnico: ouvimos o que você precisa e
                        indicamos o material certo, com segurança e o melhor custo-benefício.
                    </p>

                    <ul className="about__list">
                        {highlights.map((item) => (
                            <li key={item}>
                                <CircleCheck size={20} aria-hidden="true" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <dl className="about__stats">
                        {stats.map((stat) => (
                            <div key={stat.label} className="about__stat">
                                <dt>{stat.label}</dt>
                                <dd>{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </Reveal>
            </div>
        </section>
    )
}
