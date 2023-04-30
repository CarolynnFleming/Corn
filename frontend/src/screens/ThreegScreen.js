import React from 'react'
import threeg from '../data/threegdata'
import {Link} from 'react-router-dom'
export default function ThreegScreen() {
  return (
    <div className="row center">
    {
    threeg.map((threegs) =>(
      <div key={threegs.id}className="card">
   <Link to={`/threeg/${threegs.id}`}>
          <img className="medium"src={threegs.image} alt="popcorn threegs"/>
      </Link>
      <div className="card-body">
          <Link to={`/threeg/${threegs.id}`}>
              <h2>{threegs.name}</h2>
          </Link>
          
        <div className="detail">{threegs.sizes}<br/> ${threegs.price}</div>
      </div>
      </div>

    ))
  }

  </div>
  )
}