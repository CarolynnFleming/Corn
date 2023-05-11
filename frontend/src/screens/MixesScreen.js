import React from 'react'
import mixes from '../data/mixesdata'
import { Link } from 'react-router-dom';
export default function MixesScreen() {

  return (
    <div>
<Link className="back"to="/offeringscreen">Back</Link>
    <div className="row center">
       
        {
        mixes.map((mixe) =>(
          <div key={mixe.id}className="card">
          <Link to={`/mixesbags/${mixe.id}`}>
                 <img className="medium"src={mixe.image} alt="popcorn bags"/>
             </Link>
             <div className="card-body">
                 <Link to={`/mixesbags/${mixe.id}`}>
                     <h2>{mixe.name}</h2>
                 </Link>
                 
               <div className="detail">{mixe.sizes}<br/> ${mixe.price.toFixed(2)}</div>
             </div>
             </div>

        ))
      }

      </div>
      </div>
  )
}
