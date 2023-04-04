import React from 'react'
import { Link } from 'react-router-dom';

export default function Bags(props) {
    const { bag } = props;
  return (
    <div key={bag.id}className="card">
 <Link to={`/Bags/${bag.id}`}>
        <img className="medium"src={bag.image} alt="popcorn bags"/>
    </Link>
    <div className="card-body">
        <Link to={`/Bags/${bag.id}`}>
            <h2>{bag.name}</h2>
        </Link>
        
      <div className="detail">{bag.sizes}<br/> ${bag.price}</div>
    </div>
    </div>
  )
}
