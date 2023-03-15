import React from 'react'
import '../styles/App.css';
import Mininavbar from './Mninavbar/Mininavbar';
import Navbar from './Navbar/Navbar';
import Products from './Products/Products';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from './Product/Product';
import Signup from './Signup/Signup';
import Notfound from './Notfound';
const App = () => {


  return (
    <div id="main">
      <BrowserRouter>
        <Navbar />
        <Mininavbar />
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/' element={<Products />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
