import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GiftsContext } from '../context/GiftsContext';
import GiftFinder from '../apis/GiftFinder';
import StarRating from '../components/StarRating';

const GitftItem = () => {
  const { id } = useParams();
  const { selectedGift, setSelectedGift } = useContext(GiftsContext);

  const fetchData = async () => {
    try {
      const response = await GiftFinder.get(`/${id}`);
      setSelectedGift(response.data.data.gift);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>{selectedGift && selectedGift.name}</h1>
      <StarRating rating={4.9} />
    </>
  );
};

export default GitftItem;
