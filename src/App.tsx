import './App.css'
import { Routes, Route, useNavigate } from 'react-router'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
import { FormEventHandler, useState } from 'react'
import { authService } from './features/auth/services/auth.service'
import AdminMain from './pages/admin-mainmenu/AdminMain'
import Workers from './pages/admin-workersedit/Workers'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/main" element={<AdminMain />} />
      <Route path="/admin/workers" element={<Workers />} />
    </Routes>
  )
}

export default App
