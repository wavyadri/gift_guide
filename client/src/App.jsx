import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import GiftItem from './routes/GiftItem';
import GiftUpdate from './routes/GiftUpdate';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='gifts/:id/' element={<GiftItem />} />
      <Route path='gifts/:id/update' element={<GiftUpdate />} />
    </Routes>
  );
};

export default App;
