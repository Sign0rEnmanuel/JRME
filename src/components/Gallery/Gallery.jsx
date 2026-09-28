import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'
import { gallery } from '../../data/content'
import './Gallery.css'

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(null)
    const dialogRef = useRef(null)

    useEffect(() => {
        const dialog = dialogRef.current
        if (activeIndex !== null && !dialog.open) dialog.showModal()
        if (activeIndex === null && dialog.open) dialog.close()
    }, [activeIndex])

    const showPrevious = () => setActiveIndex((index) => (index - 1 + gallery.length) % gallery.length)
    const showNext = () => setActiveIndex((index) => (index + 1) % gallery.length)

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') showPrevious()
        if (event.key === 'ArrowRight') showNext()
    }

    // Cierra al hacer clic fuera de la imagen (en el fondo del diálogo).
    const handleBackdropClick = (event) => {
        if (event.target === dialogRef.current) setActiveIndex(null)
    }

    const activeImage = activeIndex !== null ? gallery[activeIndex] : null

    return (
        <section id="loja" className="section gallery">
            <div className="container">
                <Reveal>
                    <SectionHeader
                        eyebrow="Conheça a loja"
                        title={
                            <>
                                Um espaço pensado para <span className="highlight">você</span>
                            </>
                        }
                        subtitle="Loja ampla, organizada e com showroom de iluminação. Venha ver de perto as novidades."
                    />
                </Reveal>

                <ul className="gallery__grid">
                    {gallery.map((image, index) => (
                        <Reveal as="li" key={image.src} className="gallery__item" delay={(index % 4) * 70}>
                            <button
                                type="button"
                                className="gallery__button"
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Ampliar foto: ${image.alt}`}
                            >
                                <img src={image.src} alt={image.alt} loading="lazy" />
                                <span className="gallery__zoom" aria-hidden="true">
                                    <Expand size={20} />
                                </span>
                            </button>
                        </Reveal>
                    ))}
                </ul>
            </div>

            <dialog
                ref={dialogRef}
                className="lightbox"
                aria-label="Galeria de fotos da loja"
                onClose={() => setActiveIndex(null)}
                onKeyDown={handleKeyDown}
                onClick={handleBackdropClick}
            >
                {activeImage && (
                    <figure className="lightbox__figure">
                        <img src={activeImage.src} alt={activeImage.alt} />
                        <figcaption>
                            {activeImage.alt}
                            <span>
                                {activeIndex + 1} / {gallery.length}
                            </span>
                        </figcaption>
                    </figure>
                )}

                <button type="button" className="lightbox__close" onClick={() => setActiveIndex(null)} aria-label="Fechar">
                    <X size={24} />
                </button>
                <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={showPrevious} aria-label="Foto anterior">
                    <ChevronLeft size={28} />
                </button>
                <button type="button" className="lightbox__nav lightbox__nav--next" onClick={showNext} aria-label="Próxima foto">
                    <ChevronRight size={28} />
                </button>
            </dialog>
        </section>
    )
}
