import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Logo from '../ui/Logo'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '../ui/BrandIcons'
import { business, fullAddress } from '../../data/business'
import { categories, navLinks } from '../../data/content'
import { groupHours } from '../../utils/schedule'
import { whatsappLink } from '../../utils/whatsapp'
import './Footer.css'

const socialLinks = [
    { label: 'Instagram', href: business.social.instagram, icon: InstagramIcon },
    { label: 'Facebook', href: business.social.facebook, icon: FacebookIcon },
    { label: 'WhatsApp', href: whatsappLink(), icon: WhatsAppIcon },
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container footer__grid">
                <div className="footer__brand">
                    <Logo />
                    <p>
                        Tudo de elétrica para a sua obra, do alto padrão à linha econômica. Atendimento técnico e
                        próximo em Matinhos e no litoral do Paraná.
                    </p>
                    <ul className="footer__social">
                        {socialLinks.map(({ label, href, icon: Icon }) => (
                            <li key={label}>
                                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                    <Icon size={18} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <nav className="footer__column" aria-label="Links do rodapé">
                    <h3>Navegação</h3>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="footer__column">
                    <h3>Produtos</h3>
                    <ul>
                        {categories.map((category) => (
                            <li key={category.title}>
                                <a href="#produtos">{category.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer__column footer__contact">
                    <h3>Contato</h3>
                    <ul>
                        <li>
                            <MapPin size={18} aria-hidden="true" />
                            <address>{fullAddress}</address>
                        </li>
                        <li>
                            <Phone size={18} aria-hidden="true" />
                            <a href={business.phoneHref}>{business.phoneDisplay}</a>
                        </li>
                        {business.email && (
                            <li>
                                <Mail size={18} aria-hidden="true" />
                                <a href={`mailto:${business.email}`}>{business.email}</a>
                            </li>
                        )}
                        <li>
                            <Clock size={18} aria-hidden="true" />
                            <ul className="footer__hours">
                                {groupHours().map((group) => (
                                    <li key={group.days}>
                                        <strong>{group.days}</strong>
                                        {group.text}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container footer__bottom-inner">
                    <p>
                        © {year} {business.name}. Todos os direitos reservados.
                    </p>
                    {business.cnpj && <p>CNPJ: {business.cnpj}</p>}
                </div>
            </div>
        </footer>
    )
}
