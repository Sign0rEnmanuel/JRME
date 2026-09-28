import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'
import { WhatsAppIcon } from '../ui/BrandIcons'
import { navLinks } from '../../data/content'
import { business } from '../../data/business'
import { useScrolled } from '../../hooks/useScrolled'
import { useActiveSection } from '../../hooks/useActiveSection'
import { whatsappLink } from '../../utils/whatsapp'
import './Header.css'

const sectionIds = navLinks.map((link) => link.id)

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const isScrolled = useScrolled()
    const activeId = useActiveSection(sectionIds)

    const closeMenu = () => setIsOpen(false)

    useEffect(() => {
        document.body.classList.toggle('is-locked', isOpen)

        const onKeyDown = (event) => {
            if (event.key === 'Escape') setIsOpen(false)
        }
        const onResize = () => {
            if (window.innerWidth >= 1024) setIsOpen(false)
        }

        window.addEventListener('keydown', onKeyDown)
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('keydown', onKeyDown)
            window.removeEventListener('resize', onResize)
        }
    }, [isOpen])

    return (
        <header className={`header ${isScrolled || isOpen ? 'header--solid' : ''}`}>
            <div className="container header__inner">
                <Logo />

                <nav
                    id="main-nav"
                    className={`header__nav ${isOpen ? 'is-open' : ''}`}
                    aria-label="Navegação principal"
                >
                    <ul className="header__links">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className={`header__link ${activeId === link.id ? 'is-active' : ''}`}
                                    aria-current={activeId === link.id ? 'true' : undefined}
                                    onClick={closeMenu}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="header__mobile-footer">
                        <a href={business.phoneHref} className="header__mobile-phone">
                            {business.phoneDisplay}
                        </a>
                        <a
                            href={whatsappLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--whatsapp"
                            onClick={closeMenu}
                        >
                            <WhatsAppIcon size={20} />
                            Falar no WhatsApp
                        </a>
                    </div>
                </nav>

                <div className="header__actions">
                    <a
                        href={whatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--whatsapp header__cta"
                    >
                        <WhatsAppIcon size={18} />
                        WhatsApp
                    </a>

                    <button
                        type="button"
                        className="header__toggle"
                        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={isOpen}
                        aria-controls="main-nav"
                        onClick={() => setIsOpen((open) => !open)}
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>
        </header>
    )
}
