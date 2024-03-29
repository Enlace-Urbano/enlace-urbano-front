import { Button, Input, Title } from '../../elements/index'
import { LoginForm, LoginStyle } from '../login/LoginStyle'
import login from '../../assets/images/login.png'
import logoBlack from '../../assets/svg/logoBlack.svg'
import { FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router'
import { authService } from '../../apiServices/authService'

interface LoginFormValues {
  username: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate()
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    const formValues: LoginFormValues = {
      username: (e.target as HTMLFormElement).username.value,
      password: (e.target as HTMLFormElement).password.value
    }

    try {
      const result = await authService.login(formValues)
      localStorage.setItem('token', result.data.access_token)

      setLoggedInUser(localStorage.getItem('token'))

      navigate('/admin/statistics', { replace: true })

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <LoginStyle>

        <LoginForm onSubmit={handleSubmit}>
          <div className="formContainer">
            <Title label={'Hola Enlace'} />
            <Input placeholder='Usuario' name='username' />
            <Input placeholder='Contraseña' type='password' name='password' />
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