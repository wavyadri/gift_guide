import React, { useState, createContext } from 'react';

const GiftsContext = createContext();

const GiftsContextProvider = (props) => {
  const [gifts, setGifts] = useState([]);

  return (
    <GiftsContext.Provider value={{ gifts, setGifts }}>
      {props.children}
    </GiftsContext.Provider>
  );
};

export { GiftsContext, GiftsContextProvider };
