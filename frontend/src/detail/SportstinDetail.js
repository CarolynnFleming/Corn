import React from 'react'
import sportstin from '../data/sportstindata';
import { Link, useParams } from 'react-router-dom';
import CartContext from '../Context/Cart/CartContext';
import { useContext } from 'react'

export default function SportstinDetail() {
    const { id } = useParams();
    const sportstins = sportstin.find((x) => x.id === id)
    const { addToCart, increase, cartItems } = useContext(CartContext);;
    if(!sportstins) {
        return <div> Product Not Found</div>
    }
    const isInCart = (sportstins) => {
      return !!cartItems.find((item) => item.id === sportstins.id);
    };
    return (
      <div>
        <Link className="back"to="/sportstin">Back to sportstins</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={sportstins.image} alt={sportstins.name}/>
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{sportstins.name}</h1>
                  </li>
                  <li>
                    Price : ${sportstins.price}
                  </li>
                  <li>
                    description: {sportstins.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${sportstins.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {sportstins.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='error'>Unavailable</span>)}
                                    </div>
                            </div>
                        </li>
                        <li>
                            {isInCart(sportstins) && (
                              <button className='button-85 block' onClick={() => {increase(sportstins)}}>Add More</button>
                            )}
                            {!isInCart(sportstins) && (<button className='button-85 block' onClick={() => addToCart(sportstins)}>Add to Cart</button>)}
                        </li>
                    </ul>
                </div>
              </div>
          </div>
      </div>
    )
}