import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import InstagramCard from './components/InstagramCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <InstagramCard />
  )
}

export default App
