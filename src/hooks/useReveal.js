import { useEffect, useRef, useState } from 'react'

// Activa la animación de entrada una sola vez cuando el elemento aparece en pantalla.
export function useReveal(threshold = 0.15) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold, rootMargin: '0px 0px -40px 0px' },
        )

        observer.observe(element)
        return () => observer.disconnect()
    }, [threshold])

    return [ref, isVisible]
}
