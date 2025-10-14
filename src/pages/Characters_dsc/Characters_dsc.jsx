import React from 'react'
import './Characters_dsc.css'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Background from '../../assets/img/char_background.jpg'
import { colors } from '@mui/material'

const Characters_dsc = () => {
    const location = useLocation();
    const { character } = location.state || {};

    return (
        <div className='characters_dsc'>
            <img className='background' src={Background} alt="Background" />
            <main className='main_char'>
                <div className="char_img">
                  <div className="char_img2">
                    <img src={character? `https://cdn.thesimpsonsapi.com/1280${character.portrait_path}` : noImage} alt={character? character.name: "No Image"} />
                  </div>
                </div>
                <div className="info">
                  <h1>{character ? character.name : 'Unknown'}</h1>
                  <p className='occupation'>Ocupación: {character ? character.occupation : 'Unknown'}</p>
                  <p className='agebirth'>Fecha de Nacimiento: {character ? character.birthdate : 'Unknown'}</p>
                  <p style={{color: character? character.status === 'Alive'? 'green' : 'red' : 'black'}}>Estado: {character ? character.status : 'Unknown'}</p>
                  <p className='phrase'>Frase: "{character ? character.phrases[0] : 'Unknown'}"</p>
                </div>
            </main>
        </div>
    )
}

export default Characters_dsc