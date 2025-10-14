import React from 'react'
import './Episodes.css'
import { useState, useEffect } from 'react'
import Background from '../../assets/img/epi_background.jpg'

import Card_Episode from '../../components/Card_episode/Card_episode'
import BasicPagination from '../../components/Pagination/Pagination'

const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(1)

    useEffect(() => {
        fetch(`https://thesimpsonsapi.com/api/episodes?page=${page}`)
            .then(response => response.json())
            .then(data => {
                setEpisodes(data.results || [])
                setPages(data.pages)
            })
            .catch(error => console.error('Error fetching episodes:', error));
    }, [page])

    return (
        <div className='episodes'>
            <img className='background' src={Background} alt="Background" />
            <main className='main_epi'>
                {episodes.length > 0 ? (
                    episodes.map(episode => (
                        <Card_Episode key={episode.id} episode={episode} />
                    ))
                ) : (
                    <p>No hay episodios disponibles.</p>
                )}
            </main>
            <BasicPagination pages={pages} currentPage={page} onPageChange={setPage}/>
        </div>
    )
}

export default Episodes