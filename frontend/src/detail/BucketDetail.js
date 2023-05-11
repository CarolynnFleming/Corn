import React from 'react'
import bucket from '../data/bucketdata';
import { Link, useParams } from 'react-router-dom';
import CartContext from '../Context/Cart/CartContext';
import { useContext } from 'react'

export default function BucketDetail() {
    const { id } = useParams();
    const { addToCart, increase, cartItems } = useContext(CartContext);
    const buckets = bucket.find((x) => x.id === id);
    if(!bucket) {
        return <div> Product Not Found</div>
    }
    const isInCart = (buckets) => {
      return !!cartItems.find((item) => item.id === buckets.id);
    };
    return (
      <div>
        <Link className="back"to="/bucket">Back</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={buckets.image} alt={buckets.name}/>
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{buckets.name}</h1>
                  </li>
                  
                  <li>
                    description: {buckets.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${buckets.price.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {buckets.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='error'>Unavailable</span>)}
                                    </div>
                            </div>
                        </li>
                        <li>
                            {isInCart(buckets) && (
                              <button className='button-85 block' onClick={() => {increase(buckets)}}>Add More</button>
                            )}
                            {!isInCart(buckets) && (<button className='button-85 block' onClick={() => addToCart(buckets)}>Add to Cart</button>)}
                        </li>
                    </ul>
                </div>
              </div>
          </div>
      </div>
    )
}

