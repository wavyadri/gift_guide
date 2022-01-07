import { useState } from 'react';
import { useParams } from 'react-router-dom';
import GiftFinder from '../apis/GiftFinder';

const AddReview = (props) => {
  const { id } = useParams();

  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState('Rating');

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      const response = await GiftFinder.post(`/${id}/add-review`, {
        name,
        text: reviewText,
        rating,
      });

      // trigger hard refresh
      window.location.reload(false);
    } catch (err) {
      console.log(err.message);
    } finally {
      setName('');
      setReviewText('');
      setRating('Rating');
    }
  };

  return (
    <div className='mb-2'>
      <form action=''>
        <div className='form-row'>
          <div className='form-group col mb-3'>
            <label htmlFor='name'>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id='name'
              placeholder='name'
              type='text'
              className='form-control'
              required
            />
          </div>
          <div className='form-group col mb-3'>
            <label htmlFor='rating'>Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id='rating'
              className='form-select'
            >
              <option disabled>Rating</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
        </div>
        <div className='form-group mb-3'>
          <label htmlFor='review'>Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            id='review'
            className='form-control'
          ></textarea>
        </div>
        <button
          type='submit'
          onClick={handleSubmitReview}
          className='btn btn-primary'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
