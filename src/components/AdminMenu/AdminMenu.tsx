import React from 'react'
import { AdminMenuStyle } from './AdminMenuStyle'

type Props = {}

const adminMenu = (props: Props) => {
  return (
    <AdminMenuStyle>
        <p>Menu</p>
        <Link to="/Team">Estadisticas</Link>
        <Link to="/Nosotros">Equipo</Link>
        <Link to="/About">Proyectos</Link>
    </AdminMenuStyle>
  )
}

export default adminMenu