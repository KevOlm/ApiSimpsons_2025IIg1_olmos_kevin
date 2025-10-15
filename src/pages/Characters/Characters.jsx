import React from 'react'
import './Characters.css'
import { useState, useEffect } from 'react'
import Background from '../../assets/img/char_background.jpg'

import Card_character from '../../components/Card_character/Card_character'
import BasicPagination from '../../components/Pagination/Pagination'
import BarSearch from '../../components/BarSearch/BarSearch'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(1)

    useEffect(() => {
        fetch(`https://thesimpsonsapi.com/api/characters?page=${page}`)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results || [])
                setPages(data.pages)
            })
            .catch(error => console.error('Error fetching characters:', error));
    }, [page])

    return (
        <div className='characters'>
            <img className='background' src={Background} alt="Background" />
            <BarSearch />
            <main className='main_char'>
                {characters.length > 0 ? (
                    characters.map(character => (
                        <Card_character key={character.id} character={character} />
                    ))
                ) : (
                    <p>No hay personajes disponibles.</p>
                )}
            </main>
            <BasicPagination pages={pages} currentPage={page} onPageChange={setPage}/>
        </div>
    )
}

export default Characters