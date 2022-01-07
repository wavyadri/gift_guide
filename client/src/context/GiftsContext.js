import React, { useState, createContext } from 'react';

const GiftsContext = createContext();

const GiftsContextProvider = (props) => {
  const [gifts, setGifts] = useState([]);
  const [selectedGift, setSelectedGift] = useState(null);

  const addGift = (gift) => {
    setGifts([...gifts, gift]);
  };

  const deleteGift = (giftId) => {
    const updatedGifts = gifts.filter((gift) => {
      return gift.id !== giftId;
    });
    setGifts(updatedGifts);
  };

  return (
    <GiftsContext.Provider
      value={{
        gifts,
        setGifts,
        addGift,
        deleteGift,
        selectedGift,
        setSelectedGift,
      }}
    >
      {props.children}
    </GiftsContext.Provider>
  );
};

export { GiftsContext, GiftsContextProvider };
