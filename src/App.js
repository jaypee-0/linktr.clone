import React from 'react'
import Contact from './pages/Contact';
import Home from './pages/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App