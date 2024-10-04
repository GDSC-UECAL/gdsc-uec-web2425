import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import Footer from "./components/Footer.jsx";
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import Teams from './pages/Teams.jsx';
import Home from './pages/Home.jsx';
import './App.css'
import './components/Navbar.css'
import './components/ProductsCarousel.css';
import './pages/Products.css';
import Events from './pages/Events.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Navbar/>
    
    <Routes>
      {/*Define a route for the Products components*/}
      <Route path='/products' element = {<Products></Products>}/>
      <Route path='/about' element = {<About></About>}/>
      <Route path='/events' element = {<Events></Events>}/>
      <Route path='/teams' element = {<Teams></Teams>}/>
      <Route path='/home' element = {<Home></Home>}/>
      {/*Add more routes here if needed*/}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App
