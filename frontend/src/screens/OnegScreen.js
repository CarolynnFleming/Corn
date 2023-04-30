import React from 'react'
import oneg from '../data/onegdata'
import { Link } from 'react-router-dom'
export default function OnegScreen() {
  return (
    <div className="row center">
    {
    oneg.map((onegs) =>(
      
<div key={onegs.id}className="card">
   <Link to={`/oneg/${onegs.id}`}>
          <img className="medium"src={onegs.image} alt="popcorn onegs"/>
      </Link>
      <div className="card-body">
          <Link to={`/oneg/${onegs.id}`}>
              <h2>{onegs.name}</h2>
          </Link>
          
        <div className="detail">{onegs.sizes}<br/> ${onegs.price}</div>
      </div>
      </div>
    ))
  }

  </div>
  )
}
