import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GiftFinder from '../apis/GiftFinder';

const UpdateGift = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [vendor, setVendor] = useState('');
  const [priceRange, setPriceRange] = useState(1);

  const fetchData = async () => {
    try {
      const response = await GiftFinder.get(`/${id}`);
      setName(response.data.data.gift.name);
      setVendor(response.data.data.gift.vendor);
      setPriceRange(response.data.data.gift.price_range);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedGifts = await GiftFinder.put(`/${id}`, {
        name,
        vendor,
        price_range: priceRange,
      });
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <form action=''>
        <div className='form-group mb-3'>
          <label htmlFor='name'>Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type='text'
            id='name'
            className='form-control'
          />
        </div>
        <div className='form-group mb-3'>
          <label htmlFor='vendor'>Vendor</label>
          <input
            onChange={(e) => setVendor(e.target.value)}
            value={vendor}
            type='text'
            id='vendor'
            className='form-control'
          />
        </div>
        <div className='form-group mb-3'>
          <label htmlFor='price_range'>Price Range</label>
          <input
            onChange={(e) => setPriceRange(e.target.value)}
            value={priceRange}
            type='number'
            min='1'
            max='5'
            id='price_range'
            className='form-control'
          />
        </div>
        <button className='btn btn-primary' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default UpdateGift;
