import StarRating from './StarRating';

const Reviews = (props) => {
  const { reviews } = props;
  return (
    <div className='d-flex justify-content-center row mb-2'>
      {reviews.map((review) => {
        return (
          <div
            key={review.id}
            className='card text-white bg-primary mb-3 mx-2 col-3'
          >
            <div className='card-header d-flex justify-content-between'>
              <span>{review.name}</span>
              <span>
                <StarRating rating={review.rating} />
              </span>
            </div>
            <div className='card-body'>
              <p className='card-text'>{review.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
