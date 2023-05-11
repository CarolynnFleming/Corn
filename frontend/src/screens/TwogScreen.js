import React from 'react'
import twog from '../data/twogdata'
import {Link} from 'react-router-dom'
export default function TwogScreen() {
  return (
    <div>
    <Link className="back"to="/offeringscreen">Back</Link>
    
    <div className="row center">
    
    {
    twog.map((twogs) =>(
      <div key={twogs.id}className="card">
      <Link to={`/twog/${twogs.id}`}>
             <img className="medium"src={twogs.image} alt="popcorn twogs"/>
         </Link>
         <div className="card-body">
             <Link to={`/twog/7/${twogs.id}`}>
                 <h2>{twogs.name}</h2>
             </Link>
             
           <div className="detail">{twogs.sizes}<br/> ${twogs.price.toFixed(2)}</div>
         </div>
         </div>

    ))
  }

  </div>
  </div>
  )
}
