import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import About from './pages/about/About'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About />} />
    </Routes>
  )
}

export default App
