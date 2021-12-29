import React from 'react';

const AddGift = () => {
  return (
    <div className='mb-4'>
      <form action=''>
        <div className='form-row row'>
          <div className='col'>
            <input type='text' className='form-control' placeholder='name' />
          </div>
          <div className='col'>
            <input type='text' className='form-control' placeholder='vendor' />
          </div>
          <div className='col'>
            <select className='custom-select mr-sm-2 form-select'>
              <option disabled selected>
                Price Range
              </option>
              <option value='1'>$</option>
              <option value='2'>$$</option>
              <option value='3'>$$$</option>
              <option value='4'>$$$$</option>
              <option value='5'>$$$$$</option>
            </select>
          </div>
          <button className='btn btn-primary col'>Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddGift;
