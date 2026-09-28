import { useEffect, useState } from 'react'
import { getOpenStatus } from '../utils/schedule'

const REFRESH_MS = 60_000

export function useOpenStatus() {
    const [status, setStatus] = useState(getOpenStatus)

    useEffect(() => {
        const timer = setInterval(() => setStatus(getOpenStatus()), REFRESH_MS)
        return () => clearInterval(timer)
    }, [])

    return status
}
