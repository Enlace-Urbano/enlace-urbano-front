import Footer from '../../components/Footer/Footer'
import Form from '../../components/form/Form'
import { Button, Input, Title } from '../../elements'
import { LoginForm, LoginStyle } from '../login/LoginStyle'
import login from '../../assets/login.png'
import logoBlack from '../../assets/logoBlack.svg'


const Login = () =>  {

    return (
    <>
      <LoginStyle>
        <LoginForm>
            <div className="formContainer">
            <Title label={'Hola Enlace'}/>    
        <Input placeholder='Usuario'/>
        <Input placeholder='Contraseña'  type='password' />
        <Button label={'Iniciar sesión'}/>
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

