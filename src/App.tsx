import './App.css'
import { Routes, Route } from 'react-router'
import Login from './pages/login/Login'
import {Home, About, Projects, Everyday, Services, Contact } from './pages/index'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/proyectos" element={<Projects />} />
      <Route path="/nuestrodia" element={<Everyday />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/contactanos" element={<Contact />} />
      <Route path="/admin/login" element={<Login />} />
    </Routes>
  )
}

export default App
