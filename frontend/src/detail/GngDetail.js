import React from 'react'
import gng from '../data/gngdata';
import { Link, useParams } from 'react-router-dom';
import CartContext from '../Context/Cart/CartContext';
import { useContext } from 'react'
export default function GngDetail() {
    const { id } = useParams();
    const { addToCart, increase, cartItems } = useContext(CartContext);
    const gngs = gng.find((x) => x.id === id);
    if(!gngs) {
        return <div> Product Not Found</div>
    }
    const isInCart = (gngs) => {
      return !!cartItems.find((item) => item.id === gngs.id);
    };
    return (
      <div>
        <Link className="back"to="/gng">Back to Grab and Go</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={gngs.image} alt={gngs.name}/>
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{gngs.name}</h1>
                  </li>
                  <li>
                    Price : ${gngs.price}
                  </li>
                  <li>
                    description: {gngs.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${gngs.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {gngs.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='error'>Unavailable</span>)}
                                    </div>
                            </div>
                        </li>
                        <li>
                            {isInCart(gngs) && (
                              <button className='button-85 block' onClick={() => {increase(gngs)}}>Add More</button>
                            )}
                            {!isInCart(gngs) && (<button className='button-85 block' onClick={() => addToCart(gngs)}>Add to Cart</button>)}
                        </li>
                    </ul>
                </div>
              </div>
          </div>
      </div>
    )
}