import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Info from './Components/Info';
import Aunt from './Components/Aunt';
import Offer from './Components/Offer';
import Carousel from './Components/Carousel';
import Testaments from './Components/Testaments';
import Choose from './Components/Choose';
import Framework from './Components/Framework';
import Footer from './Components/Footer';
import Tipcalculator from './Components/Tipcalculator';
import { BrowserRouter, Routes, Route } from "react-router-dom"

let App = () => {


  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Home />
        <Info />
        <Aunt />
        <Offer />
        <Carousel />
        <Testaments />
        <Choose />
        <Framework />
        <Footer />
        <Routes>
          <Route path='/TipCalculator' element={<Tipcalculator />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
