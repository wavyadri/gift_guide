import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GiftFinder from '../apis/GiftFinder';
import { GiftsContext } from '../context/GiftsContext';
import StarRating from './StarRating';

const GiftList = () => {
  const { gifts, setGifts, deleteGift } = useContext(GiftsContext);
  const navigate = useNavigate();
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

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/gifts/${id}/update`);
  };

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await GiftFinder.delete(`/${id}`);
      deleteGift(id);
    } catch (err) {
      console.log(err.message);
    }
  };

  const renderRating = (gift) => {
    if (!gift.count) {
      return <span className='text-warning'>0 reviews</span>;
    }
    return (
      <>
        <StarRating rating={gift.average_rating} />
        <span className='text-warning mx-1'>({gift.count})</span>
      </>
    );
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
                <tr onClick={() => navigate(`/gifts/${item.id}`)} key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.vendor}</td>
                  <td>{'$'.repeat(item.price_range)}</td>
                  <td>{renderRating(item)}</td>
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, item.id)}
                      className='btn btn-warning'
                    >
                      update
                    </button>
                  </td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={(e) => handleDelete(e, item.id)}
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
