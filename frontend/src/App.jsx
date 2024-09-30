import { useState } from 'react'
import Navbar from './components/NavBar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar></Navbar>
    </>
  )
}

export default App
