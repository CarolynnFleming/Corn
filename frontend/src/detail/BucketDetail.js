// import React, { useEffect,useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import { detailsBucket } from '../actions/bucketActions';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';


// export default function BucketDetail() {
//   const history = useNavigate();
//   const dispatch = useDispatch(); 
//   const { id }= useParams();
//   const [qty, setQty] = useState(1);
//    const bucketDetails = useSelector((state) => state.bucketDetails);
//   const { loading, error, bucket } = bucketDetails;

//   useEffect(() => {
//     dispatch(detailsBucket(id));
//   }, [dispatch, id]);
// const addToCartHandler = (e) => {
//     e.preventDefault();
//     history(`/cart/${id}?qty=${qty}`);
//   };
    
//     return (
//       <div>
  
//           {loading ? (
//           <LoadingBox></LoadingBox>
//           ): error ? (
//           <MessageBox variant='danger'>{error}</MessageBox>
//        ):( 
//         <div>
//         <Link className="back"to="/bucket">Back to buckets</Link>
//           <div className='row top'>
//               <div className='col-2'>
//               <img className='large' src={bucket?.image} alt={bucket?.name}/>
              
//               </div>
//               <div className='col-1'>
//                 <ul>
//                     <li>
//                   <h1>{bucket?.name}</h1>
//                   </li>
//                   <li>
//                     Price : ${bucket?.price}
//                   </li>
//                   <li>
//                     description: {bucket?.description}
//                   </li>
//                 </ul>
//               </div>
//               <div className='col-1'>
//                 <div className='card card-body' >
//                     <ul>
//                         <li>
//                             <div className='row'>
//                                 <div>Price</div>
//                                 <div className='price'>${bucket?.price}</div>
//                             </div>
//                         </li>
//                         <li>
//                             <div className='row'>
//                                 <div>Status</div>
//                                 <div >
//                                     {bucket?.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='danger'>Unavailable</span>)}
//                                     </div>
//                             </div>
//                         </li>
//                        {bucket.countInStock > 0 && (
//                           <>
//                             <li>
//                             <div className="row">
//                               <div>Qty</div>
//                               <div>
//                                 <select
//                                   value={qty}
//                                   onChange={(e) => setQty(e.target.value)}
//                                 >
//                                   {[...Array(bucket.countInStock).keys()].map(
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
//                           <li>
//                             <button
//                               onClick={addToCartHandler}
//                               className='button-85 block'
//                             >
//                               Add to Cart
//                             </button>
//                           </li>
//                             </>
                           
//                           )
//                         }
                        
//                     </ul>
//                 </div>
//               </div>
//           </div>
//       </div>
//          )}
//       </div> 
//     );
// }

    

import React from 'react'
import bucketdata from '../data/bucketdata';
import { Link, useParams } from 'react-router-dom';
import CartContext from '../Context/Cart/CartContext';
import { useContext } from 'react'

export default function BucketDetail() {
    const { id } = useParams();
    const { addToCart, increase, cartItems } = useContext(CartContext);
    const bucket = bucketdata.bucket.find((x) => x.id === id);
    if(!bucket) {
        return <div> Product Not Found</div>
    }
    const isInCart = (bucket) => {
      return !!cartItems.find((item) => item.id === bucket.id);
    };
    return (
      <div>
        <Link className="back"to="/bucket">Back to Bags</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={bucket.image} alt={bucket.name}/>
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{bucket.name}</h1>
                  </li>
                  <li>
                    Price : ${bucket.price}
                  </li>
                  <li>
                    description: {bucket.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${bucket.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {bucket.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='error'>Unavailable</span>)}
                                    </div>
                            </div>
                        </li>
                        <li>
                            {isInCart(bucket) && (
                              <button className='button-85 block' onClick={() => {increase(bucket)}}>Add More</button>
                            )}
                            {!isInCart(bucket) && (<button className='button-85 block' onClick={() => addToCart(bucket)}>Add to Cart</button>)}
                        </li>
                    </ul>
                </div>
              </div>
          </div>
      </div>
    )
}

