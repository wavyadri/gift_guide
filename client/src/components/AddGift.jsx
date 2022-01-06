import React, { useContext, useState } from 'react';
import GiftFinder from '../apis/GiftFinder';
import { GiftsContext } from '../context/GiftsContext';

const AddGift = () => {
  const { addGift } = useContext(GiftsContext);
  const [name, setName] = useState('');
  const [vendor, setVendor] = useState('');
  const [priceRange, setPriceRange] = useState('price range');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await GiftFinder.post('/', {
        name,
        vendor,
        price_range: priceRange,
      });
      addGift(response.data.data.gift);
    } catch (err) {
      console.log(err.message);
    } finally {
      setName('');
      setVendor('');
      setPriceRange('price range');
    }
  };

  return (
    <div className='mb-4'>
      <form action=''>
        <div className='form-row row'>
          <div className='col'>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              className='form-control'
              placeholder='name'
              required
            />
          </div>
          <div className='col'>
            <input
              value={vendor}
              onChange={(e) => setVendor(e.target.value)}
              type='text'
              className='form-control'
              placeholder='vendor'
              required
            />
          </div>
          <div className='col'>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className='custom-select mr-sm-2 form-select'
              required
            >
              <option value='price range' disabled>
                Price Range
              </option>
              <option value='1'>$</option>
              <option value='2'>$$</option>
              <option value='3'>$$$</option>
              <option value='4'>$$$$</option>
              <option value='5'>$$$$$</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            type='submit'
            className='btn btn-primary col'
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGift;
