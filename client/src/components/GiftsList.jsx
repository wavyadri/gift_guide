import React, { useEffect } from 'react';
import GiftFinder from '../apis/GiftFinder';

const GiftList = () => {
  useEffect(async () => {
    try {
      const response = await GiftFinder.get('/');
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  return (
    <div className='list-group'>
      <table className='table table-hover'>
        <thead>
          <tr className='bg-primary text-light'>
            <th scope='col'>Gift</th>
            <th scope='col'>Vendor</th>
            <th scope='col'>Price Range</th>
            <th scope='col'>Ratings</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody className='table-dark'>
          <tr>
            <td>goggles</td>
            <td>winners</td>
            <td>$$</td>
            <td>ratings</td>
            <td>
              <button className='btn btn-warning'>update</button>
            </td>
            <td>
              <button className='=btn btn-danger'>delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GiftList;
