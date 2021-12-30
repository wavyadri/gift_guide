import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import GiftItem from './routes/GiftItem';
import GiftUpdate from './routes/GiftUpdate';
import { GiftsContextProvider } from './context/GiftsContext';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <GiftsContextProvider>
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='gifts/:id/' element={<GiftItem />} />
            <Route path='gifts/:id/update' element={<GiftUpdate />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GiftsContextProvider>
  );
};

export default App;
