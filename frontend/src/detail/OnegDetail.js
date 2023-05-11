import React from 'react'
import oneg from '../data/onegdata';
import { Link, useParams } from 'react-router-dom';
import CartContext from '../Context/Cart/CartContext';
import { useContext } from 'react'

export default function OnegDetail() {
    const { id } = useParams();
    const onegs = oneg.find((x) => x.id === id);
    const { addToCart, increase, cartItems } = useContext(CartContext);
    if(!onegs) {
        return <div> Product Not Found</div>
    }
    const isInCart = (onegs) => {
      return !!cartItems.find((item) => item.id === onegs.id);
    };
    return (
      <div>
        <Link className="back"to="/oneg">Back</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={onegs.image} alt={onegs.name}/>
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{onegs.name}</h1>
                  </li>
                  <li>
                    Price : ${onegs.price}
                  </li>
                  <li>
                    description: {onegs.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${onegs.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {onegs.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='error'>Unavailable</span>)}
                                    </div>
                            </div>
                        </li>
                        <li>
                            {isInCart(onegs) && (
                              <button className='button-85 block' onClick={() => {increase(onegs)}}>Add More</button>
                            )}
                            {!isInCart(onegs) && (<button className='button-85 block' onClick={() => addToCart(onegs)}>Add to Cart</button>)}
                        </li>
                    </ul>
                </div>
              </div>
          </div>
      </div>
    )
}