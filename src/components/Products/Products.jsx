import { ArrowUpRight, Search } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'
import { WhatsAppIcon } from '../ui/BrandIcons'
import { categories } from '../../data/content'
import { whatsappLink } from '../../utils/whatsapp'
import './Products.css'

export default function Products() {
    return (
        <section id="produtos" className="section section--muted products">
            <div className="container">
                <Reveal>
                    <SectionHeader
                        eyebrow="Produtos"
                        title={
                            <>
                                Tudo o que sua instalação <span className="highlight">precisa</span>
                            </>
                        }
                        subtitle="Trabalhamos com uma linha completa de materiais elétricos para obras residenciais, comerciais e manutenção."
                    />
                </Reveal>

                <ul className="products__grid">
                    {categories.map(({ icon: Icon, title, description, tags }, index) => (
                        <Reveal as="li" key={title} delay={(index % 4) * 80}>
                            <a
                                href={whatsappLink(`Olá! Gostaria de um orçamento de ${title.toLowerCase()}.`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="product-card"
                                aria-label={`${title}: pedir orçamento pelo WhatsApp`}
                            >
                                <span className="product-card__icon">
                                    <Icon size={28} strokeWidth={1.75} aria-hidden="true" />
                                </span>
                                <h3 className="product-card__title">{title}</h3>
                                <p className="product-card__text">{description}</p>
                                <ul className="product-card__tags">
                                    {tags.map((tag) => (
                                        <li key={tag}>{tag}</li>
                                    ))}
                                </ul>
                                <span className="product-card__link">
                                    Pedir orçamento
                                    <ArrowUpRight size={16} aria-hidden="true" />
                                </span>
                            </a>
                        </Reveal>
                    ))}
                </ul>

                <Reveal className="products__banner">
                    <span className="products__banner-icon">
                        <Search size={24} aria-hidden="true" />
                    </span>
                    <div className="products__banner-text">
                        <strong>Não encontrou o que procura?</strong>
                        <span>Temos muito mais na loja. Envie sua lista e a gente confere para você.</span>
                    </div>
                    <a
                        href={whatsappLink('Olá! Estou procurando um produto e gostaria de saber se vocês têm.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--whatsapp"
                    >
                        <WhatsAppIcon size={18} />
                        Consultar produto
                    </a>
                </Reveal>
            </div>
        </section>
    )
}
