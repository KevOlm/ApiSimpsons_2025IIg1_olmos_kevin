import React from 'react'
import './error_404.css'

import BackgroundError from '../../assets/img/error_404.jpg'

const error_404 = () => {
  return (
    <main className='Error'>
        <div className="background_error">
            <img src={BackgroundError} alt="Background" />
        </div>
        <div className="error_title">
            <h1>¡Doh!</h1>
            <h6>Error 404. Not Found.</h6>
        </div>
    </main>
  )
}

export default error_404
