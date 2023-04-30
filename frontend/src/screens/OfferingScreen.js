import React from 'react'
import { Link } from 'react-router-dom';
import offerings from '../data/data';



export default function OfferingScreen() {

  return (
  //   <div>
  //     {loading ? (
  //     <LoadingBox></LoadingBox>
  //     ): error ? (
  //     <MessageBox variant='danger'>{error}</MessageBox>
  //  ):( 
   <div className="row center">
        {offerings.map((offering) =>(
         <div key={offering.location} className="card">
         <Link to={offering.location}>
             <img className="cardsize"src={offering.image} alt="popcorn bags"/>
         </Link>
         <div className="card-body">
             <Link to={offering.location}>
                 <h2>{offering.name}</h2>
             </Link>
           <div className="detail">{offering.flavors} Flavors Available</div>
         </div>
     </div>

        ))}
        </div>
    //  )}
   
      
  //     </div>
  )
}
