import React from 'react'
import bucket from '../data/bucketdata';
import { Link } from 'react-router-dom';
export default function BucketScreen() {
  return (
    <div className="row center">
    {
    bucket.map((buckets) =>(
      <div key={buckets.id}className="card">
      <Link to={`/buckets/${buckets.id}`}>
             <img className="medium"src={buckets.image} alt="popcorn buckets"/>
         </Link>
         <div className="card-body">
             <Link to={`/bucket/${buckets.id}`}>
                 <h2>{buckets.name}</h2>
             </Link>
             
           <div className="detail">{buckets.sizes}<br/> ${buckets.price}</div>
         </div>
         </div>

    ))
  }

  </div>
  )
}