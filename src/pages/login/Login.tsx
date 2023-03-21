import { Button, Input, Title } from '../../elements'
import { LoginForm, LoginStyle } from '../login/LoginStyle'
import login from '../../assets/login.png'
import logoBlack from '../../assets/logoBlack.svg'
import React, { FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

type Props = {
  handleSubmit: FormEventHandler<HTMLFormElement>
}

const Login = (props: Props) => {
  const { handleSubmit } = props
  return (
    <>
      <LoginStyle>

        <LoginForm onSubmit={handleSubmit}>
          <div className="formContainer">
            <Title label={'Hola Enlace'} />
            <Input placeholder='Usuario' />
            <Input placeholder='Contraseña' />
            <Button label={'Iniciar sesión'} />
          </div>
        </LoginForm>

        <div className='illustration'>
          <img src={login} alt="" />
        </div>

        <footer>
          <img src={logoBlack} alt="" />
        </footer>

      </LoginStyle>
    </>
  )

}
export default Login

