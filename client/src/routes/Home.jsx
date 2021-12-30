import React from 'react';
import Header from '../components/Header';
import AddGift from '../components/AddGift';
import GiftList from '../components/GiftsList';

const Home = () => {
  return (
    <>
      <Header />
      <AddGift />
      <GiftList />
    </>
  );
};

export default Home;
