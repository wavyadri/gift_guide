import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GiftsContext } from '../context/GiftsContext';
import GiftFinder from '../apis/GiftFinder';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

const GitftItem = () => {
  const { id } = useParams();
  const { selectedGift, setSelectedGift } = useContext(GiftsContext);

  const fetchData = async () => {
    try {
      const response = await GiftFinder.get(`/${id}`);
      setSelectedGift(response.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className='text-center display-1 text-capitalize'>
        {selectedGift && selectedGift.gift.name}
      </h1>
      <div className='text-center'>
        <StarRating rating={4.2} />
      </div>
      <div className='mt-3'>
        <Reviews reviews={selectedGift.reviews} />
      </div>
      <AddReview />
    </>
  );
};

export default GitftItem;
