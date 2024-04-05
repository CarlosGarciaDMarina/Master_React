import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
        <h1>Error 404</h1>
        <strong>Esta página no existe</strong>
        <Link to="/inicio">Volver al inicio</Link>
    </div>
  )
}
