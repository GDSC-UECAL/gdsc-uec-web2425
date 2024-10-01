import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar.jsx'
import Footer from "./components/Footer.jsx"
import Products from './pages/Products.jsx';
import './App.css'
import './components/Navbar.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Navbar/>
    
    <Routes>
      {/*Define a route for the Products components*/}
      <Route path='/products' element = {<Products></Products>}/>
      {/*Add more routes here if needed*/}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App
