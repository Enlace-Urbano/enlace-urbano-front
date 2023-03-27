import React from 'react'
import { AdminMenuStyle } from './AdminMenuStyle'
import { Link } from 'react-router-dom'

type Props = {}

const AdminMenu = (props: Props) => {
  return (
    <AdminMenuStyle>
        <p>Menu</p>
        <Link to="/Team">Estadisticas</Link>
        <Link to="/Nosotros">Equipo</Link>
        <Link to="/About">Proyectos</Link>
    </AdminMenuStyle>
  )
}

export default AdminMenu