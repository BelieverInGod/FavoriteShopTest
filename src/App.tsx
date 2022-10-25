import React, {useState} from 'react';
import './App.css';

import Header from './components/Header/Header'
import Products from './components/Products/Products'
import FavoriteBar from './components/FavoriteBar/FavoriteBar'
import Footer from './components/Footer/Footer'
import OneProduct from './components/OneProduct/OneProduct'
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
    const [id, setId] = useState(0)
    
    return (
    <div className="App">
      <Header />
      <div className='mainPage'>
        <FavoriteBar id={id} setId={setId} />
          <Routes>
              { id === 0 ?
                <Route path={'/'} element={<Products id={id} setId={setId} />} /> :
                <Route path={'/'} element={<OneProduct id={id} setId={setId} />} />
              }
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
