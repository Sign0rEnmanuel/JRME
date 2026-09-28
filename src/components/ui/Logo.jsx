import './Logo.css'

export default function Logo({ variant = 'light' }) {
    return (
        <a href="#inicio" className={`logo logo--${variant}`} aria-label="JR Materiais Elétricos - voltar ao início">
            <span className="logo__mark" aria-hidden="true">
                JR
                <svg className="logo__bolt" viewBox="0 0 12 18">
                    <path d="M8 0 1 10h4l-2 8 8-11H7l1-7z" />
                </svg>
            </span>
            <span className="logo__text">
                <strong>Materiais</strong>
                <span>Elétricos</span>
            </span>
        </a>
    )
}
