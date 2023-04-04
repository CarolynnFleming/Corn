import React from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';

// import MessageBox from '../components/MessageBox'
// import LoadingBox from '../components/LoadingBox'
// import { listOfferings } from '../actions/offeringActions';
import { Link } from 'react-router-dom';
// import { useGetAllOfferingsQuery } from '../features/offeringsApi';
import data from '../data/data';



export default function OfferingScreen() {
// const {data, error, loading} = useGetAllOfferingsQuery();
  // const dispatch = useDispatch();
  // const offeringList = useSelector((state) => state.offeringList);
  // const { loading, error, offerings  } = offeringList;
  // useEffect(() => {
  //   dispatch(listOfferings());
  // }, [dispatch])
  return (
  //   <div>
  //     {loading ? (
  //     <LoadingBox></LoadingBox>
  //     ): error ? (
  //     <MessageBox variant='danger'>{error}</MessageBox>
  //  ):( 
   <div className="row center">
        {data.offerings.map((offering) =>(
         <div key={offering.id}className="card">
         <Link to={offering.location}>
             <img className="medium"src={offering.image} alt="popcorn bags"/>
         </Link>
         <div className="card-body">
             <Link to={offering.location}>
                 <h2>{offering.name}</h2>
             </Link>
           <div className="detail">{offering.flavors} Flavors Available<br/> {offering.sizes}Sizes Available</div>
         </div>
     </div>

        ))}
        </div>
    //  )}
   
      
  //     </div>
  )
}
