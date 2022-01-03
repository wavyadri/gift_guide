import React, { useState, createContext } from 'react';

const GiftsContext = createContext();

const GiftsContextProvider = (props) => {
  const [gifts, setGifts] = useState([]);

  const addGift = (gift) => {
    setGifts([...gifts, gift]);
  };

  return (
    <GiftsContext.Provider value={{ gifts, setGifts, addGift }}>
      {props.children}
    </GiftsContext.Provider>
  );
};

export { GiftsContext, GiftsContextProvider };
