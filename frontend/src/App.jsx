import { useState } from 'react'
import Navbar from './components/NavBar.jsx'
import './App.css'
import './components/Navbar.css'
import Footer from "./components/Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Footer/>

    </>
  )
}

export default App
