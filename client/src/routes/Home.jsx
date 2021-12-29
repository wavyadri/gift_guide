import React from 'react';
import Header from '../components/Header';
import AddGift from '../components/AddGift';
import GiftList from '../components/GiftsList';

const Home = () => {
  return (
    <div className='container'>
      <Header />
      <AddGift />
      <GiftList />
    </div>
  );
};

export default Home;
