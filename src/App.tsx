import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/admin/login" element={<Login />} />
    </Routes>
  )
}

export default App
