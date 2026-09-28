import { Zap } from 'lucide-react'

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
    return (
        <header className={`section-header ${align === 'left' ? 'section-header--left' : ''}`.trim()}>
            <span className="eyebrow">
                <Zap size={14} fill="currentColor" aria-hidden="true" />
                {eyebrow}
            </span>
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </header>
    )
}
