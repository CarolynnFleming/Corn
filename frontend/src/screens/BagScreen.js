
import React from 'react'
import bag from '../data/bagdata';
import { Link } from 'react-router-dom';
export default function bagScreen() {
  return (
    <div className="row center">
    {
    bag.map((bags) =>(
      <div key={bags.id}className="card">
      <Link to={`/Bags/${bags.id}`}>
             <img className="flowers"src={bags.image} alt="popcorn bags"/>
         </Link>
         <div className="card-body">
             <Link to={`/Bags/${bags.id}`}>
                 <h2>{bags.name}</h2>
             </Link>
             
           <div className="detail">{bags.sizes} ${bags.price}</div>
         </div>
         </div>

    ))
  }

  </div>
  )
}