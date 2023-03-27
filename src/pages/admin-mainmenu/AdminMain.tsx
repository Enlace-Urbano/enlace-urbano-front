import React from 'react'
import { AdminMenu } from '../../components'
import { AdminMainStyle } from './AdminMainStyle'
import logoBlack from '../../assets/logoBlack.svg'

type Props = {}

const AdminMain = (props: Props) => {
  return (
    <AdminMainStyle>
        <AdminMenu/>
        <p>Selecciona los parametros a modificar desde el menú de la izquierda</p>
        <footer>
          <img src={logoBlack} alt="" />
        </footer>
    </AdminMainStyle>
    
  )
}

export default AdminMain