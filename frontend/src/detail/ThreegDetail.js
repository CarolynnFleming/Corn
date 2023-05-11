import React from 'react'
import threeg from '../data/threegdata';
import { Link, useParams } from 'react-router-dom';
import CartContext from '../Context/Cart/CartContext';
import { useContext } from 'react'

export default function ThreegDetail() {
    const { id } = useParams();
    const threegs = threeg.find((x) => x.id === id);
    const { addToCart, increase, cartItems } = useContext(CartContext);
    if(!threegs) {
        return <div> Product Not Found</div>
    }
    const isInCart = (threegs) => {
      return !!cartItems.find((item) => item.id === threegs.id);
    };
    return (
      <div>
        <Link className="back"to="/threeg">Back</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={threegs.image} alt={threegs.name}/>
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{threegs.name}</h1>
                  </li>
                
                  <li>
                    description: {threegs.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${threegs.price.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {threegs.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='error'>Unavailable</span>)}
                                    </div>
                            </div>
                        </li>
                        <li>
                            {isInCart(threegs) && (
                              <button className='button-85 block' onClick={() => {increase(threegs)}}>Add More</button>
                            )}
                            {!isInCart(threegs) && (<button className='button-85 block' onClick={() => addToCart(threegs)}>Add to Cart</button>)}
                        </li>
                    </ul>
                </div>
              </div>
          </div>
      </div>
    )
}
