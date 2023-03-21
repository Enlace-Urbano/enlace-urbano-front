import './App.css'
import { Routes, Route, useNavigate } from 'react-router'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
import { FormEventHandler, useState } from 'react'
import { authService } from './features/auth/services/auth.service'

function App() {

  const navigate = useNavigate()
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    try {
      const result = await authService.login({
        username: 'ChanChan',
        password: 'gato'
      })
      localStorage.setItem('token', result.data.access_token)

      setLoggedInUser(localStorage.getItem('token'))

      navigate('/', { replace: true })

    } catch (error) {
      console.log(error)
    }

  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/admin/login" element={<Login handleSubmit={handleSubmit} />} />
    </Routes>
  )
}

export default App
