import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GiftFinder from '../apis/GiftFinder';
import { GiftsContext } from '../context/GiftsContext';

const GiftList = () => {
  const { gifts, setGifts, deleteGift } = useContext(GiftsContext);
  const fetchData = async () => {
    try {
      const response = await GiftFinder.get('/');
      setGifts(response.data.data.gifts);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await GiftFinder.delete(`/${id}`);
      deleteGift(id);
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

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
          {gifts &&
            gifts.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.vendor}</td>
                  <td>{'$'.repeat(item.price_range)}</td>
                  <td>ratings</td>
                  <td>
                    <Link to={`/gifts/${item.id}/update`}>
                      <button className='btn btn-warning'>update</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={() => handleDelete(item.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default GiftList;
