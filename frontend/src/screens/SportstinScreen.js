import React from 'react'
import sportstin from '../data/sportstindata'
import {Link} from 'react-router-dom'
export default function SportstinScreen() {
  return (
    <div>
    <Link className="back"to="/offeringscreen">Back</Link>
    <div className="row center">
       <Link className="back"to="/offeringscreen">Back</Link>
        {
        sportstin.map((sportstins) =>(
          <div key={sportstins.id}className="card">
          <Link to={`/sportstin/${sportstins.id}`}>
                 <img className="medium"src={sportstins.image} alt="popcorn sportstins"/>
             </Link>
             <div className="card-body">
                 <Link to={`/sportstin/${sportstins.id}`}>
                     <h2>{sportstins.name}</h2>
                 </Link>
                 
               <div className="detail">{sportstins.sizes}<br/> ${sportstins.price}</div>
             </div>
             </div>

        ))
      }

      </div>
      </div> 
  )
}
