import React, {useState} from 'react';
import './App.css';

import Header from './components/Header/Header'
import Products from './components/Products/Products'
import FavoriteBar from './components/FavoriteBar/FavoriteBar'
import Footer from './components/Footer/Footer'
import OneProduct from './components/OneProduct/OneProduct'
import {Navigate, Route, Routes} from "react-router-dom";
import {useParams} from "react-router-dom";

function App() {
  
    return (
    <div className="App">
      <Header />
      <div className='mainPage'>
        <FavoriteBar />
          <Routes>
                <Route path={'/'} element={<Products />} /> :
                <Route path={':id'} element={<OneProduct />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
