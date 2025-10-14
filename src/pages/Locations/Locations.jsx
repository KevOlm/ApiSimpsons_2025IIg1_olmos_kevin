import React from 'react'
import './Locations.css'
import { useState, useEffect } from 'react'
import Background from '../../assets/img/loc_background.jpg'

import Card_location from '../../components/Card_location/Card_location'
import BasicPagination from '../../components/Pagination/Pagination'

const Locations = () => {
    const [locations, setLocations] = useState([])
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(1)

    useEffect(() => {
        fetch(`https://thesimpsonsapi.com/api/locations?page=${page}`)
            .then(response => response.json())
            .then(data => {
                setLocations(data.results || [])
                setPages(data.pages)
            })
            .catch(error => console.error('Error fetching locations:', error));
    }, [page])

    return (
        <div className='locations'>
            <img className='background' src={Background} alt="Background" />
            <main className='main_loc'>
                {locations.length > 0 ? (
                    locations.map(location => (
                        <Card_location key={location.id} location={location} />
                    ))
                ) : (
                    <p>No hay ubicaciones disponibles.</p>
                )}
            </main>
            <BasicPagination pages={pages} currentPage={page} onPageChange={setPage}/>
        </div>
    )
}

export default Locations