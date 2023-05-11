// import React from 'react'
// import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { listGng } from '../actions/gngActions';
// import MessageBox from '../components/MessageBox'
// import LoadingBox from '../components/LoadingBox'
// import Gng from '../components/Gng';

// export default function GrabnGoScreen() {
//   const dispatch = useDispatch();
//   const gngList = useSelector((state) => state.gngList);
//   const { loading, error, gng  } = gngList;
//   useEffect(() => {
//     dispatch(listGng());
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
//         {gng.map((gng) =>(
//           <Gng key={gng.id} gng={gng}></Gng>

//         ))}
//         </div>
//      )}
   
      
//       </div>
//   )
// }

import React from 'react'
import gng from '../data/gngdata'
import { Link } from 'react-router-dom'
export default function GrabnGoScreen() {

  return (
    <div>
<Link className="back"to="/offeringscreen">Back</Link>
    <div className="row center">
       
        {
        gng.map((gngs) =>(
          <div key={gngs.id}className="card">
          <Link to={`/Gng/${gngs.id}`}>
                 <img className="medium"src={gngs.image} alt="popcorn gngs"/>
             </Link>
             <div className="card-body">
                 <Link to={`/Gng/${gngs.id}`}>
                     <h2>{gngs.name}</h2>
                 </Link>
                 
               <div className="detail">{gngs.sizes}<br/> ${gngs.price}</div>
             </div>
             </div>

        ))
      }

      </div>
      </div>
  )
}
