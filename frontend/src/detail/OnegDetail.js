// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useParams } from 'react-router-dom';
// import { detailsOneg } from '../actions/onegActions';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';


// export default function OnegDetail() {
//   const dispatch = useDispatch(); 
//   const { id }= useParams();
//    const onegDetails = useSelector((state) => state.onegDetails);
//   const { loading, error, oneg } = onegDetails;
//   useEffect(() => {
//     dispatch(detailsOneg(id));
//   }, [dispatch, id]);

//     return (
//       <div>
  
//           {loading ? (
//           <LoadingBox></LoadingBox>
//           ): error ? (
//           <MessageBox variant='danger'>{error}</MessageBox>
//        ):( 
//         <div>
//         <Link className="back"to="/oneg">Back to 1 Gallons</Link>
//           <div className='row top'>
//               <div className='col-2'>
//               <img className='large' src={oneg?.image} alt={oneg?.name}/>
              
//               </div>
//               <div className='col-1'>
//                 <ul>
//                     <li>
//                   <h1>{oneg?.name}</h1>
//                   </li>
//                   <li>
//                     Price : ${oneg?.price}
//                   </li>
//                   <li>
//                     description: {oneg?.description}
//                   </li>
//                 </ul>
//               </div>
//               <div className='col-1'>
//                 <div className='card card-body' >
//                     <ul>
//                         <li>
//                             <div className='row'>
//                                 <div>Price</div>
//                                 <div className='price'>${oneg?.price}</div>
//                             </div>
//                         </li>
//                         <li>
//                             <div className='row'>
//                                 <div>Status</div>
//                                 <div >
//                                     {oneg?.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='danger'>Unavailable</span>)}
//                                     </div>
//                             </div>
//                         </li>
//                         <li>
//                             <button className='button-85 block'>Add to Cart</button>
//                         </li>
//                     </ul>
//                 </div>
//               </div>
//           </div>
//       </div>
//          )}
//       </div> 
//     )
// }

import React from 'react'
import onegdata from '../data/onegdata';
import { Link, useParams } from 'react-router-dom';
import CartContext from '../Context/Cart/CartContext';
import { useContext } from 'react'

export default function OnegDetail() {
    const { id } = useParams();
    const oneg = onegdata.oneg.find((x) => x.id === id);
    const { addToCart, increase, cartItems } = useContext(CartContext);
    if(!oneg) {
        return <div> Product Not Found</div>
    }
    const isInCart = (mixes) => {
      return !!cartItems.find((item) => item.id === mixes.id);
    };
    return (
      <div>
        <Link className="back"to="/oneg">Back to Bags</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={oneg.image} alt={oneg.name}/>
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{oneg.name}</h1>
                  </li>
                  <li>
                    Price : ${oneg.price}
                  </li>
                  <li>
                    description: {oneg.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${oneg.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {oneg.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='error'>Unavailable</span>)}
                                    </div>
                            </div>
                        </li>
                        <li>
                            {isInCart(oneg) && (
                              <button className='button-85 block' onClick={() => {increase(oneg)}}>Add More</button>
                            )}
                            {!isInCart(oneg) && (<button className='button-85 block' onClick={() => addToCart(oneg)}>Add to Cart</button>)}
                        </li>
                    </ul>
                </div>
              </div>
          </div>
      </div>
    )
}