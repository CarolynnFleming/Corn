// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import { detailsGng } from '../actions/gngActions';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';


// export default function GngDetail() {
//   const dispatch = useDispatch(); 
//   const { id }= useParams();
//   const history = useNavigate();
//   const [qty, setQty] = useState(1);
//    const gngDetails = useSelector((state) => state.gngDetails);
//   const { loading, error, gng } = gngDetails;

//   useEffect(() => {
//     dispatch(detailsGng(id));
//   }, [dispatch, id]);
//   const addToCartHandler = (e) => {
//     e.preventDefault();
//     history(`/cart/${id}?qty=${qty}`);
//   };
//     return (
//       <div>
  
//       {loading ? (
//       <LoadingBox></LoadingBox>
//       ): error ? (
//       <MessageBox variant='danger'>{error}</MessageBox>
//    ):( 
//     <div>
//     <Link className="back"to="/Gng">Back to gngs</Link>
//       <div className='row top'>
//           <div className='col-2'>
//           <img className='large' src={gng?.image} alt={gng?.name}/>
          
//           </div>
//           <div className='col-1'>
//             <ul>
//                 <li>
//               <h1>{gng?.name}</h1>
//               </li>
//               <li>
//                 Price : ${gng?.price}
//               </li>
//               <li>
//                 description: {gng?.description}
//               </li>
//             </ul>
//           </div>
//           <div className='col-1'>
//             <div className='card card-body' >
//                 <ul>
//                     <li>
//                         <div className='row'>
//                             <div>Price</div>
//                             <div className='price'>${gng?.price}</div>
//                         </div>
//                     </li>
//                     <li>
//                         <div className='row'>
//                             <div>Status</div>
//                             <div >
//                                 {gng?.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='danger'>Unavailable</span>)}
//                                 </div>
//                         </div>
//                     </li>
//                     {gng.countInStock > 0 && (
//                           <>
//                             <li>
//                             <div className="row">
//                               <div>Qty</div>
//                               <div>
//                                 <select
//                                   value={qty}
//                                   onChange={(e) => setQty(e.target.value)}
//                                 >
//                                   {[...Array(gng.countInStock).keys()].map(
//                                     (x) => (
//                                       <option key={x + 1} value={x + 1}>
//                                         {x + 1}
//                                       </option>
//                                     )
//                                   )}
//                                 </select>
//                               </div>
//                             </div>
//                           </li>
//                     <li>
//                         <button onClick={addToCartHandler} className='button-85 block'>Add to Cart</button>
//                     </li>
//                     </>
//                     )
//                     }
//                 </ul>
//             </div>
//           </div>
//       </div>
//   </div>
//      )}
//   </div> 
//     )
// }


import React from 'react'
import gngdata from '../data/gngdata';
import { Link, useParams } from 'react-router-dom';
import CartContext from '../Context/Cart/CartContext';
import { useContext } from 'react'
export default function GngDetail() {
    const { id } = useParams();
    const { addToCart, increase, cartItems } = useContext(CartContext);
    const gng = gngdata.gng.find((x) => x.id === id);
    if(!gng) {
        return <div> Product Not Found</div>
    }
    const isInCart = (gng) => {
      return !!cartItems.find((item) => item.id === gng.id);
    };
    return (
      <div>
        <Link className="back"to="/gng">Back to Grab and Go</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={gng.image} alt={gng.name}/>
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{gng.name}</h1>
                  </li>
                  <li>
                    Price : ${gng.price}
                  </li>
                  <li>
                    description: {gng.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${gng.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {gng.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='error'>Unavailable</span>)}
                                    </div>
                            </div>
                        </li>
                        <li>
                            {isInCart(gng) && (
                              <button className='button-85 block' onClick={() => {increase(gng)}}>Add More</button>
                            )}
                            {!isInCart(gng) && (<button className='button-85 block' onClick={() => addToCart(gng)}>Add to Cart</button>)}
                        </li>
                    </ul>
                </div>
              </div>
          </div>
      </div>
    )
}