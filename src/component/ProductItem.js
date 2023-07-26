import { useEffect, useState } from 'react';
import Slider from './Slider';
import { Rating } from 'react-simple-star-rating';

const ProductItem = (props) => {
  const [ratingValue, setRatingValue] = useState(0);
  useEffect(() => {
    setRatingValue(props.rating);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className='col-lg-4 px-3 py-3'>
        <div className="card">
          <Slider p={props.cPath} />
          <div className="card-body">
            <Rating initialValue={ratingValue} readonly size={16} />
            <p className='mb-0 fnt-11'>{props.brand}</p>
            <h5 className="card-title h4">{props.title}</h5>
            <p className="card-text h6">{props.des}</p>
            <div className='d-flex align-items-center justify-content-between'>
              <p className='mb-0'>Price: ${props.price}</p>
              <i>InStock : {props.stock}</i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
