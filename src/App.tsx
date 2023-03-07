import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
      
      <Route path="/" element={<Home/>}/>
    
      </Routes>

    </div>
  )
}

export default App
