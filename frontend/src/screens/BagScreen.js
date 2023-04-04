// import React from 'react'
// import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { listBag } from '../actions/bagActions';
// import MessageBox from '../components/MessageBox'
// import LoadingBox from '../components/LoadingBox'
// import Bags from '../components/Bags';

// export default function BagScreen() {
//   const dispatch = useDispatch();
//   const bagList = useSelector((state) => state.bagList);
//   const { loading, error, bag  } = bagList;
//   useEffect(() => {
//     dispatch(listBag());

//   }, [dispatch])
//   return (
//     <div>
//       <Link className="back"to="/offeringscreen">Back to Offerings</Link>
//       {loading ? (
//       <LoadingBox></LoadingBox>
//       ): error ? (
//       <MessageBox variant='danger'>{error}</MessageBox>
//    ):( 
//    <div className="row center">
//         {bag.map((bag) =>(
//           <Bags key={bag.id} bag={bag}></Bags>

//         ))}
//         </div>
//      )}
   
      
//       </div>
//   )
// }

import React from 'react'
import bag from '../data/bagdata';
import Bags from '../components/Bags';
export default function bagScreen() {
  return (
    <div className="row center">
    {
    bag.map((bag) =>(
      <Bags key={bag.id} bag={bag}></Bags>

    ))
  }

  </div>
  )
}