import { Button, Input, Title } from '../../elements'
import { LoginForm, LoginStyle } from '../login/LoginStyle'
import login from '../../assets/login.png'
import logoBlack from '../../assets/logoBlack.svg'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'


type LoginProps = {
    setIsLoggedIn: (isLoggedIn: boolean) => void;
  };
  
  type FormState = {
    username: string;
    password: string;
  };
  
  const Login = ({ setIsLoggedIn }: LoginProps) => {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const form: FormState = {
        username: formData.get('username') as string,
        password: formData.get('password') as string,
      };
      try {
        const { data } = await axios.post(
          'http://localhost:3000/api/v1/auth/login',
          form
        );
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        navigate('/');
      } catch (error) {
        // if (error.response) {
        //   setErrorMessage(error.response.data.message);
        // } else {
        //   setErrorMessage('An error occurred');
        // }
      }
    };

    return (
    <>
      <LoginStyle>
        <LoginForm onSubmit={handleSubmit}>
            <div className="formContainer">
            <Title label={'Hola Enlace'}/>    
        <Input placeholder='Usuario' defaultValue={username} onChange={(e)=> setUsername(e.target.value)}/>
        <Input placeholder='Contraseña' defaultValue={password} onChange={(e)=> setPassword(e.target.value)} type={'password'}/>
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

