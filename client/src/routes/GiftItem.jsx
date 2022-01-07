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
      {selectedGift && (
        <>
          <h1 className='text-center display-1 text-capitalize'>
            {selectedGift.gift.name}
          </h1>
          <div className='text-center text-warning'>
            <StarRating rating={selectedGift.gift.average_rating} />
            <span className='text-warning mx-1'>
              {selectedGift.gift.count
                ? `(${selectedGift.gift.count}) `
                : '(0)'}
            </span>
          </div>
          <div className='mt-3'>
            {<Reviews reviews={selectedGift.reviews} />}
          </div>
          <AddReview />
        </>
      )}
    </>
  );
};

export default GitftItem;
