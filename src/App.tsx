import React, {useState} from 'react';
import './App.css';

import Header from './components/Header/Header'
import Products from './components/Products/Products'
import FavoriteBar from './components/FavoriteBar/FavoriteBar'
import Footer from './components/Footer/Footer'
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
    const [page, setPage] = useState(12)

    return (
    <div className="App">
      <Header />
      <div className='mainPage'>
        <FavoriteBar page={page} setPage={setPage} />
          <Routes>
              {/* <Route path="/" element={<Navigate to="/сategory/1/Post" />}/> */}
              <Route path={'/'} element={<Products page={page} setPage={setPage} />} />
              {/* <Route path={'/сategory/:id/Post'} element={<Products page={page} setPage={setPage} />} /> */}
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
