import React from 'react'
import { Link } from 'react-router-dom'
import { AdminMenuStyle } from './AdminMenuStyle'

type Props = {}

const AdminMenu = (props: Props) => {
  return (
    <AdminMenuStyle>
        <h3>Menu</h3>
        <Link style={{ textDecoration: 'none' , color: 'var(--color-black)' }} to="/admin/stadistics">  <p>Estadisticas</p> </Link>
        <Link style={{ textDecoration: 'none' , color: 'var(--color-black)' }} to="/admin/workers"><p>Equipo</p> </Link>
        <Link style={{ textDecoration: 'none' , color: 'var(--color-black)'}} to="/admin/projects"><p>Proyectos</p> </Link>
    </AdminMenuStyle>
  )
}

export default AdminMenu