import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import Footer from "./components/Footer.jsx";
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import Teams from './pages/Teams.jsx';
import Home from './pages/Home.jsx';
import APITest from './pages/APITest.jsx';
import './App.css'
import './components/Navbar.css'
import './components/ProductsCarousel.css';
import './pages/Products.css';
import Events from './pages/Events.jsx'
import EventDetails from './components/EventDetails.jsx';


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
      <Route path='/event_details' element = {<EventDetails></EventDetails>}/>
      

       {/*Delete after testing*/}
      <Route path='/apitest' element = {<APITest></APITest>}/>

      {/*Add more routes here if needed*/}
      </Routes>

      {/* <Footer /> */}
      <Footer/>
    </Router>
    
  );
}

export default App
