import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Products from './pages/Products';
import About from './pages/About';
import Teams from './pages/Teams';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import './App.css';
import './components/Navbar.css';
import './pages/Products.css';

function App() {
  return (
    
    <Router>

      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </div>

      <Footer />

    </Router>
  );
}

export default App;
