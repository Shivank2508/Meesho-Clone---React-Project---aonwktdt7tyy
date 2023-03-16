import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/App.css';
import Mininavbar from './Mninavbar/Mininavbar';
import Navbar from './Navbar/Navbar';
import Products from './Products/Products';

import Product from './Product/Product';
import Signup from './Signup/Signup.js';
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
