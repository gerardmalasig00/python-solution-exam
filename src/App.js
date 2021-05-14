// Core Modules
import { useState, useRef, useLayoutEffect } from 'react'

// External modules
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Routes
import Home from './routes/Home'
import Approach from './routes/Approach'
import Contact from './routes/Contact'

// Parts
import Navbar from './components/parts/Navigation'
import Footer from './components/parts/Footer'

//Styles
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" >
        <Navbar />
        <Route
          path='/' exact component={Home}
        />
        <Route
          path='/approach' exact component={Approach}
        />
        <Route
          path='/contact' exact component={Contact}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
