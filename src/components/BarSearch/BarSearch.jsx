import React, { useEffect, useRef } from 'react'
import './BarSearch.css'

const BarSearch = ({ containerSelector = '.main_char' }) => {
    const inputRef = useRef(null)

    useEffect(() => {
        const container = document.querySelector(containerSelector)
        const input = inputRef.current

        if (!container || !input) return

        const applyFilter = () => {
            const q = input.value.trim().toLowerCase()
            Array.from(container.children).forEach(child => {
                const name = child.getAttribute('data-name') || ''
                child.style.display = q === '' || name.includes(q) ? '' : 'none'
            })
        }

        input.addEventListener('input', applyFilter)

        const observer = new MutationObserver(applyFilter)
        observer.observe(container, { childList: true, subtree: true })

        return () => {
            input.removeEventListener('input', applyFilter)
            observer.disconnect()
        }
    }, [containerSelector])

    return (
        <input
            ref={inputRef}
            type="search"
            placeholder="Buscar personaje..."
            className="search_characters"
            autoComplete="off"
        />
    )
}

export default BarSearch
