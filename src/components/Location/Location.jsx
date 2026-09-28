import { Accessibility, Clock, CreditCard, MapPin, Navigation, Phone, Store } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'
import { WhatsAppIcon } from '../ui/BrandIcons'
import { business, fullAddress } from '../../data/business'
import { useOpenStatus } from '../../hooks/useOpenStatus'
import { formatSlot } from '../../utils/schedule'
import { whatsappLink } from '../../utils/whatsapp'
import './Location.css'

export default function Location() {
    const status = useOpenStatus()

    return (
        <section id="contato" className="section location">
            <div className="container">
                <Reveal>
                    <SectionHeader
                        eyebrow="Localização e contato"
                        title={
                            <>
                                Venha nos <span className="highlight">visitar</span>
                            </>
                        }
                        subtitle="Estamos na Av. Juscelino Kubitschek, no Centro de Matinhos. Passe na loja ou fale com a gente."
                    />
                </Reveal>

                <div className="location__grid">
                    <Reveal className="location__map">
                        <iframe
                            src={business.maps.embedUrl}
                            title="Mapa com a localização da JR Materiais Elétricos em Matinhos - PR"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </Reveal>

                    <Reveal className="location__card" delay={120}>
                        <div className={`location__status ${status.isOpen ? 'is-open' : ''}`}>
                            <span className="location__status-dot" aria-hidden="true" />
                            {status.label}
                        </div>

                        <ul className="location__info">
                            <li>
                                <MapPin size={20} aria-hidden="true" />
                                <div>
                                    <strong>Endereço</strong>
                                    <address>{fullAddress}</address>
                                </div>
                            </li>
                            <li>
                                <Phone size={20} aria-hidden="true" />
                                <div>
                                    <strong>Telefone / WhatsApp</strong>
                                    <a href={business.phoneHref}>{business.phoneDisplay}</a>
                                </div>
                            </li>
                            <li>
                                <Clock size={20} aria-hidden="true" />
                                <div className="location__hours">
                                    <strong>Horário de funcionamento</strong>
                                    <table>
                                        <tbody>
                                            {business.hours.map((entry) => (
                                                <tr key={entry.day} className={entry.day === status.today ? 'is-today' : ''}>
                                                    <th scope="row">{entry.label}</th>
                                                    <td>
                                                        {entry.slots.length > 0
                                                            ? entry.slots.map((slot) => (
                                                                <span key={slot[0]} className="location__slot">
                                                                    {formatSlot(slot)}
                                                                </span>
                                                            ))
                                                            : 'Fechado'}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>

                        <ul className="location__chips">
                            <li>
                                <Store size={16} aria-hidden="true" />
                                Compras na loja
                            </li>
                            <li>
                                <CreditCard size={16} aria-hidden="true" />
                                Crédito, débito e NFC
                            </li>
                            <li>
                                <Accessibility size={16} aria-hidden="true" />
                                Entrada acessível
                            </li>
                        </ul>

                        <div className="location__actions">
                            <a
                                href={business.maps.directionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--primary"
                            >
                                <Navigation size={18} aria-hidden="true" />
                                Como chegar
                            </a>
                            <a
                                href={whatsappLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--outline"
                            >
                                <WhatsAppIcon size={18} />
                                WhatsApp
                            </a>
                        </div>
                    </Reveal>
                </div>

                <Reveal className="location__stores">
                    <h3>Nossas lojas no litoral</h3>
                    <ul>
                        {business.stores.map((store) => (
                            <li key={store.name}>
                                <span>{store.name}</span>
                                {store.place}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    )
}
