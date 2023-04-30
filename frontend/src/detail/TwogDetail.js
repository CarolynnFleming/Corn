import React from 'react'
import twog from '../data/twogdata';
import { Link, useParams } from 'react-router-dom';
import CartContext from '../Context/Cart/CartContext';
import { useContext } from 'react'

export default function TwogDetail() {
    const { id } = useParams();
    const twogs = twog.find((x) => x.id === id);
    const { addToCart, increase, cartItems } = useContext(CartContext);
    if(!twogs) {
        return <div> Product Not Found</div>
    }
    const isInCart = (twogs) => {
      return !!cartItems.find((item) => item.id === twogs.id);
    };
    return (
      <div>
        <Link className="back"to="/twog">Back to Bags</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={twogs.image} alt={twogs.name}/>
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{twogs.name}</h1>
                  </li>
                  <li>
                    Price : ${twogs.price}
                  </li>
                  <li>
                    description: {twogs.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${twogs.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {twogs.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='error'>Unavailable</span>)}
                                    </div>
                            </div>
                        </li>
                        <li>
                            {isInCart(twogs) && (
                              <button className='button-85 block' onClick={() => {increase(twogs)}}>Add More</button>
                            )}
                            {!isInCart(twogs) && (<button className='button-85 block' onClick={() => addToCart(twogs)}>Add to Cart</button>)}
                        </li>
                    </ul>
                </div>
              </div>
          </div>
      </div>
    )
}